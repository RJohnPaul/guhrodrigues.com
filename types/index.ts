import { StaticImageData } from 'next/image'

export interface ContextProps {
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  submitting: boolean
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface NavLinksProps {
  id: number
  path: string
  name: string
  icon: JSX.Element
}

export interface ProjectsProps {
  id: number
  src: StaticImageData
  title: string
  description: string
  techs: string[]
  visit: string
}

export interface SocialsProps {
  id: number
  href: string
  name?: string
  icon?: JSX.Element
}

export interface AnimateEnterProps {
  children: React.ReactNode
  className?: string
}

export interface TooltipProps {
  text: string
  children: React.ReactNode
}

export interface SendEmailProps {
  message: string
  email: string
  name: string
}
