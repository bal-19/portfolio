import type { CSSProperties, ReactNode } from 'react'

interface SectionHeaderProps {
  index?: string
  kicker?: ReactNode
  title?: ReactNode
  style?: CSSProperties
}

export function SectionHeader({
  index,
  kicker,
  title,
  style = {},
}: SectionHeaderProps) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {index != null && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--ore-green-bright)',
              border: '1px solid var(--ore-green)',
              borderRadius: 'var(--radius-sm)',
              padding: '3px 7px',
              background: 'rgba(62,126,43,0.12)',
            }}
          >
            {index}
          </span>
        )}
        {kicker && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ore-text-muted)',
            }}
          >
            {kicker}
          </span>
        )}
        <span style={{ flex: 1, height: 2, background: 'var(--ore-border)' }} />
      </div>
      {title && (
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'var(--fs-h2)',
            lineHeight: 'var(--lh-h2)',
            letterSpacing: 'var(--ls-h2)',
            color: 'var(--ore-text-bright)',
          }}
        >
          {title}
        </h2>
      )}
    </div>
  )
}
