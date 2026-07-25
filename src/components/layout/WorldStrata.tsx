// Full-bleed "world bottom" strip closing the page: grass line, stone strata
// with glowing ore pixels (the Oreframe motif), then bedrock. Rendered as a
// repeating SVG pattern so all colors stay on CSS-variable tokens.

const CELL = 8
const COLS = 20 // pattern tile: 160px wide
const STONE_ROWS = 7
const TILE_W = COLS * CELL
const TILE_H = 80

const rand = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453
  return x - Math.floor(x)
}

const STONE_FILLS = [
  'var(--ore-surface-2)',
  'var(--ore-surface-3)',
  'var(--ore-bg-raised)',
  'var(--ore-border-dim)',
]
const ORE_FILLS = [
  'var(--end-magenta)',
  'var(--end-purpur)',
  'var(--ore-green-bright)',
]

interface Cell {
  x: number
  y: number
  fill: string
  ore?: boolean
}

const cells: Cell[] = []
for (let r = 0; r < STONE_ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const v = rand(r * COLS + c + 1)
    if (v > 0.965) {
      cells.push({
        x: c * CELL,
        y: 8 + r * CELL,
        fill: ORE_FILLS[Math.floor(rand(r + c * 7 + 3) * ORE_FILLS.length)],
        ore: true,
      })
    } else {
      cells.push({
        x: c * CELL,
        y: 8 + r * CELL,
        fill: STONE_FILLS[Math.floor(v * 2.9)],
      })
    }
  }
}

const grassNotches = Array.from({ length: COLS }, (_, c) => c).filter(
  (c) => rand(c + 51) < 0.3,
)
const bedrockJags = Array.from({ length: COLS }, (_, c) => c).filter(
  (c) => rand(c + 99) < 0.45,
)

export function WorldStrata() {
  return (
    <div aria-hidden style={{ lineHeight: 0 }}>
      <svg width="100%" height={TILE_H} role="presentation">
        <defs>
          <pattern
            id="ore-strata"
            width={TILE_W}
            height={TILE_H}
            patternUnits="userSpaceOnUse"
          >
            {/* end-stone crust */}
            <rect width={TILE_W} height={2} fill="var(--end-stone)" />
            <rect y={2} width={TILE_W} height={6} fill="var(--end-stone-dim)" />
            {grassNotches.map((c) => (
              <rect
                key={`g${c}`}
                x={c * CELL}
                y={5}
                width={CELL}
                height={3}
                fill="var(--end-purpur)"
              />
            ))}
            {/* stone + ore */}
            {cells.map((cel, i) => (
              <rect
                key={i}
                x={cel.x}
                y={cel.y}
                width={CELL}
                height={CELL}
                fill={cel.fill}
                opacity={cel.ore ? 0.85 : 1}
              />
            ))}
            {/* bedrock */}
            {bedrockJags.map((c) => (
              <rect
                key={`b${c}`}
                x={c * CELL}
                y={8 + STONE_ROWS * CELL - CELL}
                width={CELL}
                height={CELL}
                fill="var(--ore-black)"
              />
            ))}
            <rect
              y={8 + STONE_ROWS * CELL}
              width={TILE_W}
              height={TILE_H - (8 + STONE_ROWS * CELL)}
              fill="var(--ore-black)"
            />
          </pattern>
        </defs>
        <rect width="100%" height={TILE_H} fill="url(#ore-strata)" />
      </svg>
    </div>
  )
}
