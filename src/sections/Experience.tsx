import { useLang } from '@/hooks/useLang'
import { Panel } from '@/components/ui/Panel'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { experience } from '@/data/experience'

const DOT: Record<'green' | 'blue' | 'gold', string> = {
  green: 'var(--ore-green-bright)',
  blue: 'var(--ore-blue-bright)',
  gold: 'var(--ore-gold-bright)',
}

export function Experience() {
  const { t } = useLang()

  return (
    <section id="path" className="mb-[72px]">
      <Reveal>
        <SectionHeader
          index="04"
          kicker={t.path.kicker}
          title={t.path.title}
          style={{ marginBottom: 24 }}
        />
      </Reveal>

      <div className="grid gap-3">
        {experience.map((meta, i) => {
          const job = t.path.jobs[i]
          const dot = DOT[meta.dot]
          return (
            <Reveal key={job.role} delay={i * 70}>
              <Panel bodyStyle={{ padding: 0 }}>
                <div className="grid grid-cols-1 items-stretch sm:grid-cols-[180px_1fr]">
                  <div
                    className="flex items-center gap-[10px] border-b-2 border-ore-border font-mono text-ore-text-muted sm:border-b-0 sm:border-r-2"
                    style={{
                      padding: '20px 22px',
                      background: 'var(--ore-surface-3)',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        background: dot,
                        boxShadow: `0 0 8px ${dot}`,
                      }}
                    />
                    {job.year}
                  </div>
                  <div style={{ padding: '18px 24px' }}>
                    <div className="flex flex-wrap items-baseline gap-[10px]">
                      <span className="font-display text-xl font-bold text-ore-text-bright">
                        {job.role}
                      </span>
                      <span
                        className="font-mono text-[13px]"
                        style={{ color: dot }}
                      >
                        @ {job.org}
                      </span>
                    </div>
                    <p
                      className="text-ore-text-muted"
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.55,
                        margin: '6px 0 0',
                        textWrap: 'pretty',
                      }}
                    >
                      {job.note}
                    </p>
                  </div>
                </div>
              </Panel>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
