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
        className={`absolute right-0 -bottom-9 w-28 flex items-center justify-center bg-background border border-neutral-800 text-foreground font-medium rounded-lg text-xs py-1 px-2 duration-150 ${
          isVisible
            ? 'visible opacity-100 scale-100'
            : 'invisible opacity-0 scale-50'
        }`}
      >
        <span>{text}</span>
      </div>

      {children}
    </div>
  )
}
