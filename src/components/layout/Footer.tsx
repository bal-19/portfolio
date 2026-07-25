import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { Panel } from '@/components/ui/Panel'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { PixelMob } from '@/components/ui/PixelMob'

const ICON_BASE = '727a85'
const ICON_HOVER = '4ad5ff'

// CC-BY-4.0 attribution for the 3D backdrop. URLs come from the licence file
// shipped with the model (public/models/the-end/license.txt) — that is the
// authoritative source for crediting this particular asset.
const MODEL_TITLE = 'The End (Minecraft)'
const MODEL_URL =
  'https://sketchfab.com/3d-models/the-end-minecraft-aa5b1a31b0c34268ba987ac644376ecc'
const MODEL_AUTHOR = 'Timemade'
const MODEL_AUTHOR_URL = 'https://sketchfab.com/sheshhh'
const LICENSE_NAME = 'CC BY 4.0'
const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/'

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

          <PixelMob
            variant="spirit"
            unit={6}
            className="absolute left-9 top-8 hidden md:block"
          />
          <PixelMob
            variant="emerald"
            unit={6}
            className="absolute right-10 top-10 hidden md:block"
          />
          <PixelMob
            variant="slime"
            unit={6}
            withShadow
            className="absolute bottom-7 left-12 hidden lg:block"
          />
        </Panel>
      </Reveal>

      <div className="mt-8 border-t-2 border-ore-border pt-5 font-mono text-xs text-ore-text-muted">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-display text-base font-bold text-ore-text-bright">
            nama<span className="text-green-bright">.</span>dev
          </span>
          <span>{t.footer.note}</span>
        </div>

        <p className="m-0 mt-3 text-[11px] leading-relaxed">
          {t.footer.credit3d}:{' '}
          <a
            href={MODEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            “{MODEL_TITLE}”
          </a>{' '}
          {t.footer.creditBy}{' '}
          <a
            href={MODEL_AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {MODEL_AUTHOR}
          </a>
          {' — '}
          <a
            href={LICENSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {LICENSE_NAME}
          </a>
        </p>
      </div>
    </footer>
  )
}
