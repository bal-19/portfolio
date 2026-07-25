# Graph Report - new-portfolio  (2026-07-25)

## Corpus Check
- 57 files · ~15,495 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 370 nodes · 339 edges · 57 communities (35 shown, 22 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5f6015c7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- HudBackdrop Layout
- Design Docs: Badge
- Design Docs: Chrome/Game Feel
- Design Docs: HudBackdrop
- Design Docs: Pixel Mobs
- Design Docs: SectionHeader
- Design Docs: Splash Text
- Design Docs: XpScrollBar
- Project Folder Structure Convention
- contributions.ts
- ContributionGraph.tsx
- contributions.ts
- GithubActivity.tsx
- fetch-github-stats.mjs
- EnderDragon.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `Design System — "Oreframe" Developer Portfolio` - 16 edges
3. `compilerOptions` - 15 edges
4. `CLAUDE.md — Developer Portfolio (Vite + React)` - 8 edges
5. `scripts` - 6 edges
6. `Dictionary` - 5 edges
7. `Tech Stack` - 5 edges
8. `Motion` - 4 edges
9. `Project Folder Structure Convention` - 4 edges
10. `Effects: Bevel / Shadow / Glow Tokens` - 4 edges

## Surprising Connections (you probably didn't know these)
- `favicon.svg — Rounded-square icon with blue zigzag glyph` --conceptually_related_to--> `Iconography (no logo, Simple Icons CDN, HUD glyphs)`  [INFERRED]
  public/favicon.svg → docs/design-system.md
- `index.html — App Shell` --shares_data_with--> `Tech Stack`  [INFERRED]
  index.html → CLAUDE.md
- `index.html — App Shell` --references--> `favicon.svg — Rounded-square icon with blue zigzag glyph`  [EXTRACTED]
  index.html → public/favicon.svg
- `Tech Stack` --conceptually_related_to--> `Content & i18n Structure`  [EXTRACTED]
  CLAUDE.md → docs/design-system.md
- `CLAUDE.md — Developer Portfolio Instructions` --references--> `Design System — "Oreframe" Developer Portfolio`  [EXTRACTED]
  CLAUDE.md → docs/design-system.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Game Flourishes Feature Set** — docs_design_system_xpscrollbar, docs_design_system_splash_text, docs_design_system_item_tooltip, docs_design_system_enchant_glint, docs_design_system_world_strata, docs_design_system_pixeldivider, docs_design_system_pixel_mobs, docs_design_system_hud_hearts, docs_design_system_chrome_game [EXTRACTED 1.00]
- **src/components/ui Component Library** — docs_design_system_button_component, docs_design_system_badge_component, docs_design_system_panel_component, docs_design_system_statcell_component, docs_design_system_inventoryslot_component, docs_design_system_sectionheader_component, docs_design_system_icon_component, docs_design_system_reveal_component [EXTRACTED 1.00]

## Communities (57 total, 22 thin omitted)

### Community 0 - "Dev Tooling & Dependencies"
Cohesion: 0.05
Nodes (37): autoprefixer, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies (+29 more)

### Community 1 - "Docs & Design-System Spec"
Cohesion: 0.07
Nodes (33): CLAUDE.md — Developer Portfolio (Vite + React), Commands, Do, Do / Don't Rules, Don't, graphify, Konvensi Kode, CLAUDE.md — Developer Portfolio Instructions (+25 more)

### Community 2 - "App tsconfig"
Cohesion: 0.08
Nodes (25): DOM, src, vite/client, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+17 more)

### Community 3 - "i18n Types & Context"
Cohesion: 0.11
Nodes (19): en, id, Lang, LangContext, LangContextValue, LangProviderProps, AboutDict, ContactDict (+11 more)

### Community 4 - "Runtime Deps & Package Meta"
Cohesion: 0.08
Nodes (22): clsx, lenis, motion, dependencies, clsx, lenis, motion, react (+14 more)

### Community 5 - "Node tsconfig"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 6 - "Pixel Mobs & Sprites"
Cohesion: 0.13
Nodes (15): BLOCK, DRAGON_DOWN, DRAGON_PALETTE, DRAGON_UP, EMERALD, HEART, MobDef, SLIME (+7 more)

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
Cohesion: 0.25
Nodes (7): FeaturedMeta, featuredProject, ProjectAccent, ProjectCopy, ProjectCopyByLang, ProjectMeta, projects

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

### Community 24 - "Experience Data"
Cohesion: 0.40
Nodes (4): experience, JobCopy, JobCopyByLang, JobMeta

### Community 50 - "Project Folder Structure Convention"
Cohesion: 0.20
Nodes (10): Code Conventions (naming, exports, props, path alias), Project Folder Structure Convention, Bevel Motif (raised surface / concave well), Button Component, Effects: Bevel / Shadow / Glow Tokens, Enchant Glint Flourish, Footer Layout (contact panel + social + footer bar), Header Layout (nav + lang toggle + Contact button) (+2 more)

### Community 51 - "contributions.ts"
Cohesion: 0.28
Nodes (6): buildWeeks(), ContributionWeek, MonthLabel, normalizeDays(), toBlockLevel(), weekdayOf()

### Community 52 - "ContributionGraph.tsx"
Cohesion: 0.38
Nodes (6): blockStyle(), ContributionGraph(), ContributionGraphProps, formatDate(), HoverState, WEEKDAY_ROWS

### Community 53 - "contributions.ts"
Cohesion: 0.29
Nodes (6): BLOCK_LEVELS, BLOCK_TIERS, BlockLevel, BlockTier, ContributionDay, RawContributionDay

### Community 55 - "fetch-github-stats.mjs"
Cohesion: 0.25
Nodes (5): counts, days, [q1, q2, q3], result, sorted

## Knowledge Gaps
- **208 isolated node(s):** `semi`, `singleQuote`, `trailingComma`, `printWidth`, `prettier-plugin-tailwindcss` (+203 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Tooling & Dependencies` to `Runtime Deps & Package Meta`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `Design System — "Oreframe" Developer Portfolio` connect `Docs & Design-System Spec` to `Project Folder Structure Convention`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `trailingComma` to the rest of the system?**
  _208 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dev Tooling & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Docs & Design-System Spec` be split into smaller, more focused modules?**
  _Cohesion score 0.06507936507936508 - nodes in this community are weakly interconnected._
- **Should `App tsconfig` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `i18n Types & Context` be split into smaller, more focused modules?**
  _Cohesion score 0.11231884057971014 - nodes in this community are weakly interconnected._