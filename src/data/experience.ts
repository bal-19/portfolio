export interface JobCopy {
  year: string
  role: string
  org: string
  note: string
}

export interface JobCopyByLang {
  id: JobCopy
  en: JobCopy
}

export interface JobMeta {
  dot: 'green' | 'blue' | 'gold'
  content: JobCopyByLang
}

// Sample data — add, edit, or remove jobs directly here. Each entry carries
// its own `id`/`en` copy, so both languages stay together in one place.
export const experience: JobMeta[] = [
  {
    dot: 'gold',
    content: {
      id: {
        year: '2026 — Kini',
        role: 'Freelance Fullstack Developer',
        org: 'Self-employed',
        note: 'Membangun aplikasi web modern untuk berbagai klien menggunakan React, Express, PostgreSQL, Docker, dan teknologi AI. Berfokus pada arsitektur yang scalable, maintainable, serta pengalaman pengguna yang baik.',
      },
      en: {
        year: '2026 — Present',
        role: 'Freelance Fullstack Developer',
        org: 'Self-employed',
        note: 'Building modern web applications for clients using React, Express, PostgreSQL, Docker, and AI technologies. Focused on scalable architecture, maintainable code, and great user experiences.',
      },
    },
  },
  {
    dot: 'gold',
    content: {
      id: {
        year: '2025 — Kini',
        role: 'Fullstack Developer',
        org: 'CV Godzillab Indonesia',
        note: 'Mengembangkan modul autentikasi, dashboard admin, dan REST API menggunakan Laravel dan React. Berkolaborasi menggunakan Git/GitLab serta mengoptimalkan performa database untuk mempercepat waktu respons.',
      },
      en: {
        year: '2025 — Present',
        role: 'Fullstack Developer',
        org: 'CV Godzillab Indonesia',
        note: 'Developed authentication modules, admin dashboards, and REST APIs using Laravel and React. Collaborated with the team using Git/GitLab while optimizing database performance to improve response times.',
      },
    },
  },
  {
    dot: 'blue',
    content: {
      id: {
        year: '2023 — 2024',
        role: 'Data Crawler Intern',
        org: 'PT Indonesia Indicator',
        note: 'Mengembangkan sistem web scraping dan data crawling menggunakan Python. Berkontribusi dalam membangun scraper yang scalable untuk mengumpulkan dan memproses data dari berbagai sumber.',
      },
      en: {
        year: '2023 — 2024',
        role: 'Data Crawler Intern',
        org: 'PT Indonesia Indicator',
        note: 'Developed scalable web scraping and data crawling systems using Python. Contributed to building scraping pipelines for collecting and processing data from multiple sources.',
      },
    },
  },
]
