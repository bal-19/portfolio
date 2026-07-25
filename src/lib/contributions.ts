import type { BlockLevel, ContributionDay } from '@/data/contributions'

/** A grid column. `null` slots pad the first/last partial week. */
export type ContributionWeek = (ContributionDay | null)[]

export interface MonthLabel {
  /** Zero-based column this label sits above. */
  column: number
  /** Zero-based month, indexes into the i18n month array. */
  month: number
}

/** Quartile cut-offs [q1, q2, q3] of the non-zero days. */
export type ContributionScale = [number, number, number]

/** Nearest-rank percentile over an ascending list. */
function percentile(sorted: number[], p: number): number {
  const index = Math.ceil(p * sorted.length) - 1
  return sorted[Math.min(Math.max(index, 0), sorted.length - 1)]
}

/**
 * Quartiles of the days that actually have activity, the way GitHub's own
 * calendar does it. Taking fractions of the busiest day instead would let a
 * single heavy day drag every threshold up and flatten the whole year into
 * the lowest tier.
 */
export function buildScale(days: ContributionDay[]): ContributionScale {
  const active = days
    .map((day) => day.count)
    .filter((count) => count > 0)
    .sort((a, b) => a - b)

  if (active.length === 0) return [0, 0, 0]
  return [
    percentile(active, 0.25),
    percentile(active, 0.5),
    percentile(active, 0.75),
  ]
}

export function levelFor(count: number, scale: ContributionScale): BlockLevel {
  if (count <= 0) return 0
  const [q1, q2, q3] = scale
  if (count <= q1) return 1
  if (count <= q2) return 2
  if (count <= q3) return 3
  return 4
}

function weekdayOf(date: string): number {
  return new Date(`${date}T00:00:00Z`).getUTCDay()
}

/** Groups a flat day list into Sunday-first columns of 7. */
export function buildWeeks(days: ContributionDay[]): ContributionWeek[] {
  if (days.length === 0) return []

  const weeks: ContributionWeek[] = []
  let current: ContributionWeek = Array<ContributionDay | null>(
    weekdayOf(days[0].date),
  ).fill(null)

  for (const day of days) {
    if (current.length > 0 && weekdayOf(day.date) === 0) {
      weeks.push(current)
      current = []
    }
    current.push(day)
  }

  while (current.length < 7) current.push(null)
  weeks.push(current)

  return weeks
}

/** One label per month change, at the first column that month appears in. */
export function monthLabels(weeks: ContributionWeek[]): MonthLabel[] {
  const labels: MonthLabel[] = []
  let lastMonth = -1

  weeks.forEach((week, column) => {
    const first = week.find((day): day is ContributionDay => day !== null)
    if (!first) return

    const month = Number(first.date.slice(5, 7)) - 1
    if (month === lastMonth) return
    lastMonth = month
    labels.push({ column, month })
  })

  // The range usually opens mid-month, leaving a sliver too narrow to label
  // without colliding with the next one. Drop the sliver, not the full month.
  if (labels.length > 1 && labels[1].column - labels[0].column < 3)
    labels.shift()

  return labels
}
