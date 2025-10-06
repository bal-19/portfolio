import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import Particles from "@/components/lib/BackgroundParticles";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}

            <div className="fixed inset-0 -z-0 pointer-events-auto">
                <Particles
                    particleColors={["#ffffff", "#cc01ff"]}
                    particleCount={300}
                    particleSpread={5}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={true}
                    disableRotation={false}
                />
            </div>

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
};
