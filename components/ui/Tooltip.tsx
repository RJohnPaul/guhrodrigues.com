import { useHooks } from "@/context/Provider";

import { TooltipProps } from "@/types/tooltip";

import { cn } from "@/lib/utils";

export function Tooltip({ children, text }: TooltipProps) {
  const { isVisible, setIsVisible } = useHooks();

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative select-none"
    >
      <div
        className={cn(
          "absolute -bottom-9 right-0 flex w-[7.5rem] items-center justify-center rounded-lg border border-neutral-800 bg-background px-2 py-1 text-xs font-medium text-foreground duration-150",
          {
            "visible scale-100 opacity-100": isVisible,
            "invisible scale-50 opacity-0": !isVisible,
          },
        )}
      >
        <span>{text}</span>
      </div>

      {children}
    </div>
  );
}
