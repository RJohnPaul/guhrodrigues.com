'use client'

import { Equal, X } from 'lucide-react'

import { useHooks } from '@/context/Provider'

export function MobileButton() {
  const { showMenu, setShowMenu } = useHooks()

  const handleMenu = () => {
    setShowMenu((prevstate) => !prevstate)

    if (!showMenu) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }

  return (
    <button
      onClick={handleMenu}
      className="text-neutral-400 active:scale-75 transition-transform lg:hidden"
    >
      {showMenu ? <X size={28} /> : <Equal size={28} />}
    </button>
  )
}
