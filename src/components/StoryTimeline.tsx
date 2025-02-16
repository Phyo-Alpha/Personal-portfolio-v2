import { motion } from "framer-motion";
import { SiWordpress, SiPhp, SiJquery, SiReact, SiNestjs, SiPostgresql, SiNextdotjs } from "react-icons/si";

const timelineSteps = [
    {
        step: 1,
        date: "Mar 27, 2024",
        title: "Career Beginning",
        content: "Interview success with company CEO, leading to first project assignment",
        techs: [],
    },
    {
        step: 2,
        date: "May 2024",
        title: "SPL Project Launch",
        content: "Developed fixture block and league standings table using Sport Radar API for Football Association of Singapore's WordPress site",
        techs: [SiWordpress, SiPhp],
    },
    {
        step: 3,
        date: "Jun 2024",
        title: "SYL Project Challenge",
        content: "Implemented new features for client's WordPress/JQuery site including league fixtures and standings tabs",
        techs: [SiWordpress, SiJquery],
    },
    {
        step: 4,
        date: "Jun 2024",
        title: "Financial System Development",
        content: "Developing financial transaction application for Chia Ka Partner Group",
        techs: [SiReact, SiNestjs, SiPostgresql],
    },
    {
        step: 5,
        date: "Sep 2024",
        title: "Voucher Distribution System Development",
        content: "Creating voucher distribution system website, where users can buy, distribute, and redeem vouchers, while merchants can create and manage their vouchers",
        techs: [SiReact, SiNextdotjs]
    },
    {
        step: 6,
        date: "Dec 2024",
        title: "Project Completion",
        content: "Successfully completed the financial system project, and handed over to client for testing and deployment",
        techs: [SiReact, SiNestjs, SiPostgresql]
    }
];

const StoryTimeline = () => {
    return (
        <div className="relative max-w-3xl mx-auto">
            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M20 0
                    Q20 20, 40 20
                    Q60 20, 60 40
                    Q60 60, 40 60
                    Q20 60, 20 80
                    Q20 100, 40 100
                    "
                    stroke="url(#snakeGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5 5"
                />
                <defs>
                    <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4a22a6" />
                        <stop offset="100%" stopColor="#72c2c8" />
                    </linearGradient>
                </defs>
            </svg>

            {timelineSteps.map((step, index) => (
                <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative pl-24 pb-12 ${index % 2 === 0 ? 'ml-0' : 'ml-24'}`}
                >
                    {/* Step number */}
                    <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                        {step.step}
                    </div>

                    {/* Content */}
                    <div className="bg-gradient-to-br from-[#0a0a2e] to-[#1a1a4a] p-6 rounded-xl border border-[rgba(114,194,200,0.3)] shadow-lg">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {step.title}
                            </h3>
                            <span className="text-[#72c2c8] text-sm">{step.date}</span>
                        </div>
                        <p className="text-[#a8d7db] mb-4">{step.content}</p>

                        {/* Technology icons */}
                        {step.techs.length > 0 && (
                            <div className="flex gap-3 mt-4">
                                {step.techs.map((Icon, i) => (
                                    <div key={i} className="p-2 rounded-lg bg-black/30 border border-[rgba(114,194,200,0.3)]">
                                        <Icon className="text-2xl text-[#72c2c8]" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StoryTimeline;