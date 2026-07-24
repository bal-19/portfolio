import { useLang } from '@/hooks/useLang'
import { Panel } from '@/components/ui/Panel'
import { Button } from '@/components/ui/Button'
import { StatCell } from '@/components/ui/StatCell'
import { Reveal } from '@/components/ui/Reveal'

const STAT_META = [
  { tone: 'green', live: true },
  { tone: 'gold', live: false },
  { tone: 'blue', live: false },
] as const

export function Hero() {
  const { t } = useLang()

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
            style={{ flex: 1, minHeight: 96 }}
          />
        ))}
      </Reveal>
    </header>
  )
}
