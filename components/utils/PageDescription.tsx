import { Title } from './Title'
import { Typography } from './Typography'

import { PageDescriptionProps } from '@/types'

export function PageDescription({ title, description }: PageDescriptionProps) {
  return (
    <div className="mb-8 space-y-4 max-w-3xl w-full">
      <Title variant="title">{title}</Title>
      <Typography className="leading-[1.8]">{description}</Typography>
    </div>
  )
}
