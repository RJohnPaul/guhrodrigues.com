'use client'

import Link from 'next/link'
import { useRef } from 'react'
import Lottie from 'lottie-react'

import { projects } from '@/data/projects'

import arrowIcon from '@/assets/static/arrow.json'

import { Title } from '@/components/utils/Title'
import { ProjectItem } from './ProjectItem'

export function LatestProjects() {
  const arrowRef = useRef<any>()

  return (
    <>
      <div className="flex items-center justify-between">
        <Title variant="title" size="xl">
          Projetos recentes
        </Title>
        <Link
          href="/projects"
          className="flex items-center gap-1 text-foreground text-xs font-medium hover:text-primary duration-300"
          onMouseEnter={() => arrowRef.current?.play()}
          onMouseLeave={() => arrowRef.current?.stop()}
        >
          <span>Ver todos</span>
          <Lottie
            lottieRef={arrowRef}
            animationData={arrowIcon}
            style={{ width: 18, height: 18 }}
            autoplay={false}
            loop={false}
          />
        </Link>
      </div>
      <ul className="grid md:grid-cols-2 place-items-center gap-4 mt-6">
        {projects.slice(0, 2).map((props) => (
          <li key={props.id}>
            <ProjectItem {...props} />
          </li>
        ))}
      </ul>
    </>
  )
}
