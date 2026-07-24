export interface JobMeta {
  dot: 'green' | 'blue' | 'gold'
}

// Timeline dot color per job; translatable year/role/org/note live in i18n
// `path.jobs`, zipped by index.
export const experience: JobMeta[] = [
  { dot: 'green' },
  { dot: 'blue' },
  { dot: 'gold' },
]
