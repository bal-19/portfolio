import type { CSSProperties, ReactNode } from 'react'

type BadgeTone = 'neutral' | 'green' | 'blue' | 'gold' | 'red'

const TONE: Record<BadgeTone, { bd: string; fg: string; bg: string }> = {
  neutral: {
    bd: 'var(--ore-border-strong)',
    fg: 'var(--ore-text)',
    bg: 'var(--ore-surface-3)',
  },
  green: {
    bd: 'var(--ore-green)',
    fg: 'var(--ore-green-bright)',
    bg: 'rgba(62,126,43,0.14)',
  },
  blue: {
    bd: 'var(--ore-blue)',
    fg: 'var(--ore-blue-bright)',
    bg: 'rgba(35,117,179,0.14)',
  },
  gold: {
    bd: 'var(--ore-gold)',
    fg: 'var(--ore-gold-bright)',
    bg: 'rgba(218,140,26,0.14)',
  },
  red: {
    bd: 'var(--ore-red)',
    fg: 'var(--ore-red-bright)',
    bg: 'rgba(177,60,51,0.14)',
  },
}

interface BadgeProps {
  children?: ReactNode
  tone?: BadgeTone
  solid?: boolean
  style?: CSSProperties
}

export function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style = {},
}: BadgeProps) {
  const t = TONE[tone]
  const solidStyle: CSSProperties = solid
    ? { background: t.bd, color: 'var(--ore-black)', borderColor: t.bd }
    : {}
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.02em',
        padding: '4px 9px',
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        borderRadius: 'var(--radius-sm)',
        whiteSpace: 'nowrap',
        ...solidStyle,
        ...style,
      }}
    >
      {children}
    </span>
  )
}
