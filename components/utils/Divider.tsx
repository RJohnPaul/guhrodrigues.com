import { twMerge } from 'tailwind-merge'

export function Divider({ className }: { className?: string }) {
  return (
    <div className={twMerge('w-full h-px bg-neutral-800 my-6', className)} />
  )
}
