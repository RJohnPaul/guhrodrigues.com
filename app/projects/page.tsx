import { Metadata } from 'next'

import { AnimateEnter } from '@/components/utils/AnimateEnter'
import { ProjectsContent } from '@/components/content/ProjectsContent'

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Canto pessoal da internet, onde mostra todos os meus projetos.',
}

export default function Projects() {
  return (
    <article className="w-full py-20">
      <AnimateEnter className="py-9 mx-auto flex flex-col justify-center w-full">
        <ProjectsContent />
      </AnimateEnter>
    </article>
  )
}
