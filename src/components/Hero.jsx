import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const container = (position_x, position_y, delay) => ({
    hidden: {
        x: position_x,
        y: position_y,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: delay,
        },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(-100, 0, 0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Iqbal Haidee
                        </motion.h1>
                        <motion.div
                            variants={container(-100, 0, 0.4)}
                            initial="hidden"
                            animate="visible"
                        >
                            <TypeAnimation
                                sequence={[
                                    800,
                                    "Hi!, Welcome to my Portfolio",
                                    800,
                                    "I am a beginner developer",
                                    800,
                                    "Hope you enjoy my portfolio :D",
                                    800,
                                    "Have a nice day!",
                                ]}
                                cursor={true}
                                repeat={Infinity}
                                className="my-3 bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            variants={container(100, 0, 0.4)}
                            initial="hidden"
                            animate="visible"
                            src="https://avatars.githubusercontent.com/u/152265152?v=4"
                            alt="Iqbal Haidee"
                            className="rounded-full shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
