import type { CSSProperties } from 'react'

interface PixelSpriteProps {
  grid: string[]
  palette: Record<string, string>
  unit?: number
  className?: string
  style?: CSSProperties
}

// Renders a pixel-art sprite from a string grid: each non-space char maps to a
// color in `palette` and becomes a 1x1 rect. `unit` is the on-screen px size.
export function PixelSprite({
  grid,
  palette,
  unit = 6,
  className,
  style,
}: PixelSpriteProps) {
  const rows = grid.length
  const cols = grid.reduce((max, row) => Math.max(max, row.length), 0)

  return (
    <svg
      className={className}
      style={style}
      width={cols * unit}
      height={rows * unit}
      viewBox={`0 0 ${cols} ${rows}`}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {grid.flatMap((row, y) =>
        row.split('').map((ch, x) => {
          const fill = palette[ch]
          return fill ? (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} />
          ) : null
        }),
      )}
    </svg>
  )
}
