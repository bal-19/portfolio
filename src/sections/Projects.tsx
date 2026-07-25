import { useLang } from '@/hooks/useLang'
import { Panel } from '@/components/ui/Panel'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { featuredProject, projects } from '@/data/projects'

const arrowUp = <span>↗</span>

export function Projects() {
  const { t, lang } = useLang()
  const f = featuredProject.content[lang]

  return (
    <section id="work" className="mb-[72px]">
      <Reveal>
        <SectionHeader
          index="03"
          kicker={t.work.kicker}
          title={t.work.title}
          style={{ marginBottom: 24 }}
        />
      </Reveal>

      <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal
          className="sm:col-span-2 lg:row-span-2"
          style={{ height: '100%' }}
        >
          <Panel
            label={f.tag}
            accent="green"
            interactive
            style={{ height: '100%' }}
            bodyStyle={{
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Badge
              tone="gold"
              solid
              style={{ alignSelf: 'flex-start', marginBottom: 16 }}
            >
              {t.work.featuredBadge}
            </Badge>
            <h3
              className="m-0 font-display font-bold text-ore-text-bright"
              style={{
                fontSize: 34,
                letterSpacing: '-0.01em',
                marginBottom: 14,
              }}
            >
              {f.title}
            </h3>
            <p
              className="max-w-[520px] text-ore-text"
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                margin: '0 0 18px',
                textWrap: 'pretty',
              }}
            >
              {f.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.stack.map((tag) => (
                <Badge key={tag} tone="green">
                  {tag}
                </Badge>
              ))}
            </div>
            <div
              className="flex gap-[10px]"
              style={{ marginTop: 'auto', paddingTop: 18 }}
            >
              <Button
                color="neutral"
                size="sm"
                href={featuredProject.live}
                iconRight={arrowUp}
              >
                {t.work.linkLive}
              </Button>
              <Button color="neutral" size="sm" href={featuredProject.code}>
                {t.work.linkCode}
              </Button>
            </div>
          </Panel>
        </Reveal>

        {projects.map((p, i) => {
          const copy = p.content[lang]
          return (
            <Reveal
              key={copy.title}
              delay={i * 60}
              className={p.span}
              style={{ height: '100%' }}
            >
              <Panel
                label={copy.tag}
                accent={p.accent}
                interactive
                style={{ height: '100%' }}
                bodyStyle={{
                  padding: 22,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <h3
                  className="m-0 font-display font-bold text-ore-text-bright"
                  style={{ fontSize: 21, marginBottom: 8 }}
                >
                  {copy.title}
                </h3>
                <p
                  className="text-ore-text-muted"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    margin: '0 0 12px',
                    textWrap: 'pretty',
                  }}
                >
                  {copy.desc}
                </p>
                <div className="flex flex-wrap gap-[6px]">
                  {p.stack.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div
                  className="flex gap-[10px]"
                  style={{ marginTop: 'auto', paddingTop: 14 }}
                >
                  <Button
                    color="neutral"
                    size="sm"
                    href={p.live}
                    iconRight={arrowUp}
                  >
                    {t.work.linkLive}
                  </Button>
                  <Button color="neutral" size="sm" href={p.code}>
                    {t.work.linkCode}
                  </Button>
                </div>
              </Panel>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
