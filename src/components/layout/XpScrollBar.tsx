import { useEffect, useState } from 'react'

// Bottom-fixed scroll progress styled like a game XP bar: segmented green fill
// with a soft glow, plus a small level counter (= scroll percentage).
export function XpScrollBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const level = Math.round(progress * 100)
  const maxed = level >= 100

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30"
    >
      {level > 0 && (
        <div
          className="mx-auto mb-1 w-fit font-mono text-xs font-bold"
          style={{
            color: maxed ? 'var(--ore-gold-bright)' : 'var(--ore-green-bright)',
            textShadow: '1px 1px 0 rgba(0,0,0,0.8)',
          }}
        >
          LV {level}
        </div>
      )}
      <div
        style={{
          height: 6,
          background: 'var(--ore-surface-3)',
          borderTop: '1px solid var(--ore-hairline)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            background:
              'repeating-linear-gradient(90deg, var(--ore-green-bright) 0 10px, var(--ore-green-face) 10px 12px)',
            boxShadow: '0 0 10px rgba(117,183,93,0.55)',
            transition: 'width 120ms linear',
          }}
        />
      </div>
    </div>
  )
}
