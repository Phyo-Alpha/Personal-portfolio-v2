import { technologies } from "@/constants";
import BallCanvas from "./canvas/Ball";
import SectionWrapper from "./hoc/SectionWrapper";

function Tech() {
    return (
        <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-wide">
                What I worked with
            </h1>
            <div className='flex flex-row flex-wrap justify-center gap-1'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper({ component: <Tech />, id: "tech" });

