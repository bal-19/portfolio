# Graph Report - .  (2026-07-25)

## Corpus Check
- Corpus is ~9,680 words - fits in a single context window. You may not need a graph.

## Summary
- 304 nodes · 272 edges · 50 communities (30 shown, 20 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.8)
- Token cost: 70,231 input · 0 output

## Community Hubs (Navigation)
- Dev Tooling & Dependencies
- Docs & Design-System Spec
- App tsconfig
- i18n Types & Context
- Runtime Deps & Package Meta
- Node tsconfig
- Pixel Mobs & Sprites
- WorldStrata Decoration
- InventorySlot Component
- Prettier Config
- Button Component
- Projects Data
- Badge Component
- Icon Component
- Panel Component
- StatCell Component
- AmbientParticles Layout
- Footer Layout
- PixelDivider Component
- TechStack Data
- Hero Section
- Header Layout
- Reveal Component
- SectionHeader Component
- Experience Data
- Experience Section
- TechStack Section
- Root tsconfig
- Design Docs: HUD Hearts/StatCell
- Design Docs: PixelDivider/WorldStrata
- Design Docs: Badge
- Design Docs: Chrome/Game Feel
- Design Docs: HudBackdrop
- Design Docs: Pixel Mobs
- Design Docs: SectionHeader
- Design Docs: Splash Text
- Design Docs: XpScrollBar

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `compilerOptions` - 15 edges
3. `scripts` - 6 edges
4. `Design System — "Oreframe" Developer Portfolio` - 6 edges
5. `Dictionary` - 5 edges
6. `Tech Stack (Vite, React 18, TS, Tailwind, Framer Motion, Lenis)` - 4 edges
7. `Project Folder Structure Convention` - 4 edges
8. `Effects: Bevel / Shadow / Glow Tokens` - 4 edges
9. `lenis` - 3 edges
10. `lib` - 3 edges

## Surprising Connections (you probably didn't know these)
- `favicon.svg — Rounded-square icon with blue zigzag glyph` --conceptually_related_to--> `Iconography (no logo, Simple Icons CDN, HUD glyphs)`  [INFERRED]
  public/favicon.svg → docs/design-system.md
- `index.html — App Shell` --references--> `favicon.svg — Rounded-square icon with blue zigzag glyph`  [EXTRACTED]
  index.html → public/favicon.svg
- `CLAUDE.md — Developer Portfolio Instructions` --references--> `Design System — "Oreframe" Developer Portfolio`  [EXTRACTED]
  CLAUDE.md → docs/design-system.md
- `index.html — App Shell` --shares_data_with--> `Tech Stack (Vite, React 18, TS, Tailwind, Framer Motion, Lenis)`  [INFERRED]
  index.html → CLAUDE.md
- `useSmoothScroll()` --references--> `lenis`  [EXTRACTED]
  src/hooks/useSmoothScroll.ts → package.json

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Game Flourishes Feature Set** — docs_design_system_xpscrollbar, docs_design_system_splash_text, docs_design_system_item_tooltip, docs_design_system_enchant_glint, docs_design_system_world_strata, docs_design_system_pixeldivider, docs_design_system_pixel_mobs, docs_design_system_hud_hearts, docs_design_system_chrome_game [EXTRACTED 1.00]
- **src/components/ui Component Library** — docs_design_system_button_component, docs_design_system_badge_component, docs_design_system_panel_component, docs_design_system_statcell_component, docs_design_system_inventoryslot_component, docs_design_system_sectionheader_component, docs_design_system_icon_component, docs_design_system_reveal_component [EXTRACTED 1.00]
- **Project Documentation Set** — claude_portfolio_instructions, readme_portfolio_overview, docs_design_system_oreframe [EXTRACTED 1.00]

## Communities (50 total, 20 thin omitted)

### Community 0 - "Dev Tooling & Dependencies"
Cohesion: 0.05
Nodes (37): autoprefixer, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies (+29 more)

### Community 1 - "Docs & Design-System Spec"
Cohesion: 0.09
Nodes (27): Code Conventions (naming, exports, props, path alias), npm Commands (dev/build/preview/lint), Do / Don't Rules, Project Folder Structure Convention, CLAUDE.md — Developer Portfolio Instructions, Tech Stack (Vite, React 18, TS, Tailwind, Framer Motion, Lenis), Spacing / Radius / Bento Grid System, Bevel Motif (raised surface / concave well) (+19 more)

### Community 2 - "App tsconfig"
Cohesion: 0.08
Nodes (24): DOM, src, vite/client, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+16 more)

### Community 3 - "i18n Types & Context"
Cohesion: 0.11
Nodes (20): en, id, Lang, LangContext, LangContextValue, LangProviderProps, AboutDict, ContactDict (+12 more)

### Community 4 - "Runtime Deps & Package Meta"
Cohesion: 0.08
Nodes (22): clsx, lenis, motion, dependencies, clsx, lenis, motion, react (+14 more)

### Community 5 - "Node tsconfig"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 6 - "Pixel Mobs & Sprites"
Cohesion: 0.17
Nodes (12): BLOCK, EMERALD, HEART, MobDef, SLIME, SPIRIT, ANIM, DEFS (+4 more)

### Community 7 - "WorldStrata Decoration"
Cohesion: 0.22
Nodes (6): bedrockJags, Cell, cells, grassNotches, ORE_FILLS, STONE_FILLS

### Community 8 - "InventorySlot Component"
Cohesion: 0.25
Nodes (6): EDGE, GLOW, InventorySlotProps, SlotAccent, TOOLTIP_TONE, TooltipTone

### Community 9 - "Prettier Config"
Cohesion: 0.29
Nodes (6): plugins, printWidth, semi, singleQuote, trailingComma, prettier-plugin-tailwindcss

### Community 10 - "Button Component"
Cohesion: 0.29
Nodes (5): ButtonColor, ButtonProps, ButtonSize, FACE, SIZE

### Community 11 - "Projects Data"
Cohesion: 0.33
Nodes (5): FeaturedMeta, featuredProject, ProjectAccent, ProjectMeta, projects

### Community 12 - "Badge Component"
Cohesion: 0.40
Nodes (3): BadgeProps, BadgeTone, TONE

### Community 13 - "Icon Component"
Cohesion: 0.40
Nodes (3): IconName, IconProps, PATHS

### Community 14 - "Panel Component"
Cohesion: 0.40
Nodes (3): ACCENT, PanelAccent, PanelProps

### Community 15 - "StatCell Component"
Cohesion: 0.40
Nodes (3): StatCellProps, StatTone, TONE

### Community 19 - "TechStack Data"
Cohesion: 0.50
Nodes (3): TechItem, techStack, TechTier

## Knowledge Gaps
- **168 isolated node(s):** `semi`, `singleQuote`, `trailingComma`, `printWidth`, `prettier-plugin-tailwindcss` (+163 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Tooling & Dependencies` to `Runtime Deps & Package Meta`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `trailingComma` to the rest of the system?**
  _168 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dev Tooling & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Docs & Design-System Spec` be split into smaller, more focused modules?**
  _Cohesion score 0.08547008547008547 - nodes in this community are weakly interconnected._
- **Should `App tsconfig` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `i18n Types & Context` be split into smaller, more focused modules?**
  _Cohesion score 0.10666666666666667 - nodes in this community are weakly interconnected._
- **Should `Runtime Deps & Package Meta` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._