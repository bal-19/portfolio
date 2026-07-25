import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { useLang } from '@/hooks/useLang'
import { BLOCK_LEVELS, BLOCK_TIERS } from '@/data/contributions'
import type {
  BlockLevel,
  BlockTier,
  ContributionDay,
} from '@/data/contributions'
import { buildWeeks, monthLabels } from '@/lib/contributions'

const GAP = 3
const MONTH_ROW = 16
/** Floor keeps the grid legible on mobile (it scrolls); cap stops giant blocks. */
const MIN_CELL = 11
const MAX_CELL = 24
const MIN_LEGEND_CELL = 14
/** Reserved for the Mon/Wed/Fri column plus the gap after it. */
const WEEKDAY_W = 30
const LABEL_GAP = 6
const WEEKDAY_ROWS = [0, 1, 2, 3, 4, 5, 6]

/**
 * Sharp-cornered block face: top/left highlight, bottom/right shadow.
 * Level 0 skips the bevel so an empty slot reads as "no block here".
 */
function blockStyle(tier: BlockTier, size: number): CSSProperties {
  if (!tier.light || !tier.dark) {
    return {
      width: size,
      height: size,
      borderRadius: 0,
      background: tier.base,
      border: '1px solid var(--ore-border-dim)',
    }
  }

  const edge = size >= 16 ? 2 : 1
  return {
    width: size,
    height: size,
    borderRadius: 0,
    background: `linear-gradient(135deg, ${tier.light} 0%, ${tier.base} 38%, ${tier.base} 62%, ${tier.dark} 100%)`,
    boxShadow: `inset ${edge}px ${edge}px 0 0 ${tier.light}, inset -${edge}px -${edge}px 0 0 ${tier.dark}`,
  }
}

function formatDate(date: string, months: string[]): string {
  const [year, month, day] = date.split('-')
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`
}

interface HoverState {
  day: ContributionDay
  level: BlockLevel
  x: number
  y: number
  above: boolean
}

interface ContributionGraphProps {
  days: ContributionDay[]
  total: number
}

export function ContributionGraph({ days, total }: ContributionGraphProps) {
  const { t } = useLang()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState<HoverState | null>(null)

  const weeks = useMemo(() => buildWeeks(days), [days])
  const months = useMemo(() => monthLabels(weeks), [weeks])

  // Grow the blocks so the year fills the panel instead of stopping short of
  // it. Below MIN_CELL the grid overflows and the container scrolls instead.
  const [cell, setCell] = useState(MIN_CELL)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap || weeks.length === 0) return

    const measure = () => {
      const usable = wrap.clientWidth - WEEKDAY_W - LABEL_GAP
      const size = Math.floor(
        (usable - (weeks.length - 1) * GAP) / weeks.length,
      )
      setCell(Math.min(Math.max(size, MIN_CELL), MAX_CELL))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(wrap)
    // Fallback for orientation changes the observer can miss.
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [weeks.length])

  const column = cell + GAP
  const legendCell = Math.max(cell, MIN_LEGEND_CELL)

  const label = (day: ContributionDay, level: BlockLevel) => {
    const when = formatDate(day.date, t.github.months)
    const amount =
      day.count === 0
        ? t.github.none
        : `${day.count} ${day.count === 1 ? t.github.contribution : t.github.contributions}`
    return { when, amount, tier: BLOCK_TIERS[level] }
  }

  const handleEnter = (
    event: MouseEvent<HTMLSpanElement>,
    day: ContributionDay,
    level: BlockLevel,
  ) => {
    const wrap = wrapRef.current
    if (!wrap) return

    const cell = event.currentTarget.getBoundingClientRect()
    const box = wrap.getBoundingClientRect()
    const raw = cell.left - box.left + cell.width / 2
    const margin = 90
    const above = cell.top - box.top > 58

    setHover({
      day,
      level,
      x:
        box.width > margin * 2
          ? Math.min(Math.max(raw, margin), box.width - margin)
          : raw,
      y: (above ? cell.top : cell.bottom) - box.top,
      above,
    })
  }

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      <p
        className="font-mono text-ore-text-muted"
        style={{
          margin: '0 0 16px',
          fontSize: 12,
          letterSpacing: '0.06em',
        }}
      >
        <span className="font-bold text-ore-text-bright">{total}</span>{' '}
        {t.github.totalSuffix}
      </p>

      <div
        className="overflow-x-auto"
        style={{ overflowY: 'hidden', paddingBottom: 4 }}
      >
        <div style={{ display: 'flex', gap: 6, width: 'fit-content' }}>
          <div
            aria-hidden
            style={{
              display: 'grid',
              gridTemplateRows: `repeat(7, ${cell}px)`,
              rowGap: GAP,
              marginTop: MONTH_ROW,
              width: WEEKDAY_W,
            }}
          >
            {WEEKDAY_ROWS.map((row) => (
              <span
                key={row}
                className="font-mono text-ore-text-muted"
                style={{
                  fontSize: 9,
                  lineHeight: `${cell}px`,
                  letterSpacing: '0.06em',
                  paddingRight: 2,
                  textAlign: 'right',
                }}
              >
                {row === 1
                  ? t.github.weekdays.mon
                  : row === 3
                    ? t.github.weekdays.wed
                    : row === 5
                      ? t.github.weekdays.fri
                      : ''}
              </span>
            ))}
          </div>

          <div>
            <div
              aria-hidden
              style={{
                position: 'relative',
                height: MONTH_ROW,
                width: weeks.length * column,
              }}
            >
              {months.map((entry) => (
                <span
                  key={`${entry.column}-${entry.month}`}
                  className="font-mono text-ore-text-muted"
                  style={{
                    position: 'absolute',
                    left: entry.column * column,
                    top: 0,
                    fontSize: 10,
                    letterSpacing: '0.06em',
                  }}
                >
                  {t.github.months[entry.month]}
                </span>
              ))}
            </div>

            <div
              role="grid"
              aria-label={`${total} ${t.github.totalSuffix}`}
              style={{
                display: 'grid',
                gridTemplateRows: `repeat(7, ${cell}px)`,
                gridAutoFlow: 'column',
                gridAutoColumns: `${cell}px`,
                gap: GAP,
              }}
            >
              {weeks.map((week, weekIndex) =>
                week.map((day, row) => {
                  if (!day) {
                    return (
                      <span
                        key={`pad-${weekIndex}-${row}`}
                        aria-hidden
                        style={{ width: cell, height: cell }}
                      />
                    )
                  }

                  const { when, amount, tier } = label(day, day.level)
                  const active = hover?.day.date === day.date

                  return (
                    <span
                      key={day.date}
                      role="gridcell"
                      aria-label={`${when} — ${amount} (${tier.name})`}
                      onMouseEnter={(event) =>
                        handleEnter(event, day, day.level)
                      }
                      onMouseLeave={() => setHover(null)}
                      style={{
                        ...blockStyle(tier, cell),
                        outline: active
                          ? '1px solid var(--ore-text-bright)'
                          : 'none',
                        outlineOffset: 1,
                      }}
                    />
                  )
                }),
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 14,
          marginTop: 18,
        }}
      >
        <span
          className="font-mono uppercase text-ore-text-muted"
          style={{
            fontSize: 10,
            letterSpacing: '0.12em',
            lineHeight: `${legendCell}px`,
          }}
        >
          {t.github.legendLabel}
        </span>
        {BLOCK_LEVELS.map((level) => (
          <div
            key={level}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span
              aria-hidden
              style={blockStyle(BLOCK_TIERS[level], legendCell)}
            />
            <span
              className="font-mono text-ore-text-muted"
              style={{ fontSize: 10, letterSpacing: '0.06em' }}
            >
              {BLOCK_TIERS[level].short}
            </span>
          </div>
        ))}
      </div>

      {hover && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: hover.x,
            top: hover.y,
            transform: hover.above
              ? 'translate(-50%, calc(-100% - 8px))'
              : 'translate(-50%, 8px)',
            zIndex: 10,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            padding: '7px 11px',
            background: 'var(--ore-tooltip-bg)',
            border: '2px solid var(--ore-tooltip-border)',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-panel)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--ore-text-bright)',
            }}
          >
            {label(hover.day, hover.level).when} —{' '}
            {label(hover.day, hover.level).amount}
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              marginTop: 3,
              letterSpacing: '0.04em',
              color:
                hover.level === 0
                  ? 'var(--ore-text-muted)'
                  : BLOCK_TIERS[hover.level].base,
            }}
          >
            {BLOCK_TIERS[hover.level].name}
          </div>
        </div>
      )}
    </div>
  )
}
