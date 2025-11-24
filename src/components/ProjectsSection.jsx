import { ArrowRight, Github, ExternalLink } from "lucide-react";
import FadeContent from "@/components/lib/FadeContent";

const projects = [
    {
        id: 1,
        title: "Website for Top Up Diamonds Mobile Legends",
        description:
            "A sleek and responsive platform designed for Mobile Legends players to easily purchase in-game currency. Built with a modern tech stack, it features a user-friendly interface and seamless navigation (note: payment integration is not included).",
        image: "/projects/project1.jpeg",
        tags: ["PHP", "Bootstrap", "MySQL"],
        githubUrl: "https://github.com/bal-19/topup-website-mobile-legends",
    },
    {
        id: 2,
        title: "Online Wifi Installation Orders",
        description:
            "A dynamic web application that streamlines the process of ordering WiFi installations online. Includes an interactive dashboard with secure payment using Midtrans and advanced filtering for enhanced user experience.",
        image: "/projects/project2.jpeg",
        tags: ["Laravel", "TailwindCSS", "Midtrans"],
        githubUrl: "https://github.com/bal-19/hadi-net",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <FadeContent
                    blur={false}
                    duration={800}
                    easing="ease-out"
                    delay={120}
                    threshold={0.3}
                    initialOpacity={0}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Featured{" "}
                        <span className="text-primary"> Projects </span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each project was
                        carefully crafted with attention to detail, performance,
                        and user experience.
                    </p>
                </FadeContent>

                <div className="space-y-24">
                    {projects.map((project, key) => (
                        <FadeContent
                            key={key}
                            blur={false}
                            duration={800}
                            easing="ease-out"
                            delay={125 + key * 100}
                            threshold={0.3}
                            initialOpacity={0}
                        >
                            <div className={`group relative flex flex-col ${key % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                                {/* Image Section with Gradient Overlay */}
                                <div className="w-full md:w-1/2 relative">
                                    <div className="relative overflow-hidden rounded-2xl aspect-video">
                                        {/* Image Container */}
                                        <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-500">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                                                style={{
                                                    animationDelay: `${tagIndex * 100}ms`
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 pt-4">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                                        >
                                            <Github size={18} />
                                            View Code
                                        </a>

                                    </div>
                                </div>

                                {/* Decorative Line */}
                                <div className={`hidden md:block absolute top-1/2 ${key % 2 === 0 ? 'left-1/2' : 'right-1/2'} w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent transform -translate-y-1/2`} />
                            </div>
                        </FadeContent>
                    ))}
                </div>

                <FadeContent
                    blur={false}
                    duration={800}
                    easing="ease-out"
                    delay={435}
                    threshold={0.3}
                    initialOpacity={0}
                >
                    <div className="text-center mt-20">
                        <a
                            className="cosmic-button w-fit flex items-center mx-auto gap-2"
                            target="_blank"
                            href="https://github.com/bal-19"
                        >
                            Check My Github <ArrowRight size={16} />
                        </a>
                    </div>
                </FadeContent>
            </div>
        </section>
    );
};