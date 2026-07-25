import type { CSSProperties } from 'react'

// Ender-portal motes drifting through the void.
const COLORS = [
  'var(--end-magenta)',
  'var(--end-purpur)',
  'var(--end-star)',
  'var(--ore-green-bright)',
]

// Deterministic ambient "pixel dust" drifting up behind the content. Sits in the
// fixed backdrop (behind panels), so it only shows through the page's gaps.
const PARTICLES = Array.from({ length: 20 }, (_, i) => {
  const dur = 16 + (i % 6) * 3
  return {
    left: (i * 53) % 100,
    bottom: (i * 37) % 55,
    size: 3 + (i % 3) * 2,
    dur,
    delay: -((i * 2.3) % dur),
    color: COLORS[i % COLORS.length],
    op: 0.1 + (i % 4) * 0.05,
  }
})

export function AmbientParticles() {
  return (
    <div
      aria-hidden
      className="anim-particles-layer"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="anim-particle"
          style={
            {
              position: 'absolute',
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              '--p-op': p.op,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
