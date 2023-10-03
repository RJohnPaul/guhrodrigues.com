'use client'

import { LazyMotion, domAnimation, motion } from 'framer-motion'

import { AnimateEnterProps } from '@/types'

export function AnimateEnter({ children, className }: AnimateEnterProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {children}
      </motion.div>
    </LazyMotion>
  )
}
