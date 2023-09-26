import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'main'>

export function Container(props: ContainerProps) {
  return <main className="max-w-[910px] w-full mx-auto px-6" {...props} />
}
