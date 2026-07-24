import type { CSSProperties } from 'react'

const PATHS = {
  'chevron-down': 'M4 7l6 6 6-6',
  'chevron-up': 'M4 13l6-6 6 6',
  'chevron-left': 'M13 4l-6 6 6 6',
  'chevron-right': 'M7 4l6 6-6 6',
  'arrow-right': 'M3 10h13M11 5l5 5-5 5',
  'arrow-down': 'M10 3v13M5 11l5 5 5-5',
  check: 'M4 10l4 4 8-9',
  close: 'M5 5l10 10M15 5L5 15',
  plus: 'M10 4v12M4 10h12',
  external: 'M8 5H5v10h10v-3M12 4h4v4M16 4l-7 7',
  brackets: 'M7 4H4v12h3M13 4h3v12h-3',
  play: 'M6 4l10 6-10 6z',
} as const

export type IconName = keyof typeof PATHS

interface IconProps {
  name?: IconName
  size?: number
  color?: string
  strokeWidth?: number
  style?: CSSProperties
}

export function Icon({
  name = 'chevron-right',
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style,
}: IconProps) {
  const d = PATHS[name] ?? PATHS['chevron-right']
  const filled = name === 'play'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0, ...style }}
    >
      <path
        d={d}
        stroke={filled ? 'none' : color}
        fill={filled ? color : 'none'}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
