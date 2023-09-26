'use client'

import { m } from 'framer-motion'

import { projects } from '@/data/projects'

import { ProjectItem } from '@/components/ui/ProjectItem'
import { Title } from '@/components/utils/Title'
import { Typography } from '@/components/utils/Typography'

export function ProjectsContent() {
  return (
    <>
      <div className="mb-8 space-y-4">
        <Title variant="title">Trabalho, hobby & open source</Title>
        <Typography className="leading-loose">
          Sou fanático em criar{' '}
          <span className="text-primary font-medium">projetos pessoais</span>.
          Nesta página você pode navegar para{' '}
          <span className="text-primary font-medium">
            {projects.length} sites
          </span>{' '}
          na qual desenvolvi.
        </Typography>
      </div>
      <m.div
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
        className="grid md:grid-cols-2"
      >
        {projects.map((props) => (
          <ProjectItem key={props.id} {...props} />
        ))}
      </m.div>
    </>
  )
}
