export interface MobDef {
  grid: string[]
  palette: Record<string, string>
}

// Original blocky creatures inspired by voxel/game-UI mascots (not copies of any
// specific game's sprites). Colors reference the Oreframe tokens.

export const SLIME: MobDef = {
  palette: {
    o: 'var(--ore-green-deep)',
    b: 'var(--ore-green-face)',
    h: 'var(--ore-green-bright)',
    e: 'var(--ore-black)',
    s: 'var(--ore-text-bright)',
    m: 'var(--ore-green-deep)',
  },
  grid: [
    ' oooooooo ',
    'ohhbbbbbbo',
    'obbbbbbbbo',
    'obsebbsebo',
    'obeebbeebo',
    'obbbbbbbbo',
    'obbmmmmbbo',
    'obbbbbbbbo',
    ' oooooooo ',
  ],
}

export const SPIRIT: MobDef = {
  palette: {
    o: 'var(--ore-blue-shadow)',
    b: 'var(--ore-blue-face)',
    h: 'var(--ore-blue-bright)',
    e: 'var(--ore-black)',
  },
  grid: [
    '   ooo   ',
    '  ohbho  ',
    ' obbbbbo ',
    'obbbbbbbo',
    'obebbbebo',
    'obebbbebo',
    'obbbbbbbo',
    'obb bb bo',
  ],
}

export const EMERALD: MobDef = {
  palette: {
    o: 'var(--ore-green-deep)',
    g: 'var(--ore-green-face)',
    h: 'var(--ore-green-bright)',
  },
  grid: [
    '   o   ',
    '  oho  ',
    ' ohggo ',
    'ohgggho',
    ' ogggo ',
    '  ogo  ',
    '   o   ',
  ],
}

// Terrain tile: grass top over stone — a platform for mobs to stand on.
export const BLOCK: MobDef = {
  palette: {
    h: 'var(--ore-green-bright)',
    f: 'var(--ore-green-face)',
    d: 'var(--ore-green-deep)',
    s: 'var(--ore-surface-2)',
    b: 'var(--ore-border-strong)',
    t: 'var(--ore-surface-3)',
  },
  grid: [
    'hhhhhhhhhhhh',
    'ffffffffffff',
    'fdfffdffffdf',
    'ssssbsssdsss',
    'sdssssbsssss',
    'ssssdssssbss',
    'sbssssdsssss',
  ],
}

// HUD heart (health) — used as a tiny status decoration.
export const HEART: MobDef = {
  palette: {
    r: 'var(--ore-red-bright)',
    h: 'var(--ore-text-bright)',
  },
  grid: [
    ' rr rr ',
    'rhrrrrr',
    'rrrrrrr',
    ' rrrrr ',
    '  rrr  ',
    '   r   ',
  ],
}
