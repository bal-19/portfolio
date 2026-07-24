import { LangProvider } from '@/i18n/LangContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { HudBackdrop } from '@/components/layout/HudBackdrop'
import { AmbientParticles } from '@/components/layout/AmbientParticles'
import { Header } from '@/components/layout/Header'
import { XpScrollBar } from '@/components/layout/XpScrollBar'
import { WorldStrata } from '@/components/layout/WorldStrata'
import { PixelDivider } from '@/components/ui/PixelDivider'
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
      <AmbientParticles />
      <Header />
      <div className="mx-auto max-w-container px-5 pb-24 pt-7 sm:px-8 lg:px-10">
        <main>
          <Hero />
          <PixelDivider />
          <About />
          <PixelDivider />
          <TechStack />
          <PixelDivider />
          <Projects />
          <PixelDivider />
          <Experience />
          <PixelDivider />
          <Contact />
        </main>
      </div>
      <WorldStrata />
      <XpScrollBar />
    </LangProvider>
  )
}
