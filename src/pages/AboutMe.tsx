import SectionWrapper from "@/components/hoc/SectionWrapper";
import { SkillCard } from "@/components/SkillCard";
import StoryTimeline from "@/components/StoryTimeline";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiNestjs, SiPostgresql } from "react-icons/si";

function AboutMe() {

    const MotionDivsProps = (delay?: number) => {
        return {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, delay }
        }
    }

    return (
        <motion.div
            {...MotionDivsProps()}
            className="space-y-12 p-8 rounded-lg shadow-lg"
        >
            <div className="space-y-6 text-xl">
                <motion.h1
                    {...MotionDivsProps(0.2)}
                    className="font-bold text-5xl underline underline-offset-4"
                >
                    About Me
                </motion.h1>
                <motion.p
                    {...MotionDivsProps(0.4)}

                >
                    My journey with web development started during my university years where I was learning about data processing and analysis. During one of the projects, I contributed to a cinema application website where I used Django and HTML templates to build the app. This is where I discovered the joy of creating websites and as such shifted my career interest from data analysis to web development.
                </motion.p>
                <motion.p
                    {...MotionDivsProps(0.6)}

                >
                    That interest further developed when I discovered this amazing YouTube channel called Javascript Mastery. What separates that channel from the rest of the online tutorials is that it is project-focused learning. So I was learning about coding practices, popular libraries, and technologies in the web industry such as React and Next.js, while at the same time having fun building websites.
                </motion.p>
            </div>

            <motion.div
                {...MotionDivsProps(0.8)}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <SkillCard
                    icon={<FaReact />}
                    title="React"
                    description="Proficient in building responsive and dynamic user interfaces."
                    iconColor="text-[#61DAFB]"
                />
                <SkillCard
                    icon={<SiNextdotjs />}
                    title="Next.js"
                    description="Experienced in server-side rendering and static site generation."
                    iconColor="text-white"
                />
                <SkillCard
                    icon={<SiTypescript />}
                    title="TypeScript"
                    description="Skilled in developing type-safe and scalable applications."
                    iconColor="text-[#3178C6]"
                />
                <SkillCard
                    icon={<SiTailwindcss />}
                    title="Tailwind CSS"
                    description="Experienced in building modern and responsive designs."
                    iconColor="text-[#764ABC]"
                />
                <SkillCard
                    icon={<SiNestjs />}
                    title="Nest.js"
                    description="Familiar with building scalable and modular backend applications."
                    iconColor="text-[#E0234E]"
                />
                <SkillCard
                    icon={<SiPostgresql />}
                    title="PostgreSQL"
                    description="Skilled in designing and managing relational databases."
                    iconColor="text-[#3178C6]"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
            >
                <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Career Journey
                </h2>
                <StoryTimeline />
            </motion.div>
        </motion.div>
    );
}

export default SectionWrapper({ component: <AboutMe />, id: "about-me" });