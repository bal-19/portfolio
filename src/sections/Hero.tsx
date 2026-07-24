import { useEffect, useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { Panel } from '@/components/ui/Panel'
import { Button } from '@/components/ui/Button'
import { StatCell } from '@/components/ui/StatCell'
import { Reveal } from '@/components/ui/Reveal'
import { PixelMob } from '@/components/ui/PixelMob'
import { PixelSprite } from '@/components/ui/PixelSprite'
import { BLOCK, HEART } from '@/components/ui/mobs'

const STAT_META = [
  { tone: 'green', live: true },
  { tone: 'gold', live: false },
  { tone: 'blue', live: false },
] as const

function Hearts() {
  return (
    <div aria-hidden style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <PixelSprite key={i} grid={HEART.grid} palette={HEART.palette} unit={3} />
      ))}
    </div>
  )
}

export function Hero() {
  const { t } = useLang()
  const [splash, setSplash] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSplash((s) => s + 1), 4000)
    return () => clearInterval(id)
  }, [])

  const splashText = t.hero.splashes[splash % t.hero.splashes.length]

  return (
    <header className="mb-[72px] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <Reveal className="sm:col-span-2 lg:row-span-2" style={{ height: '100%' }}>
        <Panel
          style={{ height: '100%' }}
          bodyStyle={{
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 22,
          }}
        >
          <span
            className="font-mono text-[13px] font-bold uppercase text-green-bright"
            style={{ letterSpacing: '0.14em' }}
          >
            {t.hero.kicker}
          </span>
          <div className="relative self-start">
            <h1
              className="m-0 font-display font-bold text-ore-text-bright"
              style={{
                fontSize: 'clamp(40px,6vw,72px)',
                lineHeight: 0.98,
                letterSpacing: '-0.02em',
              }}
            >
              {t.hero.name1}
              <br />
              {t.hero.name2}
            </h1>
            <span
              aria-hidden
              className="anim-splash absolute hidden whitespace-nowrap font-mono text-[13px] font-bold lg:block"
              style={{
                left: '80%',
                top: -8,
                zIndex: 1,
                color: 'var(--ore-gold-bright)',
                textShadow: '2px 2px 0 rgba(0,0,0,0.65)',
              }}
            >
              {splashText}
            </span>
          </div>
          <p
            className="m-0 max-w-[470px] text-ore-text"
            style={{ fontSize: 18, lineHeight: 1.55, textWrap: 'pretty' }}
          >
            {t.hero.tagline}
          </p>
          <div className="mt-1 flex flex-wrap gap-3">
            <Button
              color="green"
              size="lg"
              href="#work"
              iconRight={<span>→</span>}
            >
              {t.hero.cta1}
            </Button>
            <Button color="neutral" size="lg" href="#contact">
              {t.hero.cta2}
            </Button>
          </div>

          <PixelMob
            variant="emerald"
            unit={7}
            className="absolute right-8 top-9 hidden md:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-7 right-9 hidden flex-col items-center md:flex"
          >
            <PixelMob variant="slime" unit={7} />
            <div className="flex" style={{ marginTop: -2 }}>
              <PixelSprite grid={BLOCK.grid} palette={BLOCK.palette} unit={5} />
              <PixelSprite grid={BLOCK.grid} palette={BLOCK.palette} unit={5} />
            </div>
          </div>
        </Panel>
      </Reveal>

      <Reveal
        delay={80}
        className="flex flex-col gap-3 sm:flex-row lg:col-start-3 lg:row-span-2 lg:flex-col"
      >
        {t.hero.stats.map((st, i) => (
          <StatCell
            key={st.label}
            value={st.value}
            label={st.label}
            tone={STAT_META[i].tone}
            live={STAT_META[i].live}
            footer={i === 0 ? <Hearts /> : undefined}
            style={{ flex: 1, minHeight: 96 }}
          />
        ))}
      </Reveal>
    </header>
  )
}
