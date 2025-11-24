import { useState } from "react";
import FadeContent from "@/components/lib/FadeContent";
import {
    SiReact,
    SiTailwindcss,
    SiLaravel,
    SiPhp,
    SiPython,
    SiJavascript,
    SiCodeigniter,
    SiMysql,
    SiPostgresql,
    SiFigma,
    SiOdoo,
    SiTypescript,
} from "react-icons/si";
import { Code2, Database, Palette, Server } from "lucide-react";

const SkillCard = ({ icon: Icon, title, skills, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full cursor-pointer"
            style={{
                perspective: "1000px",
                height: "320px"
            }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.7s",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
                }}
            >
                {/* Front Side */}
                <div
                    className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-xl flex flex-col items-center justify-center p-6"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden"
                    }}
                >
                    <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                        <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm">Hover to see skills</p>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 shadow-xl p-6 overflow-y-auto"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <h3 className="text-xl font-bold text-white mb-4 text-center sticky top-0 bg-slate-900/95 backdrop-blur-sm pb-2 z-10">
                        {title}
                    </h3>

                    <div className="space-y-3">
                        {skills.map((skill, index) => (
                            <a
                                key={index}
                                href={skill.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div
                                        className="text-2xl group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            color: color.includes("blue") ? "#3b82f6" :
                                                color.includes("green") ? "#10b981" :
                                                    color.includes("purple") ? "#a855f7" :
                                                        "#f97316"
                                        }}
                                    >
                                        {skill.node}
                                    </div>
                                    <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors flex-1">
                                        {skill.name}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
                                        style={{
                                            width: isFlipped ? `${skill.level}%` : '0%'
                                        }}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SkillsSection = () => {
    const skillCategories = [
        {
            icon: Code2,
            title: "Frontend",
            color: "from-blue-500 to-cyan-500",
            skills: [
                {
                    node: <SiTypescript />,
                    name: "TypeScript",
                    level: 73,
                    href: "https://www.typescriptlang.org/",
                },
                {
                    node: <SiJavascript />,
                    name: "JavaScript",
                    level: 80,
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                },
                { node: <SiReact />, name: "React", level: 88, href: "https://react.dev/" },
                {
                    node: <SiTailwindcss />,
                    name: "Tailwind CSS",
                    level: 86,
                    href: "https://tailwindcss.com/",
                },
            ],
        },
        {
            icon: Server,
            title: "Backend",
            color: "from-green-500 to-emerald-500",
            skills: [
                { node: <SiPhp />, name: "PHP", level: 96, href: "https://www.php.net/" },
                { node: <SiLaravel />, name: "Laravel", level: 93, href: "https://laravel.com/" },
                {
                    node: <SiCodeigniter />,
                    name: "CodeIgniter",
                    level: 79,
                    href: "https://codeigniter.com/",
                },
                { node: <SiPython />, name: "Python", level: 75, href: "https://www.python.org/" },
            ],
        },
        {
            icon: Database,
            title: "Database",
            color: "from-purple-500 to-pink-500",
            skills: [
                { node: <SiMysql />, name: "MySQL", level: 88, href: "https://www.mysql.com/" },
                {
                    node: <SiPostgresql />,
                    name: "PostgreSQL",
                    level: 82,
                    href: "https://www.postgresql.org/",
                },
            ],
        },
        {
            icon: Palette,
            title: "Tools & Others",
            color: "from-orange-500 to-red-500",
            skills: [
                { node: <SiFigma />, name: "Figma", level: 60, href: "https://www.figma.com/" },
                { node: <SiOdoo />, name: "Odoo", level: 68, href: "https://www.odoo.com/" },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <FadeContent
                blur={false}
                duration={800}
                easing="ease-out"
                delay={120}
                threshold={0.3}
                initialOpacity={0}
            >
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-primary">Skills</span>
                    </h2>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {skillCategories.map((category, index) => (
                            <SkillCard key={index} {...category} />
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-8">
                        <p className="text-slate-400 text-sm">
                            💡 Hover (desktop) or tap (mobile) to see detailed skills
                        </p>
                    </div>
                </div>
            </FadeContent>
        </section>
    );
};