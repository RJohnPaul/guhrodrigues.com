import { m } from "framer-motion";

import ProjectItem from "@/components/ui/ProjectItem";

export default function ProjectsContent({ data }) {
    return (
        <m.div
            initial="hide"
            animate="show"
            transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
            className="grid grid-cols-1 gap-8"
        >
            {data.map(({ id, src, title, description, techs, code, visit }) => (
                <ProjectItem
                    key={id}
                    src={src}
                    title={title}
                    description={description}
                    techs={techs}
                    code={code}
                    visit={visit}
                />
            ))}
        </m.div>
    );
}
