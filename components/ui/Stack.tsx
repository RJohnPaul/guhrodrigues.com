import Image from 'next/image'

import { Code2 } from 'lucide-react'

import { stack } from '@/data/stack'

import { Title } from '@/components/utils/Title'
import { Typography } from '@/components/utils/Typography'

export function Stack() {
  return (
    <section>
      <div className="space-y-2">
        <Title variant="title" size="xl" className="flex items-center gap-2">
          <Code2 size={18} />
          Habilidades
        </Title>
        <Typography>Meu conhecimento técnico.</Typography>
      </div>
      <div className="flex flex-wrap items-center gap-3 mt-4">
        {stack.map(({ id, src, name }) => (
          <Image
            key={id}
            src={src}
            width={30}
            className="grayscale hover:grayscale-0 duration-300"
            alt={name}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAACbCAYAAACu/xSHAAAAAXNSR0IArs4c6QAABDpJREFUeF7t1LEJACAQBEFtVjC0/0DBFjYdcz8Yjp17nTs8AgQIBIEpJEHPVwIEvoCQGAIBAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAllASDKhAwQICIkNECCQBYQkEzpAgICQ2AABAlngAUxXXNDwFIdGAAAAAElFTkSuQmCC"
          />
        ))}
      </div>
    </section>
  )
}
