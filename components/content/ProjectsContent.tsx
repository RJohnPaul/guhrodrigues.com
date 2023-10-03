'use client'

import { motion } from 'framer-motion'

import { projects } from '@/data/projects'

import { PageDescription } from '@/components/utils/PageDescription'
import { ProjectItem } from '@/components/ui/ProjectItem'

const wrapper = {
  hide: {
    opacity: 1,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
}

const item = {
  hide: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

export function ProjectsContent() {
  return (
    <>
      <PageDescription
        title="Trabalho, hobby, conhecimento & open source."
        description="Sou fanático pela criação de novos projetos, pois é a maior chave para ganhar conhecimento. Nesta página você pode navegar para 8 sites na qual desenvolvi."
      />
      <motion.ul
        variants={wrapper}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.7, staggerChildren: 0.09 }}
        className="grid md:grid-cols-2 place-items-center gap-4"
      >
        {projects.map((props) => (
          <motion.li key={props.id} variants={item}>
            <ProjectItem {...props} />
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}
