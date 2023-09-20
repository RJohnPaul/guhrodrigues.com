'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useHandleScroll } from '@/hooks/handleScroll'

import logo from '@/assets/images/logo.svg'

import { MenuBar } from './MenuBar'
import { LinksMenuNav } from './LinksMenuNav'
import { MobileButton } from './MobileButton'

export function Header() {
  const { visible } = useHandleScroll()

  return (
    <header
      className={`flex w-full h-[70px] z-50 fixed bg-background ${
        visible ? 'md:top-0' : 'md:-top-20'
      } top-0 duration-500`}
    >
      <nav className="max-w-5xl w-full mx-auto px-6 justify-between flex items-center">
        <Link href="/">
          <Image src={logo} width={25} alt="Logo" />
        </Link>

        <LinksMenuNav />

        <MobileButton />
      </nav>

      <MenuBar />
    </header>
  )
}
