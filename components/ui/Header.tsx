'use client'

import Image from 'next/image'

import logo from '@/assets/images/logo.svg'

import { Title } from '@/components/utils/Title'
import { Typography } from '@/components/utils/Typography'
import { NavItems } from './NavItems'
import { Divider } from '@/components/utils/Divider'
import { Clock } from '@/components/utils/Clock'
import { MobileButton } from './MobileButton'
import { MenuBar } from './MenuBar'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-20 lg:h-auto flex self-start lg:flex-col w-full lg:max-w-[230px] lg:w-1/2 bg-background lg:bg-transparent">
      <div className="flex items-center lg:items-start gap-2 lg:gap-0.5 lg:flex-col w-full">
        <div className="group relative p-2 lg:p-5 my-2 rounded-full border bg-background border-neutral-800">
          <div className="overflow-hidden">
            <Image
              src={logo}
              alt="Gustavo"
              className="w-5 lg:w-10 scale-100 group-hover:scale-105 ease-in-out duration-300"
            />
          </div>
          <div className="hidden lg:block absolute w-4 h-4 rounded-full bg-emerald-600 bottom-1 right-1">
            <div className="absolute z-[11] w-4 h-4 rounded-full bg-emerald-600 bottom-0 -right-0 animate-ping transition-[4s]" />
          </div>
        </div>
        <div>
          <Link href="/">
            <Title variant="title" className="text-md lg:text-xl">
              Gustavo Rodrigues
            </Title>
          </Link>
          <a
            href="https://github.com/guhrodriguess"
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              variant="muted"
              className="hidden lg:block text-sm hover:text-foreground duration-300"
            >
              @guhrodriguess
            </Typography>
          </a>
        </div>
        <div className="mt-3 mb-1 hidden lg:block">
          <Typography className="hidden lg:block text-sm">
            Desenvolvedor Web
          </Typography>
        </div>
      </div>
      <Divider className="hidden lg:block" />
      <nav className="hidden lg:flex flex-col gap-1">
        <NavItems />
      </nav>

      <Divider className="hidden lg:block" />

      <div className="hidden lg:block space-y-2">
        <Typography variant="muted" className="text-xs font-medium">
          © {new Date().getFullYear()} —{' '}
          <a
            href="https://github.com/guhrodriguess/guhrodrigues.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:text-foreground duration-300">
              Gustavo Rodrigues
            </span>
          </a>
        </Typography>

        <Clock />
      </div>

      <MobileButton />
      <MenuBar />
    </header>
  )
}
