'use client'

import { m } from 'framer-motion'

import { projects } from '@/data/projects'

import { PageDescription } from '@/components/utils/PageDescription'
import { ProjectItem } from '@/components/ui/ProjectItem'

export function ProjectsContent() {
  return (
    <>
      <PageDescription
        title="Trabalho, hobby, conhecimento & open source."
        description="Sou fanático pela criação de novos projetos, pois é a maior chave para ganhar conhecimento. Nesta página você pode navegar para 8 sites na qual desenvolvi."
      />
      <m.ul
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
        className="grid md:grid-cols-2 place-items-center gap-4"
      >
        {projects.map((props) => (
          <ProjectItem key={props.id} {...props} />
        ))}
      </m.ul>
    </>
  )
}
