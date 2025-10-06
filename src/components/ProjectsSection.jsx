import { ArrowRight, Github } from "lucide-react";
import FadeContent from "@/components/lib/FadeContent";

const projects = [
    {
        id: 1,
        title: "Website for Top Up Diamonds Mobile Legends",
        description:
            "A sleek and responsive platform designed for Mobile Legends players to easily purchase in-game currency. Built with a modern tech stack, it features a user-friendly interface and seamless navigation (note: payment integration is not included).",
        image: "/projects/project1.png",
        tags: ["PHP", "Bootstrap", "MySQL"],
        githubUrl: "https://github.com/bal-19/topup-website-mobile-legends",
    },
    {
        id: 2,
        title: "Online Wifi Installation Orders",
        description:
            "A dynamic web application that streamlines the process of ordering WiFi installations online. Includes an interactive dashboard with secure payment using Midtrans and advanced filtering for enhanced user experience.",
        image: "/projects/project2.png",
        tags: ["Laravel", "TailwindCSS", "Midtrans"],
        githubUrl: "https://github.com/bal-19/hadi-net",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <FadeContent
                    blur={false}
                    duration={800}
                    easing="ease-out"
                    delay={120}
                    threshold={0.3}
                    initialOpacity={0}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        {" "}
                        Featured{" "}
                        <span className="text-primary"> Projects </span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each project was
                        carefully crafted with attention to detail, performance,
                        and user experience.
                    </p>
                </FadeContent>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                            <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full min-h-[420px] flex flex-col">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <div className="flex space-x-3">
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
                    <div className="text-center mt-12">
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
