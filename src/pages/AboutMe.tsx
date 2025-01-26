import SectionWrapper from "@/components/hoc/SectionWrapper";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";

function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12 p-8 rounded-lg shadow-lg"
        >
            <div className="space-y-6 text-xl">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-bold text-5xl underline underline-offset-4"
                >
                    About Me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}

                >
                    My journey with web development started during my university years where I was learning about data processing and analysis. During one of the projects, I contributed to a cinema application website where I used Django and HTML templates to build the app. This is where I discovered the joy of creating websites and as such shifted my career interest from data analysis to web development.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}

                >
                    That interest further developed when I discovered this amazing YouTube channel called Javascript Mastery. What separates that channel from the rest of the online tutorials is that it is project-focused learning. So I was learning about coding practices, popular libraries, and technologies in the web industry such as React and Next.js, while at the same time having fun building websites.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <FaReact className="text-4xl text-blue-500" />

                    <div>
                        <h3 className="font-bold text-xl text-blue-800">React</h3>
                        <p className="text-gray-700">Proficient in building responsive and dynamic user interfaces.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <SiNextdotjs className="text-4xl text-black" />
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">Next.js</h3>
                        <p className="text-gray-700">Experienced in server-side rendering and static site generation.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <SiTypescript className="text-4xl text-blue-600" />
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">TypeScript</h3>
                        <p className="text-gray-700">Skilled in developing type-safe and scalable applications.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <SiRedux className="text-4xl text-purple-500" />
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">Redux</h3>
                        <p className="text-gray-700">Expert in state management for complex applications.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <FaNodeJs className="text-4xl text-green-500" />
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">Node.js</h3>
                        <p className="text-gray-700">Proficient in building scalable backend services.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <FaPython className="text-4xl text-yellow-500" />
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">Python</h3>
                        <p className="text-gray-700">Experienced in data analysis and backend development.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="space-y-6 text-xl"
            >
                <h2 className="font-bold text-3xl underline underline-offset-4 ">Work Experience</h2>
                <p >On March 27th, I got into an interview with the boss of the current company I'm working at.</p>
            </motion.div>
        </motion.div>
    );
}

export default SectionWrapper({ component: <AboutMe />, id: "about-me" });