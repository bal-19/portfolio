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
    dot: 'green',
    content: {
      id: {
        year: '2023 — Kini',
        role: 'Peran Senior',
        org: 'Perusahaan A',
        note: 'Deskripsi singkat tanggung jawab dan pencapaian utamamu di peran ini.',
      },
      en: {
        year: '2023 — Now',
        role: 'Senior Role',
        org: 'Company A',
        note: 'A short description of your responsibilities and key achievements in this role.',
      },
    },
  },
  {
    dot: 'blue',
    content: {
      id: {
        year: '2020 — 2023',
        role: 'Peran Menengah',
        org: 'Perusahaan B',
        note: 'Deskripsi singkat tanggung jawab dan pencapaian utamamu di peran ini.',
      },
      en: {
        year: '2020 — 2023',
        role: 'Mid-level Role',
        org: 'Company B',
        note: 'A short description of your responsibilities and key achievements in this role.',
      },
    },
  },
  {
    dot: 'gold',
    content: {
      id: {
        year: '2018 — 2020',
        role: 'Peran Awal',
        org: 'Freelance',
        note: 'Deskripsi singkat tanggung jawab dan pencapaian utamamu di peran ini.',
      },
      en: {
        year: '2018 — 2020',
        role: 'Early Role',
        org: 'Freelance',
        note: 'A short description of your responsibilities and key achievements in this role.',
      },
    },
  },
]
