export type ProjectAccent = 'green' | 'blue' | 'gold'

export interface ProjectCopy {
  tag: string
  title: string
  desc: string
}

export interface ProjectCopyByLang {
  id: ProjectCopy
  en: ProjectCopy
}

export interface FeaturedMeta {
  accent: 'green'
  stack: string[]
  live?: string
  code?: string
  content: ProjectCopyByLang
}

export interface ProjectMeta {
  accent: ProjectAccent
  span?: string
  stack: string[]
  live?: string
  code?: string
  content: ProjectCopyByLang
}

// Sample data — add, edit, or remove projects directly here. Each entry
// carries its own `id`/`en` copy, so both languages stay together in one place.
export const featuredProject: FeaturedMeta = {
  accent: 'green',
  stack: ['Laravel', 'Postgres', 'Redis', 'Kafka'],
  live: '#',
  code: '#',
  content: {
    id: {
      tag: 'Proyek Unggulan',
      title: 'Proyek Utama',
      desc: 'Deskripsi proyek unggulanmu — masalah yang dipecahkan, skala yang ditangani, dan keputusan teknis penting di baliknya. Ganti teks ini sesuai proyek nyatamu.',
    },
    en: {
      tag: 'Featured Project',
      title: 'Flagship Project',
      desc: 'A description of your flagship project — the problem it solves, the scale it handles, and the key technical decisions behind it. Replace this with your real project.',
    },
  },
}

export const projects: ProjectMeta[] = [
  {
    accent: 'blue',
    stack: ['PHP', 'Redis', 'Vue'],
    live: '#',
    code: '#',
    content: {
      id: {
        tag: 'Kategori',
        title: 'Proyek Dua',
        desc: 'Ringkasan singkat proyek — apa fungsinya dan teknologi intinya.',
      },
      en: {
        tag: 'Category',
        title: 'Project Two',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
    },
  },
  {
    accent: 'gold',
    stack: ['Go', 'SQLite'],
    live: '#',
    code: '#',
    content: {
      id: {
        tag: 'Kategori',
        title: 'Proyek Tiga',
        desc: 'Ringkasan singkat proyek — apa fungsinya dan teknologi intinya.',
      },
      en: {
        tag: 'Category',
        title: 'Project Three',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
    },
  },
  {
    accent: 'blue',
    stack: ['Laravel', 'MySQL'],
    live: '#',
    code: '#',
    content: {
      id: {
        tag: 'Kategori',
        title: 'Proyek Empat',
        desc: 'Ringkasan singkat proyek — apa fungsinya dan teknologi intinya.',
      },
      en: {
        tag: 'Category',
        title: 'Project Four',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
    },
  },
  {
    accent: 'gold',
    stack: ['Prometheus', 'Grafana', 'Go'],
    live: '#',
    code: '#',
    content: {
      id: {
        tag: 'Kategori',
        title: 'Proyek Lima',
        desc: 'Ringkasan singkat proyek — apa fungsinya dan teknologi intinya.',
      },
      en: {
        tag: 'Category',
        title: 'Project Five',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
    },
  },
  {
    accent: 'blue',
    span: 'sm:col-span-2',
    stack: ['Laravel', 'Redis', 'JWT'],
    live: '#',
    code: '#',
    content: {
      id: {
        tag: 'Kategori',
        title: 'Proyek Enam',
        desc: 'Ringkasan singkat proyek — apa fungsinya dan teknologi intinya.',
      },
      en: {
        tag: 'Category',
        title: 'Project Six',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
    },
  },
  {
    accent: 'green',
    span: 'sm:col-span-2',
    stack: ['PHP', 'RabbitMQ'],
    live: '#',
    code: '#',
    content: {
      id: {
        tag: 'Kategori',
        title: 'Proyek Tujuh',
        desc: 'Ringkasan singkat proyek — apa fungsinya dan teknologi intinya.',
      },
      en: {
        tag: 'Category',
        title: 'Project Seven',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
    },
  },
]
