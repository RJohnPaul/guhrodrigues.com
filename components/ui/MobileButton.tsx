'use client'

import { Equal, X } from 'lucide-react'

import { useHooks } from '@/context/Provider'

import { Button } from '@/components/utils/Button'

export function MobileButton() {
  const { showMenu, setShowMenu } = useHooks()

  const handleMenu = () => {
    setShowMenu((prevstate) => !prevstate)

    if (!showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <Button
      onClick={handleMenu}
      variant="muted"
      size="lg"
      className="md:hidden transition-transform active:scale-75"
    >
      {showMenu ? <X size={26} /> : <Equal size={26} />}
    </Button>
  )
}
