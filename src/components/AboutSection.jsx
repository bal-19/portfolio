import FadeContent from "@/components/lib/FadeContent";
import ProfileCard from "@/components/lib/reactbits/ProfileCard";
import { Code2, Briefcase, Coffee, Music, Trophy, MapPin } from "lucide-react";

export const AboutSection = () => {
    const stats = [
        { icon: Briefcase, label: "Years Experience", value: "4+", color: "from-blue-500 to-cyan-500" },
        { icon: Code2, label: "Projects Completed", value: "30+", color: "from-green-500 to-emerald-500" },
        { icon: Coffee, label: "Tea Consumed", value: "∞", color: "from-orange-500 to-red-500" },
    ];

    const interests = [
        { icon: Trophy, label: "Badminton", description: "Love smashing on the court" },
        { icon: Music, label: "Music", description: "Coding soundtrack enthusiast" },
        { icon: Code2, label: "Problem Solving", description: "It's not a bug, it's a challenge" },
    ];

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <FadeContent
                    blur={false}
                    duration={800}
                    easing="ease-out"
                    delay={120}
                    threshold={0.1}
                    initialOpacity={0}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Illustration */}
                        <div className="relative">
                            <div className="relative w-full max-w-md mx-auto">
                                {/* Avatar Container with Glow Effect */}
                                <div className="relative">
                                    <ProfileCard
                                        innerGradient="linear-gradient(145deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.15) 100%)"
                                        name="Iqbal Haidee"
                                        title="Software Engineer"
                                        handle="i.iqbal19"
                                        status="Online"
                                        contactText="Follow Me"
                                        avatarUrl="public/profiles/about.png"
                                        showUserInfo={true}
                                        enableTilt={true}
                                        enableMobileTilt={true}
                                        onContactClick={() => window.open('https://www.instagram.com/i.iqbal19/', '_blank')}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6">
                            {/* Intro */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                    Hi, I'm <span className="text-primary">Iqbal Haidee</span>
                                </h3>
                                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                    <MapPin className="w-4 h-4" />
                                    <span>Batu, East Java, Indonesia</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    I'm a <span className="text-primary font-semibold">Backend Developer</span> with 4 years of hands-on experience—1 year professionally and 3 years building cool stuff on my own. I specialize in crafting robust and scalable server-side solutions, with <span className="text-primary font-semibold">Laravel</span> as my weapon of choice.
                                </p>
                                <p>
                                    What drives me? <span className="text-foreground font-semibold">Problem-solving</span>. There's nothing more satisfying than turning complex challenges into elegant solutions. Every bug is just a puzzle waiting to be solved, and I'm here for it!
                                </p>
                                <p>
                                    When I'm not coding, you'll find me on the badminton court smashing shuttlecocks or vibing to music while planning my next project. Balance is key, right?
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="#contact" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                    Let's Connect
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeContent>


                {/* Stats Section */}
                <FadeContent
                    blur={false}
                    duration={800}
                    easing="ease-out"
                    delay={120}
                    threshold={0.1}
                    initialOpacity={0}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeContent>

                {/* Interests Section */}
                <FadeContent
                    blur={false}
                    duration={800}
                    easing="ease-out"
                    delay={120}
                    threshold={0.1}
                    initialOpacity={0}
                >
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-center mb-8">
                            Beyond <span className="text-primary">Coding</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {interests.map((interest, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-secondary to-secondary/50 border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <interest.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                                    <h4 className="text-lg font-semibold text-foreground mb-2">{interest.label}</h4>
                                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeContent>
            </div>
        </section >
    );
};