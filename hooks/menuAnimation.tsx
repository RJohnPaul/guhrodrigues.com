'use client'

import { useEffect } from 'react'

import { useAnimate, stagger } from 'framer-motion'

export function useMenuAnimation(showMenu: boolean) {
  const [scope, animate] = useAnimate()

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

  useEffect(() => {
    animate(
      'ul',
      {
        clipPath: showMenu
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    )

    animate(
      'a',
      showMenu
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(5px)' },
      {
        duration: 0.2,
        delay: showMenu ? staggerMenuItems : 0,
      },
    )
  }, [showMenu, animate, staggerMenuItems])

  return scope
}
