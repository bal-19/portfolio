const lineStyle = {
  flex: 1,
  height: 2,
  backgroundImage:
    'repeating-linear-gradient(90deg, var(--ore-border-dim) 0 8px, transparent 8px 16px)',
} as const

const ORE_PIXELS = [
  { x: 0, y: 4, fill: 'var(--ore-border)', opacity: 1 },
  { x: 7, y: 1, fill: 'var(--ore-green-bright)', opacity: 0.5 },
  { x: 14, y: 5, fill: 'var(--ore-border-strong)', opacity: 1 },
  { x: 21, y: 0, fill: 'var(--ore-gold-bright)', opacity: 0.45 },
  { x: 28, y: 4, fill: 'var(--ore-border)', opacity: 1 },
]

// Subtle "ore vein" divider centered in the gap between page sections.
// Net-zero vertical space: it pulls itself up into the section margin.
export function PixelDivider() {
  return (
    <div
      aria-hidden
      className="flex items-center"
      style={{ gap: 14, margin: '-40px 0 28px' }}
    >
      <span style={lineStyle} />
      <svg width={34} height={12} shapeRendering="crispEdges">
        {ORE_PIXELS.map((p, i) => (
          <rect
            key={i}
            x={p.x}
            y={p.y}
            width={6}
            height={6}
            fill={p.fill}
            opacity={p.opacity}
          />
        ))}
      </svg>
      <span style={lineStyle} />
    </div>
  )
}
