import { motion } from "framer-motion";


import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const SectionWrapper = ({ component, id, className }: { component: ReactNode, id: string, className?: string }) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={cn(`${styles.padding} max-w-7xl mx-auto relative z-0`, className)}
            >
                <span className='hash-span' id={id}>
                    &nbsp;
                </span>

                {component}
            </motion.section>
        );
    };

export default SectionWrapper;
