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
  accent: 'gold'
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
  accent: 'gold',
  stack: ['Vite', 'Express', 'Postgre', 'Gemini', 'Baileys'],
  live: '#',
  code: 'https://github.com/bal-19/whatsapp-crazy-bot',
  content: {
    id: {
      tag: 'Proyek Unggulan',
      title: 'Whatsapp AI Bot',
      desc: 'WhatsApp AI Bot adalah platform otomasi WhatsApp berbasis AI yang mengintegrasikan Google Gemini, dashboard admin realtime, dan penyimpanan data di Supabase dalam arsitektur monorepo. Sistem ini mendukung percakapan kontekstual, analisis serta generasi gambar dan dokumen, sekaligus menyediakan monitoring, konfigurasi, dan manajemen bot melalui antarmuka web. Dibangun menggunakan Node.js, React, TypeScript, dan Socket.IO untuk menghadirkan performa yang cepat, scalable, dan mudah dikembangkan.',
    },
    en: {
      tag: 'Featured Project',
      title: 'Whatsapp AI Bot',
      desc: 'WhatsApp AI Bot is an AI-powered WhatsApp automation platform that integrates Google Gemini, a real-time admin dashboard, and Supabase within a monorepo architecture. It supports contextual conversations, image and document generation, while providing comprehensive bot monitoring, configuration, and management through a web interface. Built with Node.js, React, TypeScript, and Socket.IO, it delivers a fast, scalable, and maintainable developer experience.',
    },
  },
}

export const projects: ProjectMeta[] = [
  {
    accent: 'green',
    stack: ['Laravel', 'MySQL', 'Midtrans'],
    live: '#',
    code: 'https://github.com/bal-19/hadi-net',
    content: {
      id: {
        tag: 'Tugas Sekolah',
        title: 'Online Wifi Installation Orders',
        desc: 'Aplikasi web untuk pemesanan pemasangan WiFi secara online dengan dashboard admin dan integrasi pembayaran Midtrans. Dibangun menggunakan Laravel dan Tailwind CSS untuk mempermudah pengelolaan pelanggan serta pesanan.',
      },
      en: {
        tag: 'School Work',
        title: 'Online Wifi Installation Orders',
        desc: 'A web application for online WiFi installation orders with an admin dashboard and Midtrans payment integration. Built with Laravel and Tailwind CSS to simplify customer and order management.',
      },
    },
  },
  {
    accent: 'gold',
    stack: ['Vite', 'React', 'Tailwind'],
    live: '#',
    code: '#',
    content: {
      id: {
        tag: 'Freelance',
        title: 'Website Portfolio Percetakan Hasanuddin',
        desc: 'Landing page modern untuk Percetakan Hasanuddin, percetakan premium di Batu sejak 1985, yang menampilkan layanan, portofolio, dan informasi perusahaan dengan animasi interaktif. Dibangun menggunakan React 19, Vite, dan Tailwind CSS dengan fokus pada performa, pengalaman pengguna, dan kemudahan pengelolaan konten.',
      },
      en: {
        tag: 'Freelance',
        title: 'Website Portfolio Percetakan Hasanuddin',
        desc: 'A modern marketing landing page for Percetakan Hasanuddin, showcasing its services, portfolio, and company profile with interactive animations. Built with React 19, Vite, and Tailwind CSS, focusing on performance, user experience, and maintainable content management.',
      },
    },
  },
]
