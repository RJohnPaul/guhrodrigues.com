import { Metadata } from "next";

import { projects } from "@/data/projects";

import { Title } from "@/components/Elements/Title";
import { Typography } from "@/components/Elements/Typography";
import { ProjectItem } from "@/components/Elements/ProjectItem";
import { AnimateEnter } from "@/components/Elements/AnimateEnter";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Canto pessoal da internet, onde mostra todos os meus projetos.",
};

const ProjectsPage = () => {
  const getTotalProjects = () => {
    return projects.length;
  };

  return (
    <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section>
        <Title variant="title">Trabalho, hobby & open source</Title>
        <Typography className="my-6 leading-relaxed">
          Sou fanático pela criação de novos projetos, pois é a maior chave para
          ganhar conhecimento. Nesta página você pode navegar para{" "}
          {getTotalProjects()} aplicações na qual desenvolvi.
        </Typography>
      </section>
      <ul className="grid place-items-center gap-4 md:grid-cols-2">
        {projects.map((props) => (
          <li key={props.title}>
            <ProjectItem {...props} />
          </li>
        ))}
      </ul>
    </AnimateEnter>
  );
};

export default ProjectsPage;
