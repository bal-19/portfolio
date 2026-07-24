export type TechTier = 'legendary' | 'epic' | 'rare' | 'common'

export interface TechItem {
  slug: string
  label: string
  accent: 'green' | 'blue'
  tier: TechTier
  span?: string
  featured?: boolean
}

// Icons render from Simple Icons CDN (cdn.simpleicons.org/<slug>).
// `span` uses Tailwind grid classes; the first item is the featured 2x2 slot.
// `tier` feeds the game-style hover tooltip (labels live in i18n stack.tiers).
export const techStack: TechItem[] = [
  { slug: 'laravel', label: 'Laravel', accent: 'green', tier: 'legendary', featured: true, span: 'col-span-2 row-span-2' },
  { slug: 'php', label: 'PHP', accent: 'blue', tier: 'epic' },
  { slug: 'mysql', label: 'MySQL', accent: 'blue', tier: 'rare' },
  { slug: 'redis', label: 'Redis', accent: 'green', tier: 'rare' },
  { slug: 'postgresql', label: 'Postgres', accent: 'blue', tier: 'epic' },
  { slug: 'docker', label: 'Docker', accent: 'blue', tier: 'rare' },
  { slug: 'javascript', label: 'JavaScript', accent: 'green', tier: 'common' },
  { slug: 'vuedotjs', label: 'Vue', accent: 'green', tier: 'rare' },
  { slug: 'git', label: 'Git', accent: 'blue', tier: 'common' },
  { slug: 'nginx', label: 'Nginx', accent: 'green', tier: 'rare', span: 'sm:col-span-2' },
  { slug: 'linux', label: 'Linux', accent: 'blue', tier: 'epic', span: 'sm:col-span-2' },
  { slug: 'githubactions', label: 'CI/CD', accent: 'green', tier: 'rare', span: 'sm:col-span-2' },
]
