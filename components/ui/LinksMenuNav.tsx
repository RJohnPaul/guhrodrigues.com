import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks } from '@/data/header'

import clsx from 'clsx'

export function LinksMenuNav() {
  const pathname = usePathname()

  return (
    <ul className="sm:hidden md:flex items-center gap-4 md:gap-2 top-0 p-6 md:p-0 duration-300">
      {navLinks.map((props) => {
        const isActive = props.path === pathname

        return (
          <li key={props.id} className="text-sm font-medium">
            <Link
              href={props.path}
              className={clsx('py-2 px-3 rounded-md duration-300', {
                'text-primary bg-neutral-800': isActive,
                'text-neutral-400 hover:text-primary hover:bg-neutral-900':
                  !isActive,
              })}
            >
              {props.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
