import { Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { linkedIn } from "@/assets/social";
import SectionWrapper from "./hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";

function About() {
    return (
        <motion.div variants={slideIn("up", "tween", 0.2, 1)} >
            <Card variant="outline">
                <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-4 order-last lg:order-first">
                        <div className="flex justify-between">
                            <h1 className="text-4xl font-bold tracking-wide">
                                Edward Phyo
                            </h1>
                        </div>
                        <div className="flex gap-2">
                            <MapPin />
                            <p className="text-muted-foreground">Yangon, Myanmar</p>

                        </div>
                        <p className="text-lg">I'm a software developer specializing in modern web applications using React, Next.js, and React Native. I also build WordPress templates with PHP.</p>
                        <div className="flex gap-3">
                            <a href="./src/assets/Edward_Phyo_Resume.pdf" download>
                                <Button variant="default" className="rounded-full text-lg tracking-wide bg-yellow-300">
                                    Download CV
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/edward-phyo/" target="_blank">
                                <Button size="icon" variant="ghost" className="hover:bg-transparent">
                                    <img src={linkedIn} alt="" />
                                </Button>
                            </a>
                            <a href="mailto:edwardphyo115@gmail.com" target="_blank">
                                <Button size="icon" variant="ghost" className="hover:text-white hover:bg-transparent">
                                    <Mail className="!size-10" />
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src="./src/assets/profile.jpeg"
                            alt=""
                            className="rounded-xl border size-60"
                        />
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default SectionWrapper({ component: <About />, id: "about" });