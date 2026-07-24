import { useState, type CSSProperties, type ReactNode } from 'react'

type SlotAccent = 'green' | 'blue'
type TooltipTone = 'gold' | 'blue' | 'green' | 'muted'

const GLOW: Record<SlotAccent, string> = {
  green: 'var(--glow-green)',
  blue: 'var(--glow-blue)',
}
const EDGE: Record<SlotAccent, string> = {
  green: 'var(--ore-green-bright)',
  blue: 'var(--ore-blue-bright)',
}
const TOOLTIP_TONE: Record<TooltipTone, string> = {
  gold: 'var(--ore-gold-bright)',
  blue: 'var(--ore-blue-bright)',
  green: 'var(--ore-green-bright)',
  muted: 'var(--ore-text-muted)',
}

interface InventorySlotProps {
  icon: ReactNode
  label?: ReactNode
  accent?: SlotAccent
  featured?: boolean
  tooltip?: string
  tooltipSub?: string
  tooltipTone?: TooltipTone
  style?: CSSProperties
}

export function InventorySlot({
  icon,
  label,
  accent = 'blue',
  featured = false,
  tooltip,
  tooltipSub,
  tooltipTone = 'muted',
  style = {},
}: InventorySlotProps) {
  const [hover, setHover] = useState(false)
  const edge = EDGE[accent]
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        aspectRatio: featured ? 'auto' : '1 / 1',
        minHeight: featured ? 132 : 0,
        background: 'var(--ore-surface-2)',
        border: `2px solid ${hover ? edge : 'var(--ore-border)'}`,
        borderRadius: 'var(--radius-slot)',
        boxShadow: hover ? GLOW[accent] : 'var(--inset-slot)',
        padding: 14,
        transition:
          'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)',
        transform: hover ? 'scale(1.03)' : 'scale(1)',
        ...style,
      }}
    >
      {featured && <span className="enchant-glint" aria-hidden />}
      <div
        style={{
          fontSize: featured ? 40 : 30,
          lineHeight: 1,
          display: 'flex',
          color: 'var(--ore-text)',
        }}
      >
        {icon}
      </div>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: featured ? 13 : 11,
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: hover ? 'var(--ore-text-bright)' : 'var(--ore-text-muted)',
            textAlign: 'center',
            transition: 'color var(--dur) var(--ease-out)',
          }}
        >
          {label}
        </span>
      )}
      {tooltip && hover && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            padding: '7px 11px',
            background: 'var(--ore-tooltip-bg)',
            border: '2px solid var(--ore-tooltip-border)',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-panel)',
            fontFamily: 'var(--font-mono)',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--ore-text-bright)',
            }}
          >
            {tooltip}
          </div>
          {tooltipSub && (
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                marginTop: 3,
                letterSpacing: '0.04em',
                color: TOOLTIP_TONE[tooltipTone],
              }}
            >
              {tooltipSub}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
