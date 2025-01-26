import { styles } from "./styles";
import { projects } from "@/constants";
import ProjectCard from "./Project-Card";
import SectionWrapper from "./hoc/SectionWrapper";

function Project() {
    return (
        <div className="space-y-4">
            <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
            <div className="flex flex-col gap-20">
                {projects.slice(0, 2).map((project, i) => (
                    <ProjectCard project={project} key={i} />
                ))}
            </div>
            <a href="/projects" className="flex justify-center text-lg py-4">
                {`Check out more of my works ->`}
            </a>
        </div>
    )
}

export default SectionWrapper({ component: <Project />, id: "project" });