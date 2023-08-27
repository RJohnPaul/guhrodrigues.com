import { m } from "framer-motion";

import { projects } from "@/data/projects";

import ProjectItem from "@/components/ui/ProjectItem";

export default function ProjectsContent() {
    return (
        <>
            <div className="mb-8 space-y-4">
                <h1 className="text-4xl font-extrabold">
                    Trabalho, hobby & open source.
                </h1>
                <p className="text-neutral-400">
                    Sou fanático em criar{" "}
                    <span className="text-primary">projetos pessoais</span>.
                    Nesta página você pode navegar para{" "}
                    <span className="text-primary">
                        {projects.length} sites
                    </span>{" "}
                    na qual desenvolvi.
                </p>
            </div>
            <m.div
                initial="hide"
                animate="show"
                transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
                className="grid grid-cols-1 gap-8"
            >
                {projects.map(
                    ({ id, src, title, description, techs, code, visit }) => (
                        <ProjectItem
                            key={id}
                            src={src}
                            title={title}
                            description={description}
                            techs={techs}
                            code={code}
                            visit={visit}
                        />
                    )
                )}
            </m.div>
        </>
    );
}
