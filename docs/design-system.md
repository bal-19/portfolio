# Design System — "Oreframe" Developer Portfolio

Sistem desain **game-UI / HUD** (terinspirasi Ore UI Kit / gaya UI game Minecraft) untuk portfolio developer satu halaman: dark theme, bento grid, motion scroll-reveal. Diadaptasi dari Claude Design project "Portfolio developer bilingual".

Motif intinya: **bevel** — permukaan terangkat (button, chip) punya highlight tepi-atas inset + drop bevel warna keras (tanpa blur) yang "kolaps" saat ditekan; sumur cekung (interior panel, slot inventory) membalikkannya dengan inner shadow gelap.

Sumber token asli: `tokens/{colors,typography,spacing,effects}.css`. Di project ini semua nilai hex tinggal di `src/styles/globals.css` (`:root`), lalu dipetakan ke Tailwind lewat `var(--…)` di `tailwind.config.ts` — **jangan hardcode hex di komponen**.

## Warna

Base near-black, 4 aksen masing-masing punya tugas. Setiap aksen punya varian `bright` (glow/edge), `face` (isian button), `shadow` (drop bevel).

| Token CSS | Hex | Tailwind | Pemakaian |
| --- | --- | --- | --- |
| `--ore-black` | `#0d0d0e` | `ore-black` | void terdalam, teks di atas badge solid |
| `--ore-bg` | `#111111` | `ore-bg` | background halaman |
| `--ore-surface` | `#23232a` | `ore-surface` | face panel / card |
| `--ore-surface-2` | `#2b2c32` | `ore-surface-2` | face slot inventory, button neutral |
| `--ore-surface-3` | `#1e1e1f` | `ore-surface-3` | sumur pressed/inset, header bar panel |
| `--ore-border` | `#3f3f3f` | `ore-border` | border 2px panel/card, divider |
| `--ore-border-strong` | `#48484a` | `ore-border-strong` | border badge neutral |
| `--ore-text` | `#d0d1d4` | `ore-text` | body/label utama |
| `--ore-text-bright` | `#fbfbfd` | `ore-text-bright` | heading, emphasis tinggi |
| `--ore-text-muted` | `#727a85` | `ore-text-muted` | sekunder/caption, kicker |
| `--ore-green-*` | `#3e7e2b` / bright `#75b75d` / face `#52a535` / shadow `#2a5d1b` | `green(-bright/-face/-shadow)` | **aksi utama / "go"** |
| `--ore-blue-*` | `#2375b3` / bright `#4ad5ff` / face `#2f8fd6` / shadow `#0f6ac1` | `blue(-…)` | **info / link / hover** |
| `--ore-gold-*` | `#da8c1a` / bright `#ffa41f` / face `#d5901e` / shadow `#a5680f` | `gold(-…)` | **highlight / badge featured** |
| `--ore-red-*` | `#b13c33` / bright `#d55e5e` / face `#c02d2d` / shadow `#8a2422` | `red(-…)` | **danger / tag langka** (hemat) |

On-accent foreground: `--on-green #eafce3`, `--on-blue #eaf6ff`, `--on-gold #1b1204`, `--on-red #fdeaea`. Link: `--link` = blue-bright, hover → blue.

## Tipografi

Font asli Minecraft (pixel) **disubstitusi** dengan webfont readable (via Google Fonts CDN):

- **Display / heading / wordmark:** Space Grotesk (`--font-display`, `font-display`) — tebal, tracking rapat (−0.02em → −0.005em).
- **Body / UI label:** Manrope (`--font-body`, `font-body`) — line-height 1.55–1.7.
- **Mono / tag / HUD label:** JetBrains Mono (`--font-mono`, `font-mono`) — UPPERCASE, tracking lebar 0.06–0.14em.

Skala display chunky: display 72px (lh .98), h1 48px, **h2 32px** (`--fs-h2`, lh 1.08, ls −0.01em, dipakai SectionHeader), h3 22px. Body: lg 18 / body 16 / sm 14 / xs 12. Casing: heading sentence case; kicker/tag/section number UPPERCASE mono.

## Spacing, radius, bento grid

- Base **8px grid** (`--sp-*`). Variasi bento ada di **span cell**, bukan gap. Gap 8–12px, container max **1360px** (`max-w-container`, token `--container-max`).
- Radius kecil & tajam: `--radius-sm` 4px, `--radius-slot` 6px (slot/button/tag), `--radius-lg` 12px (panel).
- **Variasikan ukuran cell antar section** — jangan grid seragam:
  - Hero `grid-cols-3`: name Panel `col-span-2 row-span-2` + kolom 3 StatCell.
  - About `[0.82fr 1.35fr 1fr]`: foto · bio · focus.
  - Stack `grid-cols-6` `auto-rows-[118px]`: slot pertama `col-span-2 row-span-2` (featured), tiga slot terakhir `col-span-2`.
  - Work `grid-cols-4`: featured `col-span-2 row-span-2` + 6 project (dua `col-span-2`).
  - Path: satu kolom, tiap job panel `[180px 1fr]` (tahun | detail).
- Breakpoint mobile-first Tailwind: base 1 kolom → `sm:` 2 → `lg:` full; nav links `hidden md:flex`.

## Efek (bevel / shadow / glow)

Semua di `tokens/effects` → `globals.css`, dipetakan ke Tailwind `boxShadow`:

- **Raised face:** `--bevel-{neutral,green,blue,gold,red}` (`shadow-bevel-*`) = inset highlight atas + drop bevel warna keras. Versi `-pressed` mengecilkan drop jadi ~1px.
- **Inset well:** `--inset-well` (interior panel recessed), `--inset-slot` (slot inventory).
- **Elevasi panel:** `--shadow-panel` (ambient + hard bottom `0 2px 0`), `--shadow-float` (hover angkat).
- **Glow hover:** `--glow-green`, `--glow-blue` (`shadow-glow-*`) = ring aksen + blur glow, dipakai InventorySlot saat hover.

## Komponen (`src/components/ui/`)

| Komponen | Props kunci | Perilaku |
| --- | --- | --- |
| `Button` | `color` green/blue/gold/red/neutral · `size` sm/md/lg · `icon`/`iconRight` · `href`/`as` · `disabled` | mono uppercase; hover `brightness(1.08)`; press `translateY` turun + bevel kolaps |
| `Badge` | `tone` neutral/green/blue/gold/red · `solid` | chip mono ber-border 1px, bg tint aksen; `solid` = isian penuh |
| `Panel` | `label` · `accent` none/green/blue/gold/red · `interactive` · `inset` · `bodyStyle` | slab border 2px; opsi header bar HUD + edge stripe 3px; `interactive` → angkat −3px + border aksen saat hover |
| `StatCell` | `value` · `label` · `tone` · `live` | cell fakta HUD; `live` = titik aksen berdenyut (`orePulse`) |
| `InventorySlot` | `icon` · `label` · `accent` green/blue · `featured` | slot persegi cekung; hover `scale(1.03)` + ring glow aksen |
| `SectionHeader` | `index` "01" · `kicker` · `title` | chip index bernomor + kicker mono + judul display + garis rule |
| `Icon` | `name` · `size` · `strokeWidth` | set glyph HUD stroke (chevron/arrow/bracket/check…) |
| `Reveal` | `delay` (ms) | wrapper Framer Motion scroll-reveal (lihat Motion) |

Layout (`src/components/layout/`): `Header` (nav sticky + toggle ID/EN + tombol Contact), `Footer` (panel contact + social + footer bar), `HudBackdrop` (dua radial glow aksen + dot grid 32px, fixed).

## Motion

- **Scroll-reveal:** `Reveal` pakai Framer Motion `whileInView` — `initial{opacity:0,y:22}` → `{opacity:1,y:0}`, `viewport once`, ease `cubic-bezier(.22,1,.36,1)`, durasi ~0.62s. Prop `delay` (ms) untuk **stagger** ~45–80ms per cell. Hormati `prefers-reduced-motion` (no-op).
- **Smooth scroll:** Lenis (`hooks/useSmoothScroll`) + intersepsi anchor `#…` dengan offset nav; nonaktif saat reduced-motion.
- **Micro-interaction:** transisi 120–360ms (`--dur-fast`/`--dur`/`--dur-slow`), ease-out untuk reveal/hover, ease-press untuk klik button. Tanpa bounce/parallax berlebih.

## Game flourishes (referensi minecraft.net, diadaptasi)

- **XP scroll bar** (`layout/XpScrollBar`) — progress scroll sebagai XP bar hijau tersegmen fixed di bawah + angka "LV" (= persen; emas saat 100).
- **Splash text** — teks emas miring berdenyut di samping nama hero (`.anim-splash`), bergilir tiap 4 dtk, konten di `i18n hero.splashes` (bilingual).
- **Item tooltip** — hover `InventorySlot` memunculkan tooltip gaya game (bg gelap + border violet `--ore-tooltip-*`): nama item + tier. Tier per item di `data/techStack.ts`, label tier di `i18n stack.tiers` (Legendaris/Epik/Langka/Umum → warna gold/blue/green/muted).
- **Enchant glint** — kilau diagonal menyapu slot `featured` (`.enchant-glint`).
- **World strata** (`layout/WorldStrata`) — penutup halaman full-bleed: garis rumput → strata batu dengan pixel "ore" aksen → bedrock. Motif senama sistem (Oreframe).
- **PixelDivider** — urat ore kecil + garis pixel-dash di tengah gap antar section (net-zero spacing).
- **Pixel mobs & partikel** — slime (lompat, berdiri di atas block), spirit (melayang), emerald (bobbing); partikel debu pixel melayang di backdrop. Sprite original berbasis grid (`ui/mobs.ts`), warna token.
- **HUD hearts** — baris 5 hati pixel di StatCell "Tersedia" (prop `footer`).
- **Chrome game** — `::selection` hijau, `:focus-visible` ring hijau, scrollbar gelap ber-thumb hijau saat hover, vignette halus di backdrop.
- Semua animasi mati saat `prefers-reduced-motion`; semua elemen dekoratif `aria-hidden` + `pointer-events: none`; mob desktop-only.

## Ikonografi

- **Tanpa logo.** Identitas = wordmark teks `nama.dev` (display face, titik hijau aksen). Jangan bikin logo.
- **Ikon tech-stack & sosial:** brand SVG asli dari **Simple Icons CDN** (`https://cdn.simpleicons.org/<slug>/<hex>`), tint netral → recolor blue saat hover. Slug tech di `src/data/techStack.ts`.
- **HUD glyph:** Unicode di font mono (`▸ → ↗ ↑ ★`). **Tanpa emoji.**

## Konten & i18n

- Semua teks user-facing lewat `src/i18n/{id,en}.ts` (bentuk `Dictionary` di `types.ts`), default **ID**, toggle EN tanpa reload (`LangContext`).
- Struktur non-teks (slug ikon, span grid, warna dot, tag brand, href) di `src/data/{techStack,projects,experience}.ts`; teks yang bisa diterjemahkan di-zip per index dari i18n.
- Konten saat ini **placeholder netral** ("Nama Kamu"/"Your Name", "Proyek Utama", "Perusahaan A") — ganti lewat file i18n/data, struktur & jumlah item tetap.
