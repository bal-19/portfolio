# Design System — Developer Portfolio

Placeholder spec. Perluas file ini sesuai kebutuhan; token di bawah adalah baseline yang dipakai `tailwind.config.ts`.

## Prinsip

- Dark theme sebagai base, bento grid sebagai layout utama, aksen gaya game-UI (glow, border tegas, sudut tajam/rounded konsisten).
- Variasikan ukuran cell bento antar section — jangan grid seragam 1x1 semua.

## Warna

| Token | Hex | Pemakaian |
| --- | --- | --- |
| `background` | `#0A0E14` | base halaman |
| `surface` | `#12161F` | permukaan card/bento cell |
| `surface-hover` | `#181D29` | hover state card |
| `border` | `#232A38` | border card, divider |
| `text-primary` | `#E6E9EF` | teks utama |
| `text-secondary` | `#8B93A7` | teks sekunder/caption |
| `accent-green` | `#3DDC97` | status sukses, tech stack aktif |
| `accent-blue` | `#4FA3FF` | link, highlight interaktif |
| `accent-gold` | `#F5C451` | sorotan/achievement |
| `accent-red` | `#FF5C5C` | warning/error state |

## Tipografi

- Font: sans-serif (mis. Inter/Sora) untuk body, monospace untuk label kode/teknis.
- Skala: `text-sm` (caption) → `text-base` (body) → `text-2xl`/`text-4xl` (heading section) → `text-6xl` (hero).

## Bento Grid

- Grid dasar 12 kolom (`grid-cols-12`) di desktop, `grid-cols-1`/`grid-cols-4` di mobile/tablet.
- Cell bervariasi: 1x1, 2x1, 1x2, 2x2 — jangan seragam per section.
- Radius: `rounded-2xl` untuk cell besar, `rounded-xl` untuk cell kecil.
- Gap konsisten: `gap-4` (mobile) / `gap-6` (desktop).

## Motion

- Scroll-reveal via `whileInView` (Framer Motion): fade + translateY(16px), duration ~0.5s, easing `easeOut`.
- Micro-interaction hover: scale 1.02–1.03, transition 0.2s.
- Smooth scroll global via Lenis.
