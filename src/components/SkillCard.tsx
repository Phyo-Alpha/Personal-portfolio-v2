import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SkillCardProps extends HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconColor?: string;
}

export function SkillCard({
    icon,
    title,
    description,
    className,
    iconColor = "text-white",
    ...props
}: SkillCardProps) {
    return (
        <div
            className={cn(
                "p-6 rounded-xl shadow-lg flex items-center space-x-4",
                "bg-gradient-to-br from-[#0a0a2e] to-[#1a1a4a]",
                "border border-[rgba(114,194,200,0.3)]",
                "transition-all hover:scale-[1.02] hover:shadow-xl",
                className
            )}
            {...props}
        >
            <div className={`${iconColor} text-4xl`}>{icon}</div>
            <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {title}
                </h3>
                <p className="text-[#a8d7db] mt-1">{description}</p>
            </div>
        </div>
    );
}