'use client'

import { useEffect } from 'react'
import { useHooks } from '@/context/Provider'

export function useHandleScroll() {
  const { position, visible, setVisible, setPosition } = useHooks()

  useEffect(() => {
    const handleScroll = () => {
      const scrolling = window.scrollY

      setVisible(position > scrolling)
      setPosition(scrolling)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [position, setPosition, setVisible])

  return { visible }
}
