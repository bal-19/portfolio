export type ProjectAccent = 'green' | 'blue' | 'gold'

export interface FeaturedMeta {
  accent: 'green'
  stack: string[]
  live?: string
  code?: string
}

export interface ProjectMeta {
  accent: ProjectAccent
  span?: string
  stack: string[]
  live?: string
  code?: string
}

// Structural config only — translatable title/tag/desc live in i18n `work`,
// zipped by index. Stack tags are brand names, so they stay here.
export const featuredProject: FeaturedMeta = {
  accent: 'green',
  stack: ['Laravel', 'Postgres', 'Redis', 'Kafka'],
  live: '#',
  code: '#',
}

export const projects: ProjectMeta[] = [
  { accent: 'blue', stack: ['PHP', 'Redis', 'Vue'], live: '#', code: '#' },
  { accent: 'gold', stack: ['Go', 'SQLite'], live: '#', code: '#' },
  { accent: 'blue', stack: ['Laravel', 'MySQL'], live: '#', code: '#' },
  { accent: 'gold', stack: ['Prometheus', 'Grafana', 'Go'], live: '#', code: '#' },
  { accent: 'blue', span: 'col-span-2', stack: ['Laravel', 'Redis', 'JWT'], live: '#', code: '#' },
  { accent: 'green', span: 'col-span-2', stack: ['PHP', 'RabbitMQ'], live: '#', code: '#' },
]
