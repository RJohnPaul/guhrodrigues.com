import { Globe } from 'lucide-react'

import { useHooks } from '@/context/Provider'

import { TooltipProps } from '@/types'

export function Tooltip({ children, text }: TooltipProps) {
  const { isVisible, setIsVisible } = useHooks()

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative select-none w-fit"
    >
      <div
        className={`left-16 -top-1 absolute w-[140px] flex items-center justify-center gap-1.5 bg-background border border-neutral-800 text-foreground font-medium rounded-lg text-xs p-1 duration-150 ${
          isVisible
            ? 'visible opacity-100 scale-100'
            : 'invisible opacity-0 scale-50'
        }`}
      >
        <span className="text-emerald-600">
          <Globe size={12} />
        </span>
        <span>{text}</span>
      </div>

      {children}
    </div>
  )
}
