import { LazyMotion, domAnimation, m } from "framer-motion";

import { AnimateEnterProps } from "@/types";

export default function AnimateEnter({
    children,
    className,
}: AnimateEnterProps) {
    return (
        <LazyMotion features={domAnimation}>
            <m.section
                className={className}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                {children}
            </m.section>
        </LazyMotion>
    );
}
