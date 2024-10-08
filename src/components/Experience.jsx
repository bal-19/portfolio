import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

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

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            variants={container(-80, 0, 0)}
                            initial="hidden"
                            whileInView="visible"
                            className="w-full lg:w-1/4"
                        >
                            <p className="mb-2 text-sm text-neutral-400">
                                {experience.year}
                            </p>
                        </motion.div>
                        <motion.div
                            variants={container(80, 0, 0)}
                            initial="hidden"
                            whileInView="visible"
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {experience.description}
                            </p>
                            {experience.technologies.map(
                                (technology, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                                    >
                                        {technology}
                                    </span>
                                )
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
