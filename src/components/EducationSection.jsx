import { useState } from "react";
import FadeContent from "@/components/lib/FadeContent";

export const EducationSection = () => {
    const educationData = [
        {
            id: 1,
            year: "2022-2025",
            level: "Vocational High School",
            institution: "SMK PGRI 03 Malang",
            degree: "Software Engineering Department",
            description:
                "Specializing in software development with a focus on web, mobile, and desktop programming. Actively participating in various application development projects and programming competitions to enhance technical skills.",
            image: "/educations/smk.jpg",
            gpa: "88.19",
            scale: "100",
            predicate: null
        },
        {
            id: 2,
            year: "2019-2022",
            level: "Junior High School",
            institution: "MTs Negeri Batu",
            degree: "Junior High School Education",
            description:
                "The initial period of developing interest in technology and programming. Started learning programming basics through self-study and actively participated in information technology extracurricular activities.",
            image: "/educations/smp.jpg",
            gpa: "83.53",
            scale: "100",
            predicate: null
        },
        {
            id: 3,
            year: "2013-2019",
            level: "Elementary School",
            institution: "MI Bustanul Ulum Batu",
            degree: "Elementary School Education",
            description:
                "Foundation period of academic development with a strong emphasis on mathematics and science. Developed early interest in technology through computer literacy classes and basic problem-solving activities.",
            image: "/educations/sd.jpg",
            gpa: "85",
            scale: "100",
            predicate: null,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % educationData.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + educationData.length) % educationData.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const currentEdu = educationData[currentIndex];

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <FadeContent
                blur={false}
                duration={800}
                easing="ease-out"
                delay={120}
                threshold={0.3}
                initialOpacity={0}
            >
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                        Education
                    </h1>
                    <p className="text-center text-gray-400 text-lg mb-16">
                        Academic journey to professional expertise
                    </p>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Main Content */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left Side - Image */}
                                <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden bg-slate-800">
                                    <img
                                        key={currentEdu.id}
                                        src={currentEdu.image}
                                        alt={currentEdu.institution}
                                        className="w-full h-full object-cover object-center animate-fade-in"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/50 lg:to-transparent" />

                                    {/* Year Badge on Image */}
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            {currentEdu.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div key={`content-${currentEdu.id}`} className="animate-slide-in">
                                        {/* Level Badge */}
                                        <span className="inline-block bg-white/10 text-gray-300 px-4 py-1 rounded-full text-xs font-medium mb-4">
                                            {currentEdu.level}
                                        </span>

                                        {/* Institution */}
                                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                                            {currentEdu.institution}
                                        </h2>
                                        <div className="text-xl text-purple-300 font-semibold mb-6">
                                            {currentEdu.degree}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {currentEdu.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-white/10">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                                    {currentEdu.predicate ? "IPK" : "GPA"}
                                                </span>
                                                <span className="text-2xl font-bold text-white">
                                                    {currentEdu.gpa}
                                                </span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                                    Scale
                                                </span>
                                                <span className="text-2xl font-bold text-white">
                                                    {currentEdu.scale}
                                                </span>
                                            </div>
                                            {currentEdu.predicate && (
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                                        Predikat
                                                    </span>
                                                    <span className="text-2xl font-bold text-white">
                                                        {currentEdu.predicate}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
                            aria-label="Previous"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
                            aria-label="Next"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-3 mt-8">
                            {educationData.map((edu, index) => (
                                <button
                                    key={edu.id}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                                        ? "w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500"
                                        : "w-3 h-3 bg-white/30 hover:bg-white/50 cursor-pointer"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Counter */}
                        <div className="text-center mt-4 text-gray-400 text-sm">
                            {currentIndex + 1} / {educationData.length}
                        </div>
                    </div>
                </div>
            </FadeContent>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }

                .animate-slide-in {
                    animation: slide-in 0.5s ease-out;
                }
            `}</style>
        </section>
    );
};

export default EducationSection;