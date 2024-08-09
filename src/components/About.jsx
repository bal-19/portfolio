import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const container = (position_x, position_y, delay) => ({
    hidden: {
        opacity: 0,
        x: position_x,
        y: position_y,
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

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img
                            variants={container(-80, 0, 0)}
                            initial="hidden"
                            whileInView="visible"
                            className="rounded-2xl"
                            src={aboutImg}
                            alt="About"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                            variants={container(80, 0, 0)}
                            initial="hidden"
                            whileInView="visible"
                            className="my-2 max-w-xl py-6"
                        >
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
