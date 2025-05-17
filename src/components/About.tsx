import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { gmail, linkedIn } from "@/assets/social";
import SectionWrapper from "./hoc/SectionWrapper";
import { profileImage, resumePdf } from "@/assets";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./utils/motion";


function About() {
    return (
        <Card variant="outline" className="sm:mt-20 relative overflow-hidden group ">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-[99]" />
            <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
                <motion.div
                    variants={textVariant(0.5)}
                    className="col-span-2 space-y-6 order-last lg:order-first"
                >
                    <motion.div variants={textVariant(0.5)} className="flex justify-between">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Edward Phyo
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeIn("right", "spring", 0.2, 1)} className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-full">
                            <MapPin className="text-blue-600" />
                        </div>
                        <p className="text-lg text-muted-foreground">Bangkok, Thailand</p>
                    </motion.div>

                    <motion.p variants={fadeIn("up", "spring", 0.4, 1)} className="text-xl leading-relaxed text-muted-foreground">
                        I'm a full-stack developer passionate about crafting modern web experiences.
                        Specializing in <span className="text-blue-600 font-semibold">React</span>,{" "}
                        <span className="text-purple-600 font-semibold">Next.js</span>, and{" "}
                        <span className="text-green-600 font-semibold">Typescript</span>.
                        I also build performant WordPress solutions with custom PHP extensions.
                    </motion.p>

                    <motion.div variants={fadeIn("up", "spring", 0.6, 1)} className="flex gap-4 flex-wrap">
                        <a href={resumePdf} download>
                            <Button variant="default" className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform">
                                📄 Download CV
                            </Button>
                        </a>
                        <div className="flex gap-2">
                            <a href="https://www.linkedin.com/in/edward-phyo/" target="_blank">
                                <Button size="icon" variant="ghost" className="hover:bg-blue-100/50 rounded-full">
                                    <img src={linkedIn} className="w-8 h-8" alt="LinkedIn" />
                                </Button>
                            </a>
                            <a href="mailto:edwardphyo115@gmail.com" target="_blank">
                                <Button size="icon" variant="ghost" className="hover:bg-blue-100/50 rounded-full">
                                    <img src={gmail} className="w-8 h-8" alt="LinkedIn" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", "spring", 0.8, 1)}
                    className="flex justify-center items-center relative"
                >
                    <div className="relative group">
                        <img
                            src={profileImage}
                            alt="Edward Phyo"
                            className="rounded-2xl border-4 border-white shadow-2xl w-72 h-72 object-cover hover:rotate-3 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-blue-500/30 transition-all duration-500" />
                    </div>
                </motion.div>
            </CardContent>
        </Card>
    )
}

export default SectionWrapper({ component: <About />, id: "about" });