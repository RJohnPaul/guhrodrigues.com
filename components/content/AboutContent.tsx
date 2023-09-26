import Image from 'next/image'

import author from '@/assets/images/author.jpeg'

import { Title } from '@/components/utils/Title'
import { Biography } from '@/components/utils/Biography'
import { DownloadButton } from '@/components/ui/DownloadButton'

export function AboutContent() {
  return (
    <>
      <div className="mb-8">
        <Title variant="title">Sobre mim</Title>
      </div>
      <div className="flex sm:flex-col lg:flex-row justify-between gap-12">
        <figure className="lg:order-2">
          <Image
            src={author}
            className="rounded-lg max-w-full max-h-full"
            alt="Gustavo"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </figure>
        <div className="flex items-start flex-col gap-4 px-1 lg:px-0">
          <Biography />

          <DownloadButton />
        </div>
      </div>
    </>
  )
}
