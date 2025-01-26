import SectionWrapper from "@/components/hoc/SectionWrapper";
import ProjectCard from "@/components/Project-Card";
import { projects } from "@/constants";

function MyWorks() {
    return (
        <section className="space-y-12">
            <section className="space-y-12 text-center">
                <h1 className="text-5xl font-bold">My Works</h1>
                <p className="text-xl">Here are the lists of the projects I have contributed in.</p>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col gap-5">
                    {projects.filter((_, i) => i % 2 === 0).map((project, i) => (
                        <ProjectCard
                            key={i}
                            project={project}
                            className="min-h-[500px] min-w-fit"
                            techCard="row"
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-5 lg:mt-20">
                    {projects.filter((_, i) => i % 2 === 1).map((project, i) => (
                        <ProjectCard
                            key={i}
                            project={project}
                            className="min-h-[500px] min-w-fit"
                            techCard="row"
                        />
                    ))}
                </div>
            </section>
        </section>
    )
}


export default SectionWrapper({ component: <MyWorks />, id: "my-works", className: "!max-w-none p-4 sm:mt-20" });