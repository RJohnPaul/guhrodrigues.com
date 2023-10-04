import clsx from 'clsx'

export function Divider({ className }: { className?: string }) {
  return <div className={clsx('w-full h-px bg-neutral-800 my-3', className)} />
}
