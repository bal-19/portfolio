export type BlockLevel = 0 | 1 | 2 | 3 | 4

export interface ContributionDay {
  date: string
  count: number
}

// Shape of src/data/stats.json, written by the CI build script from the
// GitHub GraphQL contributionsCollection query.
export interface ContributionStats {
  username: string
  generatedAt: string
  totalContributions: number
  days: ContributionDay[]
}

export interface BlockTier {
  /** Full name shown in the tooltip, e.g. "Gold Block". */
  name: string
  /** Short name shown under the legend swatch, e.g. "Gold". */
  short: string
  base: string
  /** Top/left highlight. Omitted on level 0 so it renders as a flat slot. */
  light?: string
  /** Bottom/right shadow. Omitted on level 0. */
  dark?: string
}

// Block palette per activity level — edit here to retune the ladder.
// Level 0 is an empty inventory slot: flat outline, no bevel.
// Block names stay in English; like the brand tags in techStack.ts they read
// as proper nouns rather than translatable copy.
export const BLOCK_TIERS: Record<BlockLevel, BlockTier> = {
  0: {
    name: 'Empty Slot',
    short: 'Empty',
    base: 'var(--ore-surface)',
  },
  1: {
    name: 'Iron Block',
    short: 'Iron',
    base: 'var(--block-iron)',
    light: 'var(--block-iron-light)',
    dark: 'var(--block-iron-dark)',
  },
  2: {
    name: 'Gold Block',
    short: 'Gold',
    base: 'var(--block-gold)',
    light: 'var(--block-gold-light)',
    dark: 'var(--block-gold-dark)',
  },
  3: {
    name: 'Diamond Block',
    short: 'Diamond',
    base: 'var(--block-diamond)',
    light: 'var(--block-diamond-light)',
    dark: 'var(--block-diamond-dark)',
  },
  4: {
    name: 'Emerald Block',
    short: 'Emerald',
    base: 'var(--block-emerald)',
    light: 'var(--block-emerald-light)',
    dark: 'var(--block-emerald-dark)',
  },
}

export const BLOCK_LEVELS: BlockLevel[] = [0, 1, 2, 3, 4]
