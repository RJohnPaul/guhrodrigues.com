import { Metadata } from "next";

import { projects } from "@/data/projects";

import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";
import { ProjectItem } from "@/components/ui/ProjectItem";
import { AnimateEnter } from "@/components/utils/AnimateEnter";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Canto pessoal da internet, onde mostra todos os meus projetos.",
};

export default function Projects() {
  function getTotalProjects() {
    return projects.length;
  }

  return (
    <AnimateEnter className="max-w-[854px] pt-8 lg:w-4/5">
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
          <li key={props.id}>
            <ProjectItem {...props} />
          </li>
        ))}
      </ul>
    </AnimateEnter>
  );
}
