import type { CSSProperties } from 'react'
import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/i18n/LangContext'
import { Button } from '@/components/ui/Button'

const WORDMARK = 'nama'

const toggleBase: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.08em',
  padding: '6px 13px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 160ms, color 160ms',
}

export function Header() {
  const { lang, setLang, t } = useLang()

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.stack, href: '#stack' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.path, href: '#path' },
  ]

  const toggleStyle = (target: Lang): CSSProperties => ({
    ...toggleBase,
    background: lang === target ? 'var(--ore-green-face)' : 'transparent',
    color: lang === target ? 'var(--on-green)' : 'var(--ore-text-muted)',
  })

  return (
    <nav
      className="sticky top-0 z-20 border-b-2 border-ore-border"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'linear-gradient(var(--ore-bg), rgba(17,17,17,0.55))',
      }}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <span
          className="font-display text-lg font-bold tracking-tight text-ore-text-bright"
          style={{ letterSpacing: '-0.01em' }}
        >
          {WORDMARK}
          <span className="text-green-bright">.</span>dev
        </span>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-5 md:flex">
            {links.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs font-semibold uppercase text-ore-text-muted"
                style={{ letterSpacing: '0.08em' }}
              >
                {n.label}
              </a>
            ))}
          </div>

          <div
            className="inline-flex overflow-hidden rounded-slot border-2 border-ore-border"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang('id')}
              aria-pressed={lang === 'id'}
              style={toggleStyle('id')}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              style={toggleStyle('en')}
            >
              EN
            </button>
          </div>

          <Button color="green" size="sm" href="#contact">
            {t.nav.contact}
          </Button>
        </div>
      </div>
    </nav>
  )
}
