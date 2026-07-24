import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { Panel } from '@/components/ui/Panel'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

const ICON_BASE = '727a85'
const ICON_HOVER = '4ad5ff'

const socials = [
  { label: 'GitHub', slug: 'github', href: '#' },
  { label: 'LinkedIn', slug: 'linkedin', href: '#' },
  { label: 'X', slug: 'x', href: '#' },
]

function SocialLink({
  label,
  slug,
  href,
}: {
  label: string
  slug: string
  href: string
}) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex' }}
    >
      <img
        src={`https://cdn.simpleicons.org/${slug}/${hover ? ICON_HOVER : ICON_BASE}`}
        width={22}
        height={22}
        alt={label}
        style={{ display: 'block' }}
      />
    </a>
  )
}

export function Footer() {
  const { t } = useLang()

  return (
    <footer id="contact">
      <Reveal>
        <Panel
          accent="green"
          bodyStyle={{
            padding: 48,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <span
            className="font-mono text-[13px] font-bold uppercase text-green-bright"
            style={{ letterSpacing: '0.14em' }}
          >
            {t.contact.kicker}
          </span>
          <h2
            className="m-0 font-display font-bold text-ore-text-bright"
            style={{
              fontSize: 'clamp(32px,5vw,52px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textWrap: 'pretty',
            }}
          >
            {t.contact.title}
          </h2>
          <p
            className="m-0 max-w-[460px] text-ore-text"
            style={{ fontSize: 17, lineHeight: 1.6, textWrap: 'pretty' }}
          >
            {t.contact.p}
          </p>
          <Button
            color="green"
            size="lg"
            href={`mailto:${t.contact.email}`}
            iconRight={<span>→</span>}
          >
            {t.contact.email}
          </Button>
          <div className="mt-2 flex gap-[18px]">
            {socials.map((s) => (
              <SocialLink key={s.slug} {...s} />
            ))}
          </div>
        </Panel>
      </Reveal>

      <div
        className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t-2 border-ore-border pt-5 font-mono text-xs text-ore-text-muted"
      >
        <span className="font-display text-base font-bold text-ore-text-bright">
          nama<span className="text-green-bright">.</span>dev
        </span>
        <span>{t.footer.note}</span>
      </div>
    </footer>
  )
}
