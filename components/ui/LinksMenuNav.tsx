import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'
import clsx from 'clsx'

import { useHooks } from '@/context/Provider'
import { navLinks } from '@/data/header'

export function LinksMenuNav() {
  const pathname = usePathname()
  const { hovered, setHovered } = useHooks()

  return (
    <ul className="sm:hidden md:flex">
      {navLinks.map(({ id, name, path }) => {
        const isActive = path === pathname
        const isHovered = hovered === path

        return (
          <li key={id}>
            <Link
              href={path}
              className={clsx('text-sm', {
                'text-primary font-medium': isActive,
                'text-neutral-400': !isActive,
              })}
            >
              <motion.span
                onHoverStart={() => setHovered(path)}
                onHoverEnd={() => setHovered('')}
                className="relative px-3 py-2"
              >
                {isHovered && (
                  <motion.span
                    className="absolute rounded-lg bg-neutral-800 inset-0 z-[-1]"
                    layoutId="nav"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                {name}
              </motion.span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
