export interface NavDict {
  about: string
  stack: string
  work: string
  path: string
  contact: string
}

export interface StatDict {
  value: string
  label: string
}

export interface HeroDict {
  kicker: string
  name1: string
  name2: string
  tagline: string
  cta1: string
  cta2: string
  stats: StatDict[]
  splashes: string[]
}

export interface AboutDict {
  kicker: string
  title: string
  photoLabel: string
  photoPlaceholder: string
  p1: string
  p2: string
  focusLabel: string
  focus: string[]
}

export interface TierDict {
  legendary: string
  epic: string
  rare: string
  common: string
}

export interface StackDict {
  kicker: string
  title: string
  tiers: TierDict
}

export interface WorkDict {
  kicker: string
  title: string
  linkLive: string
  linkCode: string
  featuredBadge: string
}

export interface PathDict {
  kicker: string
  title: string
}

export interface GithubWeekdayDict {
  mon: string
  wed: string
  fri: string
}

export interface GithubDict {
  kicker: string
  title: string
  panelLabel: string
  totalSuffix: string
  contribution: string
  contributions: string
  none: string
  legendLabel: string
  months: string[]
  weekdays: GithubWeekdayDict
}

export interface ContactDict {
  kicker: string
  title: string
  p: string
  phone: string
}

export interface FooterDict {
  note: string
  /** CC-BY-4.0 attribution for the 3D backdrop — required by the model licence. */
  credit3d: string
  creditBy: string
}

export interface SceneDict {
  /** HUD label saat backdrop 3D masih dimuat. */
  loading: string
}

export interface Dictionary {
  nav: NavDict
  hero: HeroDict
  about: AboutDict
  stack: StackDict
  work: WorkDict
  path: PathDict
  github: GithubDict
  contact: ContactDict
  footer: FooterDict
  scene: SceneDict
}
