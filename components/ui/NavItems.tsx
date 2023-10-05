'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

import Lottie from 'lottie-react'
import clsx from 'clsx'

import homeIcon from '@/assets/static/home.json'
import aboutIcon from '@/assets/static/about.json'
import projectsIcon from '@/assets/static/projects.json'
import contactIcon from '@/assets/static/contact.json'

export function NavItems() {
  const homeRef = useRef<any>()
  const aboutRef = useRef<any>()
  const projectsRef = useRef<any>()
  const contactRef = useRef<any>()

  const pathname = usePathname()

  return (
    <>
      <Link
        href="/"
        onMouseEnter={() => homeRef.current?.play()}
        onMouseLeave={() => homeRef.current?.stop()}
        className={clsx(
          'flex items-center gap-2 text-foreground hover:bg-neutral-800 px-2.5 py-2 rounded-lg duration-300',
          {
            'bg-neutral-800 text-primary': pathname === '/',
          },
        )}
      >
        <Lottie
          lottieRef={homeRef}
          animationData={homeIcon}
          style={{ width: 24, height: 24 }}
          autoplay={false}
          loop={false}
        />
        <span className="text-sm">Início</span>
      </Link>
      <Link
        href="/about"
        onMouseEnter={() => aboutRef.current?.play()}
        onMouseLeave={() => aboutRef.current?.stop()}
        className={clsx(
          'flex items-center gap-2 text-foreground hover:bg-neutral-800 px-2.5 py-2 rounded-lg duration-300',
          {
            'bg-neutral-800 text-primary': pathname === '/about',
          },
        )}
      >
        <Lottie
          lottieRef={aboutRef}
          animationData={aboutIcon}
          style={{ width: 24, height: 24 }}
          autoplay={false}
          loop={false}
        />
        <span className="text-sm">Sobre</span>
      </Link>
      <Link
        href="/projects"
        onMouseEnter={() => projectsRef.current?.play()}
        onMouseLeave={() => projectsRef.current?.stop()}
        className={clsx(
          'flex items-center gap-2 text-foreground hover:bg-neutral-800 px-2.5 py-2 rounded-lg duration-300',
          {
            'bg-neutral-800 text-primary': pathname === '/projects',
          },
        )}
      >
        <Lottie
          lottieRef={projectsRef}
          animationData={projectsIcon}
          style={{ width: 24, height: 24 }}
          autoplay={false}
          loop={false}
        />
        <span className="text-sm">Projetos</span>
      </Link>
      <Link
        href="/contact"
        onMouseEnter={() => contactRef.current?.play()}
        onMouseLeave={() => contactRef.current?.stop()}
        className={clsx(
          'flex items-center gap-2 text-foreground hover:bg-neutral-800 px-2.5 py-2 rounded-lg duration-300',
          {
            'bg-neutral-800 text-primary': pathname === '/contact',
          },
        )}
      >
        <Lottie
          lottieRef={contactRef}
          animationData={contactIcon}
          style={{ width: 24, height: 24 }}
          autoplay={false}
          loop={false}
        />
        <span className="text-sm">Contato</span>
      </Link>
    </>
  )
}
