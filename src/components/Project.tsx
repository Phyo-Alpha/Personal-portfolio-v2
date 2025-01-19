import { styles } from "./styles";
import { projects } from "@/constants";
import ProjectCard from "./Project-Card";
import SectionWrapper from "./hoc/SectionWrapper";

function Project() {
    return (
        <div className="space-y-4">
            <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
            <div className="flex flex-col gap-20">
                {projects.map((project, i) => (
                    <ProjectCard project={project} key={i} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper({ component: <Project />, id: "project" });