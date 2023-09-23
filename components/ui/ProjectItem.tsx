'use client'

import Image from 'next/image'
import { useState } from 'react'

import { motion } from 'framer-motion'

import { ProjectsProps } from '@/types'

import { Typography } from '@/components/utils/Typography'

const animation = {
  hide: {
    y: -8,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

export function ProjectItem({
  id,
  src,
  title,
  description,
  techs,
  visit,
}: ProjectsProps) {
  const [hovered, setHovered] = useState<string | number>('')

  const isHovered = hovered === id

  return (
    <motion.a
      href={visit}
      target="_blank"
      variants={animation}
      onHoverStart={() => setHovered(id)}
      onHoverEnd={() => setHovered('')}
      className="cursor-pointer"
    >
      <section className="relative flex flex-col rounded-xl">
        {isHovered && (
          <motion.div
            className="absolute rounded-xl bg-neutral-800 inset-0 z-[-1]"
            layoutId="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        <figure className="overflow-hidden rounded-t-xl px-2 mt-4">
          <Image
            src={src}
            className="max-w-[450px] w-full mx-auto max-h-[280px] h-full object-cover rounded-xl"
            alt={title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          />
        </figure>
        <div className="flex flex-col w-full py-4 px-5 space-y-5">
          <div className="flex flex-col justify-center space-y-2">
            <h3 className="font-bold text-xl text-primary">{title}</h3>
            <Typography size="sm">{description}</Typography>
          </div>
          <div className="flex pb-1 gap-3">
            {techs.map((tech, index) => (
              <Image
                key={index}
                src={tech}
                width={22}
                alt="Techs"
                className="grayscale hover:grayscale-0 duration-300"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
              />
            ))}
          </div>
        </div>
      </section>
    </motion.a>
  )
}
