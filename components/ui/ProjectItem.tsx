'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { ProjectsProps } from '@/types'

import { Typography } from '@/components/utils/Typography'

export function ProjectItem({
  src,
  title,
  description,
  techs,
  visit,
}: ProjectsProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  return (
    <Link
      href={visit}
      target="_blank"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect()

        mouseX.set(e.clientX - left)
        mouseY.set(e.clientY - top)
      }}
      className="group relative flex flex-col items-center rounded-xl border border-zinc-800 p-2"
    >
      <div className="absolute top-0 right-5 w-80 h-px bg-gradient-to-l from-transparent via-primary/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative flex flex-col">
        <figure>
          <Image
            src={src}
            className="max-w-[1024px] w-full max-h-[280px] h-full object-cover rounded-md"
            alt={title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAACbCAYAAACu/xSHAAAAAXNSR0IArs4c6QAABDpJREFUeF7t1LEJACAQBEFtVjC0/0DBFjYdcz8Yjp17nTs8AgQIBIEpJEHPVwIEvoCQGAIBAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAlngAUxXXNDwFIdGAAAAAElFTkSuQmCC"
          />
        </figure>
        <div className="flex flex-col w-full py-4 px-3 space-y-4">
          <div className="flex flex-col justify-center space-y-2">
            <h3 className="text-xl text-primary font-title">{title}</h3>
            <Typography
              size="sm"
              className="max-w-[420px] w-full leading-[1.8]"
            >
              {description}
            </Typography>
          </div>
          <div className="flex flex-wrap gap-3 pb-3">
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
      </div>
    </Link>
  )
}
