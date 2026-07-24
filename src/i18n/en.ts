import type { Dictionary } from './types'

export const en: Dictionary = {
  nav: {
    about: 'About',
    stack: 'Stack',
    work: 'Work',
    path: 'Path',
    contact: 'Contact',
  },
  hero: {
    kicker: '▸ Your Role',
    name1: 'Your',
    name2: 'Name',
    tagline:
      'A short line about you — what you build, your core strengths, and the value you bring to every project.',
    cta1: 'View Projects',
    cta2: 'Contact Me',
    stats: [
      { value: 'Available', label: 'Open for work' },
      { value: '5+ yrs', label: 'Experience' },
      { value: 'Your City', label: 'Based in · GMT+7' },
    ],
  },
  about: {
    kicker: 'About',
    title: 'A little about me',
    photoLabel: 'Operator',
    photoPlaceholder: 'Drop a portrait',
    p1: 'Write your opening paragraph here — who you are, what you focus on, and the approach you bring when building things. Replace this placeholder text via the i18n files.',
    p2: 'A second paragraph for extra detail — interests outside of work, what you are currently learning, or how you collaborate within a team.',
    focusLabel: 'Focus Areas',
    focus: [
      'API Design',
      'Distributed Systems',
      'Databases',
      'Queues & Workers',
      'Observability',
      'CI / CD',
    ],
  },
  stack: {
    kicker: 'Tech Stack',
    title: 'Tools of the trade',
  },
  work: {
    kicker: 'Selected Work',
    title: "Things I've shipped",
    linkLive: 'Live',
    linkCode: 'Code',
    featured: {
      badge: '★ Featured',
      tag: 'Featured Project',
      title: 'Flagship Project',
      desc: 'A description of your flagship project — the problem it solves, the scale it handles, and the key technical decisions behind it. Replace this with your real project.',
    },
    projects: [
      {
        tag: 'Category',
        title: 'Project Two',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
      {
        tag: 'Category',
        title: 'Project Three',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
      {
        tag: 'Category',
        title: 'Project Four',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
      {
        tag: 'Category',
        title: 'Project Five',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
      {
        tag: 'Category',
        title: 'Project Six',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
      {
        tag: 'Category',
        title: 'Project Seven',
        desc: 'A short summary of the project — what it does and its core technology.',
      },
    ],
  },
  path: {
    kicker: 'Experience',
    title: 'The path so far',
    jobs: [
      {
        year: '2023 — Now',
        role: 'Senior Role',
        org: 'Company A',
        note: 'A short description of your responsibilities and key achievements in this role.',
      },
      {
        year: '2020 — 2023',
        role: 'Mid-level Role',
        org: 'Company B',
        note: 'A short description of your responsibilities and key achievements in this role.',
      },
      {
        year: '2018 — 2020',
        role: 'Early Role',
        org: 'Freelance',
        note: 'A short description of your responsibilities and key achievements in this role.',
      },
    ],
  },
  contact: {
    kicker: "▸ Let's build something",
    title: 'Got a project that needs a steady hand?',
    p: 'Write a short call to action here. I am open to opportunities and collaboration — drop a line and I will reply soon.',
    email: 'you@email.com',
  },
  footer: {
    note: '© 2026 · Built with the Oreframe design system',
  },
}
