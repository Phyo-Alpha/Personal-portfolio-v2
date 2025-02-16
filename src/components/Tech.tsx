import { technologies } from "@/constants";
import BallCanvas from "./canvas/Ball";
import SectionWrapper from "./hoc/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";

function Tech() {
    return (
        <div className="space-y-12 py-20 relative">
            <motion.div variants={textVariant(0.5)}>
                <h1 className="text-5xl font-bold">
                    My Tech Stack
                </h1>
                <p className="text-xl text-muted-foreground mt-4">Technologies I've mastered through projects</p>
            </motion.div>

            <div className='flex flex-row flex-wrap justify-center gap-8'>
                {technologies.map((technology, index) => (
                    <motion.div
                        key={technology.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-28 h-28 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity" />
                        <BallCanvas icon={technology.icon} />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity min-w-32 flex justify-center">
                            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm capitalize">
                                {technology.name}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper({ component: <Tech />, id: "tech" });