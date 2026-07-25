import { BLOCK_LEVELS } from '@/data/contributions'
import type {
  BlockLevel,
  ContributionDay,
  RawContributionDay,
} from '@/data/contributions'

/** A grid column. `null` slots pad the first/last partial week. */
export type ContributionWeek = (ContributionDay | null)[]

export interface MonthLabel {
  /** Zero-based column this label sits above. */
  column: number
  /** Zero-based month, indexes into the i18n month array. */
  month: number
}

/** Clamps an out-of-range or fractional level onto the 0-4 ladder. */
export function toBlockLevel(value: number): BlockLevel {
  return BLOCK_LEVELS[Math.min(Math.max(Math.round(value), 0), 4)]
}

/** Narrows the raw JSON rows so `level` is a real BlockLevel. */
export function normalizeDays(raw: RawContributionDay[]): ContributionDay[] {
  return raw.map((day) => ({
    date: day.date,
    count: day.count,
    level: toBlockLevel(day.level),
  }))
}

export function totalCount(days: ContributionDay[]): number {
  return days.reduce((sum, day) => sum + day.count, 0)
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
