import { m } from "framer-motion";

import { projects } from "@/data/projects";

import { ProjectItem } from "@/components/ui/ProjectItem";

export function ProjectsContent() {
  return (
    <>
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-title">Trabalho, hobby & open source</h1>
        <p className="text-foreground">
          Sou fanático em criar{" "}
          <span className="text-primary font-medium">projetos pessoais</span>.
          Nesta página você pode navegar para{" "}
          <span className="text-primary font-medium">
            {projects.length} sites
          </span>{" "}
          na qual desenvolvi.
        </p>
      </div>
      <m.div
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((props) => (
          <ProjectItem key={props.id} {...props} />
        ))}
      </m.div>
    </>
  );
}
