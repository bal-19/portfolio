import { useLang } from '@/hooks/useLang'
import { Panel } from '@/components/ui/Panel'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { ContributionGraph } from '@/components/ui/ContributionGraph'
import { normalizeDays, totalCount } from '@/lib/contributions'
import statsData from '@/data/stats.json'

// Written by the CI build script from the GitHub GraphQL API. Normalized once
// at module scope since the JSON is static.
const days = normalizeDays(statsData)
const total = totalCount(days)

export function GithubActivity() {
  const { t } = useLang()

  return (
    <section id="github" className="mb-[72px]">
      <Reveal>
        <SectionHeader
          index="05"
          kicker={t.github.kicker}
          title={t.github.title}
          style={{ marginBottom: 24 }}
        />
      </Reveal>

      <Reveal delay={60}>
        <Panel
          label={t.github.panelLabel}
          accent="green"
          bodyStyle={{ padding: 24 }}
        >
          <ContributionGraph days={days} total={total} />
        </Panel>
      </Reveal>
    </section>
  )
}
