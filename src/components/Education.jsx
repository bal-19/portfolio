import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

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

const Education = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="my-20 text-center text-4xl"
            >
                Education
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {EDUCATION.map((education, index) => (
                    <motion.div
                        variants={container(0, -80, index / 5)}
                        initial="hidden"
                        whileInView="visible"
                        key={index}
                        className="w-96 rounded-xl bg-slate-900 shadow-xl p-4"
                    >
                        <img
                            src={education.image}
                            alt={education.name}
                            width={350}
                            className="rounded-xl mb-4"
                        />
                        <span className="rounded bg-neutral-900 px-2 py-1 text-center text-sm font-medium text-purple-400">
                            {education.date}
                        </span>
                        <h6 className="mt-3 mb-1 text-center text-xl font-semibold">
                            {education.name}
                        </h6>
                        <p className="text-center text-neutral-400 text-md">
                            {education.level}
                        </p>
                        <p className="my-4 text-center text-neutral-400 text-sm">
                            {education.address}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
