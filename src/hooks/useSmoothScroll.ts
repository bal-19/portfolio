import { useEffect } from 'react'
import Lenis from 'lenis'
import { scrollProgress } from '@/lib/scrollProgress'

const NAV_OFFSET = -80

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis()
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // Publish progress for the 3D backdrop. This is the project's only Lenis
    // instance — the scene reads from it rather than starting a second one.
    const onScroll = () => {
      const p = lenis.progress
      scrollProgress.current = Number.isFinite(p)
        ? Math.min(Math.max(p, 0), 1)
        : 0
    }
    lenis.on('scroll', onScroll)

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      )
      const href = anchor?.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: NAV_OFFSET })
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      scrollProgress.current = 0
    }
  }, [])
}
