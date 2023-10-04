'use client'

import { LazyMotion, domAnimation, motion } from 'framer-motion'

import { AnimateEnterProps } from '@/types'

const animation = {
  hide: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

export function AnimateEnter({ children }: AnimateEnterProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.main
        className="max-w-[854px] py-8 lg:w-4/5 lg:py-0"
        initial="hide"
        animate="show"
        variants={animation}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </LazyMotion>
  )
}
