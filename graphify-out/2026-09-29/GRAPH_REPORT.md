# Graph Report - new-portfolio  (2026-07-25)

## Corpus Check
- 60 files · ~29,383 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 542 nodes · 639 edges · 68 communities (42 shown, 26 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.67)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f8d8a8a4`
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
- App Entry
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
- draco_decoder.js
- getCache
- A
- ExceptionInfo
- getBinary
- EndScene.tsx
- callRuntimeCallbacks
- emscripten_realloc_buffer
- intArrayFromString
- wrapPointer
- scrollProgress.ts
- ha

## God Nodes (most connected - your core abstractions)
1. `getCache()` - 21 edges
2. `A()` - 20 edges
3. `compilerOptions` - 20 edges
4. `w()` - 19 edges
5. `l()` - 17 edges
6. `ExceptionInfo()` - 16 edges
7. `Design System — "Oreframe" Developer Portfolio` - 16 edges
8. `compilerOptions` - 15 edges
9. `q()` - 8 edges
10. `CLAUDE.md — Developer Portfolio (Vite + React)` - 8 edges

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

## Communities (68 total, 26 thin omitted)

### Community 0 - "Dev Tooling & Dependencies"
Cohesion: 0.05
Nodes (39): autoprefixer, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies (+31 more)

### Community 1 - "Docs & Design-System Spec"
Cohesion: 0.05
Nodes (43): CLAUDE.md — Developer Portfolio (Vite + React), Code Conventions (naming, exports, props, path alias), Commands, Do, Do / Don't Rules, Don't, Project Folder Structure Convention, graphify (+35 more)

### Community 2 - "App tsconfig"
Cohesion: 0.08
Nodes (25): DOM, src, vite/client, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+17 more)

### Community 3 - "i18n Types & Context"
Cohesion: 0.11
Nodes (20): en, id, Lang, LangContext, LangContextValue, LangProviderProps, AboutDict, ContactDict (+12 more)

### Community 4 - "Runtime Deps & Package Meta"
Cohesion: 0.06
Nodes (32): clsx, lenis, motion, dependencies, clsx, lenis, motion, postprocessing (+24 more)

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
Cohesion: 0.25
Nodes (6): ButtonColor, ButtonProps, ButtonSize, ButtonTag, FACE, SIZE

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
Cohesion: 0.11
Nodes (24): B(), C(), D(), E(), f(), G(), H(), I() (+16 more)

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

### Community 56 - "draco_decoder.js"
Cohesion: 0.09
Nodes (4): addRunDependency(), createWasm(), UTF8ArrayToString(), UTF8ToString()

### Community 57 - "getCache"
Cohesion: 0.10
Nodes (20): AttributeOctahedronTransform(), AttributeQuantizationTransform(), AttributeTransformData(), Decoder(), DecoderBuffer(), destroy(), DracoFloat32Array(), DracoInt16Array() (+12 more)

### Community 60 - "getBinary"
Cohesion: 0.25
Nodes (8): abort(), assert(), getBinary(), getBinaryPromise(), intArrayFromBase64(), isDataURI(), isFileURI(), tryParseAsDataURI()

### Community 61 - "EndScene.tsx"
Cohesion: 0.22
Nodes (6): EndScene(), FOCUS_POINT, isLowPower(), ModelProps, reducedMotion(), SSAO_COLOR

### Community 62 - "callRuntimeCallbacks"
Cohesion: 0.29
Nodes (7): addOnPostRun(), addOnPreRun(), callRuntimeCallbacks(), initRuntime(), postRun(), preRun(), run()

### Community 63 - "emscripten_realloc_buffer"
Cohesion: 0.50
Nodes (4): emscripten_realloc_buffer(), _emscripten_resize_heap(), getHeapMax(), updateMemoryViews()

### Community 64 - "intArrayFromString"
Cohesion: 0.50
Nodes (4): ensureString(), intArrayFromString(), lengthBytesUTF8(), stringToUTF8Array()

### Community 67 - "ha"
Cohesion: 0.67
Nodes (3): ha(), l(), p()

## Knowledge Gaps
- **217 isolated node(s):** `semi`, `singleQuote`, `trailingComma`, `printWidth`, `prettier-plugin-tailwindcss` (+212 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `c()` connect `A` to `draco_decoder.js`, `Project Folder Structure Convention`, `ha`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `A()` connect `A` to `Project Folder Structure Convention`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `q()` connect `Project Folder Structure Convention` to `A`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `A()` (e.g. with `c()` and `.settleSameAsThenable_()`) actually correct?**
  _`A()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `semi`, `singleQuote`, `trailingComma` to the rest of the system?**
  _217 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dev Tooling & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._
- **Should `Docs & Design-System Spec` be split into smaller, more focused modules?**
  _Cohesion score 0.050241545893719805 - nodes in this community are weakly interconnected._