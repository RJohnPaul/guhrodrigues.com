import { Title } from '@/components/utils/Title'
import { Metadata } from 'next'

import author from '@/assets/images/author.jpg'
import Image from 'next/image'
import { Biography } from '@/components/ui/Biography'
import { DownloadButton } from '@/components/ui/DownloadButton'
import { Divider } from '@/components/utils/Divider'
import { Stack } from '@/components/ui/Stack'
import { Toast } from '@/components/utils/Toast'
import { AnimateEnter } from '@/components/utils/AnimateEnter'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça um pouco de mim e das minhas paixões.',
}

export default function About() {
  return (
    <AnimateEnter className="max-w-[854px] py-8 lg:w-4/5 lg:py-0">
      <section>
        <Title variant="title">Sobre mim</Title>
        <div className="flex my-6 sm:flex-col md:flex-row lg:items-center justify-between gap-12">
          <figure className="md:order-2">
            <Image
              src={author}
              className="rounded-lg w-[400px] md:w-[1000px]"
              alt="Gustavo"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAACbCAYAAACu/xSHAAAAAXNSR0IArs4c6QAABDpJREFUeF7t1LEJACAQBEFtVjC0/0DBFjYdcz8Yjp17nTs8AgQIBIEpJEHPVwIEvoCQGAIBAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAlngAUxXXNDwFIdGAAAAAElFTkSuQmCC"
              priority
            />
          </figure>

          <Biography />
        </div>
        <div className="w-fit mb-6">
          <DownloadButton />
        </div>
      </section>
      <Divider />
      <Stack />

      <Toast />
    </AnimateEnter>
  )
}
