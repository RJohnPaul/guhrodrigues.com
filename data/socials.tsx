import { Github, Linkedin, Instagram } from 'lucide-react'

import { SocialsProps } from '@/types'

export const socials: SocialsProps[] = [
  {
    id: 1,
    href: 'https://github.com/guhrodriguess',
    name: 'GitHub',
    icon: <Github size={16} />,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/guhrodrigues',
    name: 'LinkedIn',
    icon: <Linkedin size={16} />,
  },
  {
    id: 3,
    href: 'https://www.instagram.com/guhrdss',
    name: 'Instagram',
    icon: <Instagram size={16} />,
  },
]
