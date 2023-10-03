'use client'

import { motion } from 'framer-motion'

const animation = {
  hide: {
    x: -8,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

export function Biography() {
  return (
    <motion.div
      initial="hide"
      animate="show"
      transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      className="leading-8 space-y-4"
    >
      <motion.p className="text-md text-foreground" variants={animation}>
        Meu nome é{' '}
        <span className="text-primary font-medium">Gustavo Rodrigues</span>, sou{' '}
        <span className="text-primary font-medium">Desenvolvedor Web</span> e
        estudante de{' '}
        <span className="text-primary font-medium">
          Técnico em Informática para Internet
        </span>
        .
      </motion.p>
      <motion.p className="text-md text-foreground" variants={animation}>
        Minha jornada no mundo digital é uma busca constante pela fusão perfeita
        entre{' '}
        <span className="text-primary font-medium">
          estética e funcionalidade
        </span>
        .
      </motion.p>
      <motion.p className="text-md text-foreground" variants={animation}>
        Adoro aprender novas tecnologias desde que descobri a programação.
        Atualmente desenvolvo minhas aplicações com{' '}
        <span className="text-primary font-medium">
          Next.js, React, TypeScript, JavaScript e Node.js
        </span>
        .
      </motion.p>
      <motion.p
        className="text-md text-foreground font-normal"
        variants={animation}
      >
        <span className="text-primary font-medium">
          Interfaces minimalistas
        </span>
        , dark mode e a tecnologia me encantam. Desfrutar de músicas é uma{' '}
        <span className="text-primary font-medium">terapia para mim</span>.
      </motion.p>
    </motion.div>
  )
}
