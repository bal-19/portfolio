export interface TechItem {
  slug: string
  label: string
  accent: 'green' | 'blue'
  span?: string
  featured?: boolean
}

// Icons render from Simple Icons CDN (cdn.simpleicons.org/<slug>).
// `span` uses Tailwind grid classes; the first item is the featured 2x2 slot.
export const techStack: TechItem[] = [
  { slug: 'laravel', label: 'Laravel', accent: 'green', featured: true, span: 'col-span-2 row-span-2' },
  { slug: 'php', label: 'PHP', accent: 'blue' },
  { slug: 'mysql', label: 'MySQL', accent: 'blue' },
  { slug: 'redis', label: 'Redis', accent: 'green' },
  { slug: 'postgresql', label: 'Postgres', accent: 'blue' },
  { slug: 'docker', label: 'Docker', accent: 'blue' },
  { slug: 'javascript', label: 'JavaScript', accent: 'green' },
  { slug: 'vuedotjs', label: 'Vue', accent: 'green' },
  { slug: 'git', label: 'Git', accent: 'blue' },
  { slug: 'nginx', label: 'Nginx', accent: 'green', span: 'col-span-2' },
  { slug: 'linux', label: 'Linux', accent: 'blue', span: 'col-span-2' },
  { slug: 'githubactions', label: 'CI/CD', accent: 'green', span: 'col-span-2' },
]
