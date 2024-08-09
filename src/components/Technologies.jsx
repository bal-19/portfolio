import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {
        y: -10,
        x: -20,
        opacity: 0,
    },
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.4,
        },
    },
    tap: {
        scale: 1.1,
        transition: {
            duration: 0.4,
        },
    },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-5">
                <motion.div
                    variants={iconVariants(9)}
                    initial="initial"
                    animate="animate"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap="tap"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaHtml5 className="text-7xl text-orange-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap="tap"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiJavascriptFill className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap="tap"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaPython className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6.5)}
                    initial="initial"
                    animate="animate"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap="tap"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiPhp className="text-7xl text-indigo-900" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
