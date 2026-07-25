// Deterministic void star field — The End's sky is a starless black in-game,
// but a sparse twinkle keeps a full-page dark backdrop from reading as flat.
const STARS = Array.from({ length: 54 }, (_, i) => ({
  left: (i * 37 + (i % 5) * 11) % 100,
  top: (i * 61 + (i % 7) * 9) % 100,
  size: i % 9 === 0 ? 3 : 2,
  delay: -((i * 0.73) % 4.5),
  opacity: 0.25 + (i % 4) * 0.12,
}))

export function HudBackdrop() {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -3,
          background: [
            'radial-gradient(900px 620px at 18% -6%, var(--end-haze), transparent 60%)',
            'radial-gradient(760px 540px at 84% 4%, var(--end-haze-2), transparent 62%)',
            'radial-gradient(1200px 760px at 50% 106%, var(--end-haze-3), transparent 62%)',
            'var(--end-void)',
          ].join(', '),
        }}
      />

      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {STARS.map((star, i) => (
          <span
            key={i}
            className="anim-void-star"
            style={{
              position: 'absolute',
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              background: 'var(--end-star)',
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 0.4,
          backgroundImage:
            'radial-gradient(rgba(199,163,232,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at 50% 34%, transparent 48%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </>
  )
}
