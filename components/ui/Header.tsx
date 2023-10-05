import Link from 'next/link'

import { MobileHeaderImage } from './MobileHeaderImage'
import { DesktopHeaderImage } from './DesktopHeaderImage'
import { Title } from '@/components/utils/Title'
import { Typography } from '@/components/utils/Typography'
import { NavItems } from './NavItems'
import { Divider } from '@/components/utils/Divider'
import { Clock } from '@/components/utils/Clock'
import { MobileButton } from './MobileButton'
import { MenuBar } from './MenuBar'

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-20 lg:h-auto lg:py-8 flex self-start lg:flex-col w-full lg:max-w-[230px] lg:w-1/2 bg-background lg:bg-transparent">
      <div className="flex items-center lg:items-start gap-2 lg:gap-0.5 lg:flex-col w-full">
        <MobileHeaderImage />

        <DesktopHeaderImage />
        <div className="hidden lg:block">
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
              className="text-sm hover:text-foreground duration-300"
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

      <div className="hidden lg:flex justify-between items-center gap-2">
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
