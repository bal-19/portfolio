import { LangProvider } from '@/i18n/LangContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { HudBackdrop } from '@/components/layout/HudBackdrop'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { TechStack } from '@/sections/TechStack'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'

export function App() {
  useSmoothScroll()

  return (
    <LangProvider>
      <HudBackdrop />
      <div className="mx-auto max-w-container px-5 pb-24 sm:px-8 lg:px-10">
        <Header />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </LangProvider>
  )
}
