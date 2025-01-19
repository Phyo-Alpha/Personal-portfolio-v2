import { Project } from "@/types";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

const ProjectCardVariants = cva('flex py-2',
    {
        variants: {
            techCard: {
                row: 'flex-row flex-wrap justify-between items-center',
                column: 'flex-col gap-4'
            }
        },
        defaultVariants: {
            techCard: 'column'
        }
    }
)

export type ProjectCardProps = HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof ProjectCardVariants> &
{
    project: Project
}
export default function ProjectCard({ project, className, techCard, ...props }: ProjectCardProps) {
    const { image, title, techs, description } = project
    return (
        <a href="" className={className}>
            <Card className={cn("min-h-[600px] relative overflow-hidden group", className)} {...props}>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/75 to-black" />
                <div className={"absolute z-10 px-6 pb-4 bottom-0 text-primary-foreground space-y-2 group-hover:translate-y-0 transition-transform duration-500 translate-y-10 min-w-full "
                }>
                    <div className={cn(
                        ProjectCardVariants({ techCard })
                    )}>
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <div className="flex gap-2">
                            {techs.map((tech, i) => (
                                <Button
                                    className="flex gap-2 border border-gray-500 shadow-sm rounded-xl p-2 bg-black/50"
                                    key={i}
                                >
                                    <img src={tech.techImg} alt="" className={cn("size-6")} />
                                    <p className={cn(techCard === 'row' && 'hidden', "text-lg font-bold text-secondary")}>
                                        {tech.name}
                                    </p>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <p className="text-muted-foreground font-bold">{description}</p>
                    <a href="/projects" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="ghost" className="gap-2 p-0 hover:bg-transparent text-white hover:text-white/50">
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </Card>
        </a>
    )
}