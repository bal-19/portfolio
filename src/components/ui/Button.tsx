import {
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'

type ButtonColor = 'green' | 'blue' | 'gold' | 'red' | 'neutral'
type ButtonSize = 'sm' | 'md' | 'lg'

const FACE: Record<
  ButtonColor,
  { bg: string; bevel: string; bevelPressed: string; fg: string }
> = {
  green: {
    bg: 'var(--ore-green-face)',
    bevel: 'var(--bevel-green)',
    bevelPressed: 'var(--bevel-green-pressed)',
    fg: 'var(--on-green)',
  },
  blue: {
    bg: 'var(--ore-blue-face)',
    bevel: 'var(--bevel-blue)',
    bevelPressed: 'var(--bevel-neutral-pressed)',
    fg: 'var(--on-blue)',
  },
  gold: {
    bg: 'var(--ore-gold-face)',
    bevel: 'var(--bevel-gold)',
    bevelPressed: 'var(--bevel-neutral-pressed)',
    fg: 'var(--on-gold)',
  },
  red: {
    bg: 'var(--ore-red-face)',
    bevel: 'var(--bevel-red)',
    bevelPressed: 'var(--bevel-neutral-pressed)',
    fg: 'var(--on-red)',
  },
  neutral: {
    bg: 'var(--ore-surface-2)',
    bevel: 'var(--bevel-neutral)',
    bevelPressed: 'var(--bevel-neutral-pressed)',
    fg: 'var(--ore-text)',
  },
}

const SIZE: Record<
  ButtonSize,
  { padding: string; fontSize: number; drop: number }
> = {
  sm: { padding: '8px 14px', fontSize: 12, drop: 4 },
  md: { padding: '11px 20px', fontSize: 13, drop: 5 },
  lg: { padding: '15px 28px', fontSize: 15, drop: 5 },
}

interface ButtonProps {
  children?: ReactNode
  color?: ButtonColor
  size?: ButtonSize
  icon?: ReactNode
  iconRight?: ReactNode
  disabled?: boolean
  as?: ElementType
  href?: string
  onClick?: () => void
  title?: string
  style?: CSSProperties
}

export function Button({
  children,
  color = 'green',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  as,
  href,
  onClick,
  title,
  style = {},
}: ButtonProps) {
  const [pressed, setPressed] = useState(false)
  const [hover, setHover] = useState(false)
  const f = FACE[color]
  const s = SIZE[size]
  const Tag: ElementType = as ?? (href ? 'a' : 'button')

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: s.fontSize,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: s.padding,
    border: 'none',
    borderRadius: 'var(--radius-slot)',
    background: f.bg,
    color: f.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    boxShadow: pressed ? f.bevelPressed : f.bevel,
    transform: pressed ? `translateY(${s.drop - 1}px)` : 'translateY(0)',
    transition:
      'transform var(--dur-fast) var(--ease-press), box-shadow var(--dur-fast) var(--ease-press), filter var(--dur) var(--ease-out)',
    filter: disabled
      ? 'grayscale(0.7) brightness(0.6)'
      : hover
        ? 'brightness(1.08)'
        : 'none',
    opacity: disabled ? 0.7 : 1,
    textDecoration: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    ...style,
  }

  return (
    <Tag
      href={href}
      title={title}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setPressed(false)
      }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={base}
    >
      {icon}
      {children && <span>{children}</span>}
      {iconRight}
    </Tag>
  )
}
