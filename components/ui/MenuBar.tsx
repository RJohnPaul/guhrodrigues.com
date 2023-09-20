'use client'

import Link from 'next/link'

import { useHooks } from '@/context/Provider'
import { useMenuAnimation } from '@/hooks/menuAnimation'

import { navLinks } from '@/data/header'

export function MenuBar() {
  const { showMenu, setShowMenu } = useHooks()

  const scope = useMenuAnimation(showMenu)

  const handleCloseMenu = () => {
    setShowMenu(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div
      className={`fixed right-0 z-50 w-32 mx-6 p-1 my-[70px] flex flex-col bg-background border border-neutral-800 rounded-lg duration-300 ${
        showMenu
          ? 'top-0 visible opacity-100 scale-100'
          : 'invisible opacity-0 scale-50'
      }`}
      ref={scope}
    >
      <ul
        style={{
          pointerEvents: showMenu ? 'auto' : 'none',
        }}
      >
        {navLinks.map((props) => (
          <Link
            key={props.id}
            href={props.path}
            className="px-2 py-2.5 flex items-center gap-4 text-sm text-primary"
            onClick={handleCloseMenu}
          >
            <span>{props.icon}</span>

            {props.name}
          </Link>
        ))}
      </ul>
    </div>
  )
}
