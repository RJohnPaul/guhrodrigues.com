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

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-20 lg:h-auto flex self-start lg:flex-col w-full lg:max-w-[230px] lg:w-1/2 bg-background lg:bg-transparent">
      <div className="flex items-center lg:items-start gap-2 lg:gap-0.5 lg:flex-col w-full">
        <div className="group p-2 lg:p-5 my-2 rounded-full overflow-hidden border bg-background border-neutral-800">
          <Image
            src={logo}
            alt="Gustavo"
            className="w-5 lg:w-10 scale-100 group-hover:scale-105 ease-in-out duration-300"
          />
        </div>
        <div>
          <Title variant="title" size="xl" className="hidden md:block">
            Gustavo Rodrigues
          </Title>
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
        <Clock />

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
      </div>

      <MobileButton />
      <MenuBar />
    </header>
  )
}
