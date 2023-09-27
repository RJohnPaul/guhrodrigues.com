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
      className="cursor-pointer select-auto"
    >
      <section className="relative flex flex-col rounded-xl px-7">
        {isHovered && (
          <motion.div
            className="absolute rounded-xl bg-neutral-800 inset-0 z-[-1]"
            layoutId="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        <figure className="overflow-hidden rounded-t-xl mt-4">
          <Image
            src={src}
            className="max-w-[400px] w-full md:mx-auto max-h-[200px] h-full object-cover rounded-xl"
            alt={title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAACbCAYAAACu/xSHAAAAAXNSR0IArs4c6QAABDpJREFUeF7t1LEJACAQBEFtVjC0/0DBFjYdcz8Yjp17nTs8AgQIBIEpJEHPVwIEvoCQGAIBAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAlngAUxXXNDwFIdGAAAAAElFTkSuQmCC"
          />
        </figure>
        <div className="flex flex-col w-full py-4 space-y-4">
          <div className="flex flex-col justify-center space-y-2">
            <h3 className="font-bold text-xl text-primary">{title}</h3>
            <Typography
              size="sm"
              className="max-w-[420px] w-full leading-loose"
            >
              {description}
            </Typography>
          </div>
          <div className="flex pb-3 gap-3">
            {techs.map((tech, index) => (
              <Image
                key={index}
                src={tech}
                width={22}
                alt="Techs"
                className="grayscale"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAACbCAYAAACu/xSHAAAAAXNSR0IArs4c6QAABDpJREFUeF7t1LEJACAQBEFtVjC0/0DBFjYdcz8Yjp17nTs8AgQIBIEpJEHPVwIEvoCQGAIBAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAlngAUxXXNDwFIdGAAAAAElFTkSuQmCC"
              />
            ))}
          </div>
        </div>
      </section>
    </motion.a>
  )
}
