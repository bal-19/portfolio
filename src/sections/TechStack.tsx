import { useLang } from '@/hooks/useLang'
import { InventorySlot } from '@/components/ui/InventorySlot'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { techStack, type TechTier } from '@/data/techStack'

const TIER_TONE: Record<TechTier, 'gold' | 'blue' | 'green' | 'muted'> = {
    legendary: 'gold',
    epic: 'blue',
    rare: 'green',
    common: 'muted',
}

export function TechStack() {
    const { t } = useLang()

    return (
        <section id="stack" className="mb-[72px]">
            <Reveal>
                <SectionHeader
                    index="02"
                    kicker={t.stack.kicker}
                    title={t.stack.title}
                    style={{ marginBottom: 24 }}
                />
            </Reveal>

            <div className="grid auto-rows-[118px] grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
                {techStack.map((s, i) => (
                    <Reveal
                        key={s.slug}
                        delay={i * 45}
                        className={s.span}
                        style={{ height: '100%' }}
                    >
                        <InventorySlot
                            accent={s.accent}
                            featured={s.featured}
                            label={s.label}
                            tooltip={s.label}
                            tooltipSub={t.stack.tiers[s.tier]}
                            tooltipTone={TIER_TONE[s.tier]}
                            style={{ height: '100%' }}
                            icon={
                                <img
                                    src={`https://cdn.simpleicons.org/${s.slug}`}
                                    width={s.featured ? 40 : 34}
                                    height={s.featured ? 40 : 34}
                                    alt=""
                                    style={{ display: 'block', pointerEvents: 'none' }}
                                />
                            }
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
