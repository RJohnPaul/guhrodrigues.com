import { Globe } from 'lucide-react'

import { useHooks } from '@/context/Provider'

import { TooltipProps } from '@/types'

export function Tooltip({ children, text }: TooltipProps) {
  const { isVisible, setIsVisible } = useHooks()

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative select-none"
    >
      <div
        className={`-top-9 -right-3 xl:-right-11 xl:-translate-x-6 absolute w-[100px] flex items-center gap-1.5 bg-background border border-neutral-800 text-foreground font-medium rounded-lg text-xs py-1.5 px-2 duration-150 ${
          isVisible
            ? 'visible opacity-100 scale-100'
            : 'invisible opacity-0 scale-50'
        }`}
      >
        <span className="text-emerald-600">
          <Globe size={14} />
        </span>
        <span>{text}</span>
      </div>

      {children}
    </div>
  )
}
