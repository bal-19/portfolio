import { ArrowDown } from "lucide-react";
import TextType from "@/components/lib/TextType";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            {" "}
                            Hi, I'm
                        </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Iqbal
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Haidee
                        </span>
                    </h1>

                    <TextType
                        text={[
                            "I’m a backend developer who enjoys solving logical challenges. A dedicated backend developer focused on building efficient systems.",
                            "Passionate about creating scalable backend architectures and optimizing performance for seamless user experiences.",
                            "Committed to writing clean, maintainable code and continuously learning new technologies to improve backend solutions."
                        ]}
                        typingSpeed={40}
                        as='p'
                        pauseDuration={700}
                        showCursor={true}
                        className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3" />

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">
                    {" "}
                    Scroll{" "}
                </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};
