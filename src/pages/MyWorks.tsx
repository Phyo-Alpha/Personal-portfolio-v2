import SectionWrapper from "@/components/hoc/SectionWrapper";
import ProjectCard from "@/components/Project-Card";
import { projects } from "@/constants";
import { useState } from "react";

function MyWorks() {
    const [selectedTech, setSelectedTech] = useState<string>("all");

    // Extract unique technologies from all projects
    const technologies = Array.from(
        new Set(projects.flatMap(project =>
            project.techs.map(tech => tech.name)
        )
        ));

    const filteredProjects = projects.filter(project =>
        selectedTech === "all"
            ? true
            : project.techs.some(tech => tech.name === selectedTech)
    );

    return (
        <section className="space-y-12 pb-12">
            <section className="space-y-8 text-center">
                <h1 className="text-3xl font-bold">My Contributions</h1>
                <p className="text-xl">Here are the lists of the projects I have contributed in. You may click them to see the website.</p>
                <div className="flex justify-center">
                    <select
                        value={selectedTech}
                        onChange={(e) => setSelectedTech(e.target.value)}
                        className="w-64 p-4 rounded-lg border-white border"
                        style={{
                            appearance: "none",
                            background: "#0a0a2e url('data:image/svg+xml;utf8,<svg fill=%22%23ffffff%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 width=%2224%22 height=%2224%22%3E%3Cpath d=%22M7 10l5 5 5-5z%22/%3E%3C/svg%3E') no-repeat right 0.75rem center/1.5rem 1.5rem",
                        }}
                    >
                        <option value="all" className="bg-black">All Technologies</option>
                        {technologies.map((tech, index) => (
                            <option key={index} value={tech} className="bg-black">{tech}</option>
                        ))}
                    </select>
                </div>
            </section>

            {filteredProjects.length === 0 ? (
                <div className="text-center text-xl text-muted-foreground py-12">
                    No projects found with selected technology
                </div>
            ) : (
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-5">
                        {filteredProjects.filter((_, i) => i % 2 === 0).map((project, i) => (
                            <ProjectCard
                                key={i}
                                project={project}
                                className="min-h-[500px] min-w-fit"
                                techCard="row"
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-5 lg:mt-20">
                        {filteredProjects.filter((_, i) => i % 2 === 1).map((project, i) => (
                            <ProjectCard
                                key={i}
                                project={project}
                                className="min-h-[500px] min-w-fit"
                                techCard="row"
                            />
                        ))}
                    </div>
                </section>
            )}
        </section>
    )
}

export default SectionWrapper({ component: <MyWorks />, id: "my-works", className: "!max-w-none p-4 sm:mt-20" });