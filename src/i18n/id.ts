import type { Dictionary } from './types'

export const id: Dictionary = {
  nav: {
    about: 'Tentang',
    stack: 'Teknologi',
    work: 'Proyek',
    path: 'Karier',
    contact: 'Kontak',
  },
  hero: {
    kicker: '▸ Peran Kamu',
    name1: 'Nama',
    name2: 'Kamu',
    tagline:
      'Deskripsi singkat tentang dirimu — apa yang kamu bangun, keahlian utamamu, dan nilai yang kamu bawa ke setiap proyek.',
    cta1: 'Lihat Proyek',
    cta2: 'Hubungi Saya',
    stats: [
      { value: 'Tersedia', label: 'Terbuka untuk kerja' },
      { value: '5+ thn', label: 'Pengalaman' },
      { value: 'Kotamu', label: 'Berbasis di · GMT+7' },
    ],
    splashes: [
      'Bisa bikin API juga!',
      '100% bebas bug*',
      'Sudah dark mode!',
      'Ditenagai kopi!',
      'Hobi Ctrl+S!',
      'Rilis hari Jumat!',
    ],
  },
  about: {
    kicker: 'Tentang',
    title: 'Sedikit cerita tentang saya',
    photoLabel: 'Operator',
    photoPlaceholder: 'Taruh foto di sini',
    p1: 'Tulis paragraf pembuka di sini — siapa kamu, apa fokusmu, dan pendekatan yang kamu pegang saat membangun sesuatu. Ganti teks placeholder ini lewat file i18n.',
    p2: 'Paragraf kedua untuk detail tambahan — minat di luar pekerjaan, hal yang sedang kamu pelajari, atau cara kamu berkolaborasi dalam tim.',
    focusLabel: 'Area Fokus',
    focus: [
      'Desain API',
      'Sistem Terdistribusi',
      'Basis Data',
      'Antrean & Worker',
      'Observability',
      'CI / CD',
    ],
  },
  stack: {
    kicker: 'Teknologi',
    title: 'Perkakas andalan',
    tiers: {
      legendary: '★ Legendaris',
      epic: '◆ Epik',
      rare: '● Langka',
      common: '○ Umum',
    },
  },
  work: {
    kicker: 'Proyek Pilihan',
    title: 'Yang sudah saya rilis',
    linkLive: 'Demo',
    linkCode: 'Kode',
    featuredBadge: '★ Unggulan',
  },
  path: {
    kicker: 'Pengalaman',
    title: 'Perjalanan sejauh ini',
  },
  contact: {
    kicker: '▸ Ayo bangun sesuatu',
    title: 'Punya proyek yang butuh tangan mantap?',
    p: 'Tulis ajakan singkat di sini. Aku terbuka untuk peluang dan kolaborasi — kirim pesan, dibalas secepatnya.',
    email: 'you@email.com',
  },
  footer: {
    note: '© 2026 · Dibuat dengan Oreframe design system',
  },
}
