import { LangProvider } from '@/i18n/LangContext'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { TechStack } from '@/sections/TechStack'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'

export function App() {
  return (
    <LangProvider>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </LangProvider>
  )
}
