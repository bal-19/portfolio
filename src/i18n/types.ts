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

export interface StackDict {
  kicker: string
  title: string
}

export interface FeaturedDict {
  badge: string
  tag: string
  title: string
  desc: string
}

export interface ProjectDict {
  tag: string
  title: string
  desc: string
}

export interface WorkDict {
  kicker: string
  title: string
  linkLive: string
  linkCode: string
  featured: FeaturedDict
  projects: ProjectDict[]
}

export interface JobDict {
  year: string
  role: string
  org: string
  note: string
}

export interface PathDict {
  kicker: string
  title: string
  jobs: JobDict[]
}

export interface ContactDict {
  kicker: string
  title: string
  p: string
  email: string
}

export interface FooterDict {
  note: string
}

export interface Dictionary {
  nav: NavDict
  hero: HeroDict
  about: AboutDict
  stack: StackDict
  work: WorkDict
  path: PathDict
  contact: ContactDict
  footer: FooterDict
}
