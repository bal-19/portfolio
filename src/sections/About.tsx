import { useLang } from '@/hooks/useLang'
import { Panel } from '@/components/ui/Panel'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

// Dummy profile photo (placeholder) — swap for your own portrait.
const PORTRAIT_SRC = 'https://randomuser.me/api/portraits/men/32.jpg'

export function About() {
  const { t } = useLang()

  return (
    <section id="about" className="mb-[72px]">
      <Reveal>
        <SectionHeader
          index="01"
          kicker={t.about.kicker}
          title={t.about.title}
          style={{ marginBottom: 24 }}
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[0.9fr_1.4fr] lg:grid-cols-[0.82fr_1.35fr_1fr]">
        <Reveal delay={40} style={{ height: '100%' }}>
          <Panel
            label={t.about.photoLabel}
            accent="green"
            style={{ height: '100%' }}
            bodyStyle={{ padding: 10, display: 'flex' }}
          >
            <div
              className="relative w-full overflow-hidden rounded-slot"
              style={{ minHeight: 260, height: '100%', boxShadow: 'var(--inset-well)' }}
            >
              <img
                src={PORTRAIT_SRC}
                alt={t.about.photoPlaceholder}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={90} style={{ height: '100%' }}>
          <Panel style={{ height: '100%' }} bodyStyle={{ padding: 28 }}>
            <p
              className="text-ore-text"
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                margin: '0 0 16px',
                textWrap: 'pretty',
              }}
            >
              {t.about.p1}
            </p>
            <p
              className="m-0 text-ore-text-muted"
              style={{ fontSize: 15, lineHeight: 1.7, textWrap: 'pretty' }}
            >
              {t.about.p2}
            </p>
          </Panel>
        </Reveal>

        <Reveal
          delay={140}
          className="md:col-span-2 lg:col-span-1"
          style={{ height: '100%' }}
        >
          <Panel
            label={t.about.focusLabel}
            accent="blue"
            style={{ height: '100%' }}
            bodyStyle={{
              padding: 20,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              alignContent: 'flex-start',
            }}
          >
            {t.about.focus.map((f) => (
              <Badge key={f} tone="blue">
                {f}
              </Badge>
            ))}
          </Panel>
        </Reveal>
      </div>
    </section>
  )
}
