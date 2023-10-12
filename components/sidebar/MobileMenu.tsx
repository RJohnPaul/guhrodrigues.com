'use client'

import Link from 'next/link'

import clsx from 'clsx'

import { useHooks } from '@/context/Provider'
import { useMenuAnimation } from '@/hooks/menuAnimation'

import { navLinks } from '@/data/mobile-menu'

export function MobileMenu() {
  const { showMenu, setShowMenu } = useHooks()

  const scope = useMenuAnimation(showMenu)

  const handleCloseMenu = () => {
    setShowMenu(false)

    document.documentElement.style.overflow = ''
    document.documentElement.style.paddingRight = ''
  }

  return (
    <div
      className={clsx(
        'fixed right-0 z-50 w-32 mx-9 p-1 my-[70px] flex flex-col bg-background border border-neutral-800 rounded-lg duration-300',
        {
          'top-0 visible opacity-100 scale-100': showMenu,
          'invisible opacity-0 scale-50': !showMenu,
        },
      )}
      ref={scope}
    >
      <ul
        className={`${
          showMenu ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {navLinks.map(({ id, path, icon, name }) => (
          <Link
            key={id}
            href={path}
            className="px-2 py-2.5 flex items-center gap-4 text-sm text-primary"
            onClick={handleCloseMenu}
          >
            <span>{icon}</span>

            {name}
          </Link>
        ))}
      </ul>
    </div>
  )
}
