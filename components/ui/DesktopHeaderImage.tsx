'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import clsx from 'clsx'

import logo from '@/assets/images/logo.svg'

export function DesktopHeaderImage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY

      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={clsx(
        'hidden lg:block group relative p-5 mb-2 -ml-1 rounded-full border bg-background border-neutral-800 ease-in-out duration-500',
        {
          'scale-90': isScrolled,
          'scale-100': !isScrolled,
        },
      )}
    >
      <div className="overflow-hidden">
        <Image
          src={logo}
          alt="Gustavo"
          className="w-9 scale-100 group-hover:scale-105 ease-in-out duration-300"
        />
      </div>
      <div className="absolute w-4 h-4 rounded-full bg-emerald-600 bottom-1 right-1">
        <div className="absolute z-[11] w-4 h-4 rounded-full bg-emerald-600 bottom-0 -right-0 animate-ping transition-[4s]" />
      </div>
    </div>
  )
}
