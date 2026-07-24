import { useState, type CSSProperties, type ReactNode } from 'react'

type PanelAccent = 'none' | 'green' | 'blue' | 'gold' | 'red'

const ACCENT: Record<PanelAccent, string> = {
  none: 'var(--ore-border)',
  green: 'var(--ore-green)',
  blue: 'var(--ore-blue)',
  gold: 'var(--ore-gold)',
  red: 'var(--ore-red)',
}

interface PanelProps {
  children?: ReactNode
  label?: ReactNode
  accent?: PanelAccent
  interactive?: boolean
  inset?: boolean
  style?: CSSProperties
  bodyStyle?: CSSProperties
}

export function Panel({
  children,
  label,
  accent = 'none',
  interactive = false,
  inset = false,
  style = {},
  bodyStyle = {},
}: PanelProps) {
  const [hover, setHover] = useState(false)
  const edge = ACCENT[accent]
  const active = interactive && hover

  const wrap: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--ore-surface)',
    border: `2px solid ${active ? edge : 'var(--ore-border)'}`,
    borderRadius: 'var(--radius-lg)',
    boxShadow: active ? 'var(--shadow-float)' : 'var(--shadow-panel)',
    transform: active ? 'translateY(-3px)' : 'translateY(0)',
    transition:
      'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
    overflow: 'hidden',
    cursor: interactive ? 'pointer' : 'default',
    ...style,
  }

  const head: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '9px 14px',
    borderBottom: '2px solid var(--ore-border)',
    background: 'var(--ore-surface-3)',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ore-text-muted)',
  }

  const body: CSSProperties = {
    padding: 18,
    boxShadow: inset ? 'var(--inset-well)' : 'none',
    flex: 1,
    ...bodyStyle,
  }

  return (
    <div
      style={wrap}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {accent !== 'none' && (
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: edge,
            opacity: 0.9,
          }}
        />
      )}
      {label && (
        <div style={head}>
          <span
            style={{
              width: 6,
              height: 6,
              background: edge,
              display: 'inline-block',
            }}
          />
          {label}
        </div>
      )}
      <div style={body}>{children}</div>
    </div>
  )
}
