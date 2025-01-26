import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { textVariant } from "./utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";
import { styles } from "./styles";
import { Experience } from "@/types";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "linear-gradient(145deg, #0a0a2e, #1a1a4a)",
                color: "#fff",
                border: "1px solid rgba(114, 194, 200, 0.3)",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(114, 194, 200, 0.2)"
            }}
            contentArrowStyle={{
                borderRight: "7px solid rgba(114, 194, 200, 0.7)",
                filter: "drop-shadow(0 0 5px #72c2c8)"
            }}
            date={experience.date}
            dateClassName={"text-[#72c2c8] font-medium text-sm"}
            iconStyle={{
                background: "radial-gradient(circle, #0a0a2e 30%, #1a1a4a 90%)",
                boxShadow: "0 0 15px rgba(114, 194, 200, 0.5)",
                border: "2px solid #72c2c8"
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full p-1">
                    <img src={experience.icon} alt={experience.company_name} className="size-[90%] object-contain rounded-full animate-pulse-slow" />
                </div>
            }
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-[#72c2c8] text-[22px] font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {experience.title}
                </h3>
                <p className="text-[#a8d7db] text-[16px] font-semibold mt-2">
                    {experience.company_name}
                </p>
                <ul className="mt-5 ml-5 space-y-3 list-disc list-outside">
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="text-[#e0f4ff] text-[14px] pl-2 tracking-wide leading-relaxed"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </VerticalTimelineElement>
    );
};

const ExperienceSection = () => {
    return (
        <div className="relative">
            <motion.div
                variants={textVariant(1)}
                className="text-center mb-16"
            >
                <p className={`${styles.sectionSubText} text-cyan-300`}>
                    MY JOURNEY THROUGH THE COSMOS
                </p>
                <h1 className={`${styles.sectionHeadText}`}>
                    Stellar Career Path
                </h1>
            </motion.div>
            <div className="mt-12 flex flex-col">
                <VerticalTimeline
                    lineColor="linear-gradient(to bottom, #4a22a6, #72c2c8)"
                    className="relative before:bg-gradient-to-b before:from-purple-500 before:to-cyan-500"
                >
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default SectionWrapper({ component: <ExperienceSection />, id: "work" });