import LogoLoop from "@/components/lib/LogoLoop";
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

const skillLogos = [
    {
        node: <SiTypescript />,
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
    },
    {
        node: <SiJavascript />,
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { node: <SiReact />, name: "React", href: "https://react.dev/" },
    {
        node: <SiTailwindcss />,
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
    },
    { node: <SiPhp />, name: "PHP", href: "https://www.php.net/" },
    { node: <SiLaravel />, name: "Laravel", href: "https://laravel.com/" },
    {
        node: <SiCodeigniter />,
        name: "CodeIgniter",
        href: "https://codeigniter.com/",
    },
    { node: <SiPython />, name: "Python", href: "https://www.python.org/" },
    { node: <SiMysql />, name: "MySQL", href: "https://www.mysql.com/" },
    {
        node: <SiPostgresql />,
        name: "PostgreSQL",
        href: "https://www.postgresql.org/",
    },
    { node: <SiOdoo />, name: "Odoo", href: "https://www.odoo.com/" },
    { node: <SiFigma />, name: "Figma", href: "https://www.figma.com/" },
];

export const SkillsSection = () => {
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
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb- text-center">
                        My <span className="text-primary"> Skills</span>
                    </h2>

                    <div
                        style={{
                            height: "200px",
                            position: "relative",
                            overflow: "hidden",
                            marginTop: "150px"
                        }}
                    >
                        <LogoLoop
                            logos={skillLogos}
                            speed={50}
                            direction="left"
                            logoHeight={64}
                            gap={40}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#05080F"
                            ariaLabel="My Skills"
                        />
                    </div>
                </div>
            </FadeContent>
        </section>
    );
};
