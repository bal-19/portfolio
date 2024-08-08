import { PROJECTS } from "../constants";
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

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
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
                            <img
                                src={project.image}
                                alt={project.title}
                                width={200}
                                height={200}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <motion.div
                            variants={container(80, 0, 0)}
                            initial="hidden"
                            whileInView="visible"
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">
                                {project.title}
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {project.description}
                            </p>
                            {project.technologies.map((technology, index) => (
                                <span
                                    key={index}
                                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                                >
                                    {technology}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
