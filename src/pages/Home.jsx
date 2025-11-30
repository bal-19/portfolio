import Galaxy from "@/components/lib/BackgroundGalaxy";

import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { EducationSection } from "../components/EducationSection";
import SpotifyIslandAnimated from "../components/SpotifyIsland";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <div className="fixed inset-0 -z-0 pointer-events-auto">
                <Galaxy
                    mouseRepulsion={false}
                    mouseInteraction={false}
                    density={0.9}
                    glowIntensity={0.2}
                />
            </div>

            {/* Dynamic Island */}
            <SpotifyIslandAnimated />;

            {/* Main Content */}
            <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <EducationSection />
                <ContactSection />
            </main>
        </div>
    );
};
