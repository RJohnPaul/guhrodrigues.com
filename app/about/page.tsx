import { Metadata } from 'next'

import { Toast } from '@/components/utils/Toast'

import { AnimateEnter } from '@/components/utils/AnimateEnter'
import { AboutContent } from '@/components/content/AboutContent'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça um pouco de mim e das minhas paixões.',
}

export default function About() {
  return (
    <>
      <article className="w-full sm:h-full md:min-h-[calc(100vh_-_85px)] flex items-center py-20">
        <AnimateEnter className="w-full m-auto py-8">
          <AboutContent />
        </AnimateEnter>
      </article>

      <Toast />
    </>
  )
}
