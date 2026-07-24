import type { CSSProperties, ReactNode } from 'react'

type StatTone = 'green' | 'blue' | 'gold' | 'red' | 'muted'

const TONE: Record<StatTone, string> = {
  green: 'var(--ore-green-bright)',
  blue: 'var(--ore-blue-bright)',
  gold: 'var(--ore-gold-bright)',
  red: 'var(--ore-red-bright)',
  muted: 'var(--ore-text)',
}

interface StatCellProps {
  value: ReactNode
  label: ReactNode
  tone?: StatTone
  live?: boolean
  style?: CSSProperties
}

export function StatCell({
  value,
  label,
  tone = 'muted',
  live = false,
  style = {},
}: StatCellProps) {
  const color = TONE[tone]
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 6,
        background: 'var(--ore-surface)',
        border: '2px solid var(--ore-border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-panel)',
        padding: '18px 18px',
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        {live && (
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 10px 1px ${color}`,
              animation: 'orePulse 1.8s var(--ease-out) infinite',
            }}
          />
        )}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 30,
            lineHeight: 1,
            color: 'var(--ore-text-bright)',
            letterSpacing: '-0.01em',
          }}
        >
          {value}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ore-text-muted)',
        }}
      >
        {label}
      </span>
    </div>
  )
}
