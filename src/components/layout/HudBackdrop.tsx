export function HudBackdrop() {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
          background:
            'radial-gradient(620px 420px at 12% 4%, rgba(117,183,93,0.10), transparent 62%), radial-gradient(620px 420px at 88% 2%, rgba(74,213,255,0.08), transparent 62%), var(--ore-bg)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 0.5,
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
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
            'radial-gradient(ellipse at 50% 30%, transparent 55%, rgba(0,0,0,0.35) 100%)',
        }}
      />
    </>
  )
}
