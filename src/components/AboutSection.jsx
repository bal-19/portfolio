import { Briefcase, Code } from "lucide-react";
import FadeContent from "@/components/lib/FadeContent";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <FadeContent
                blur={false}
                duration={800}
                easing="ease-out"
                delay={120}
                threshold={0.3}
                initialOpacity={0}
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex flex-col items-center md:items-start flex-1">
                            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
                                Fresh Graduate & Web Enthusiast
                            </h3>
                            <p className="text-muted-foreground mb-2 text-center md:text-left">
                                I am a fresh graduate from Vocational High
                                School (SMK) majoring in Software Engineering. I
                                have a strong interest in web development and
                                enjoy building websites.
                            </p>
                            <p className="text-muted-foreground mb-4 text-center md:text-left">
                                Most of my experience comes from creating
                                various web projects for school assignments,
                                where I learned to solve problems and develop
                                practical solutions using modern web
                                technologies.
                            </p>
                            <div className="flex gap-4 pt-2 justify-center md:justify-start">
                                <a
                                    href="#contact"
                                    className="cosmic-button text-base px-8 py-3 shadow-lg"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                        {/* Skills Horizontal Card */}
                        <div className="flex-1 flex flex-col gap-6">
                            {[
                                {
                                    icon: (
                                        <Code className="h-10 w-10 text-primary" />
                                    ),
                                    title: "Web Development",
                                    desc: "Creating responsive websites and web applications with modern frameworks.",
                                },
                                {
                                    icon: (
                                        <Briefcase className="h-10 w-10 text-primary" />
                                    ),
                                    title: "API Development",
                                    desc: "Building and integrating APIs for web projects, enabling communication between frontend and backend systems.",
                                },
                            ].map((skill, idx) => (
                                <div
                                    key={skill.title}
                                    className="flex items-center gap-6 bg-background/80 backdrop-blur-md rounded-xl shadow-md p-6 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="p-4 rounded-full bg-primary/10 shadow">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">
                                            {skill.title}
                                        </h4>
                                        <p className="text-muted-foreground">
                                            {skill.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeContent>
        </section>
    );
};
