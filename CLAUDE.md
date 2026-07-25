# CLAUDE.md — Developer Portfolio (Vite + React)

Instruksi ini WAJIB diikuti di setiap sesi kerja pada project ini. Tujuan project: portfolio developer 1 halaman, bilingual (ID/EN), gaya bento grid + game-UI, dark theme.

Spesifikasi lengkap design system (warna, tipografi, bento grid, motion): @docs/design-system.md

## Tech Stack

- **Build tool:** Vite
- **Framework:** React 18 (function components + hooks only, no class components)
- **Bahasa:** TypeScript (`.tsx` / `.ts`) — hindari `any`, definisikan `interface`/`type` untuk semua props
- **Styling:** Tailwind CSS, dengan design token custom di `tailwind.config.ts` (warna, radius, spacing mengikuti `docs/design-system.md`) — jangan hardcode hex color langsung di komponen
- **Animasi:** Framer Motion untuk scroll-reveal & micro-interaction; Lenis untuk smooth scroll
- **Routing:** tidak perlu (single-page, scroll-based navigation via anchor link)
- **i18n:** context/provider custom ringan (`src/i18n/`) untuk toggle ID/EN — tidak perlu library berat seperti i18next kecuali project berkembang jadi multi-halaman
- **Linting/format:** ESLint + Prettier (jalankan sebelum commit)
- **Package manager:** npm

## Struktur Folder

```
project-root/
├── public/                     # aset statis (favicon, og-image) — tidak diproses bundler
├── src/
│   ├── assets/                 # gambar/ikon yang di-import ke komponen
│   ├── components/
│   │   ├── ui/                 # primitive reusable: Button, Badge, Panel, Card, Chip
│   │   └── layout/              # Header (lang toggle), Footer, SectionWrapper
│   ├── sections/                # satu file per section halaman:
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── hooks/                    # custom hooks: useScrollReveal, useLang, useInView
│   ├── i18n/
│   │   ├── LangContext.tsx
│   │   ├── id.ts                 # string konten Bahasa Indonesia
│   │   └── en.ts                 # string konten English
│   ├── data/                     # konten placeholder terpisah dari komponen
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── techStack.ts
│   ├── lib/                       # helper murni (formatDate, cn/classNames merge, dll)
│   ├── styles/
│   │   └── globals.css            # base Tailwind layer + CSS variable design token
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   └── design-system.md            # spesifikasi lengkap (di-import via @docs/design-system.md)
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
└── CLAUDE.md
```

**Prinsip folder:**

- Satu section halaman = satu file di `sections/`, jangan digabung jadi satu file besar `App.tsx`.
- Konten (teks/data) dipisah dari komponen (`data/`, `i18n/`) — komponen di `sections/` hanya menangani layout & animasi, bukan hardcode teks.
- `components/ui/` hanya untuk komponen generik yang dipakai berkali-kali (≥2 tempat). Kalau cuma dipakai sekali, biarkan inline di section-nya, jangan over-abstraksi.

## Konvensi Kode

- **Penamaan file:** `PascalCase.tsx` untuk komponen, `camelCase.ts` untuk hooks/utils/data
- **Export:** gunakan named export untuk semua komponen (`export function Hero()`), hindari default export supaya nama konsisten di seluruh project
- **Props:** definisikan `interface XProps` tepat di atas komponennya, jangan taruh di file terpisah kecuali dipakai lintas file
- **Path alias:** gunakan `@/` untuk import dari `src/` (setup di `vite.config.ts` + `tsconfig.json`), hindari `../../../` berlapis
- **Styling:** Tailwind utility class langsung di JSX; kalau kombinasi class kompleks dan berulang, extract ke `lib/cn.ts` helper — jangan bikin file CSS terpisah per komponen
- **Komentar:** hanya untuk logika yang tidak jelas dari nama fungsi/variabel; jangan komentari hal yang sudah jelas dari kode itu sendiri

## Do

- Ikuti bento grid & motion spec di `docs/design-system.md` secara ketat — variasikan ukuran cell antar section, jangan grid seragam
- Semua teks yang tampil ke user HARUS lewat `i18n/id.ts` / `i18n/en.ts`, jangan hardcode string di JSX
- Pastikan tiap section responsive (mobile-first: `sm:` `md:` `lg:` breakpoint Tailwind)
- Gunakan `motion.div` (Framer Motion) dengan `whileInView` untuk scroll-reveal, bukan animasi CSS manual yang sulit di-maintain
- Jalankan `npm run lint` sebelum menganggap task selesai

## Don't

- Jangan hardcode warna hex di komponen — selalu lewat token Tailwind/CSS variable
- Jangan install package tambahan tanpa alasan jelas (cek dulu apakah kebutuhan bisa diselesaikan dengan yang sudah ada)
- Jangan biarkan boilerplate default Vite (`App.css` counter demo, logo Vite/React) tertinggal di project
- Jangan gabungkan banyak section jadi satu file besar
- Jangan tambahkan test suite/CI kecuali diminta — project ini portfolio statis, prioritas ke kualitas visual & performa

## Commands

```bash
npm run dev       # jalankan dev server
npm run build     # build production
npm run preview   # preview hasil build
npm run lint       # cek lint sebelum commit
```

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
