import { useHooks } from "@/context/Provider";

import { TooltipProps } from "@/types";

export function Tooltip({ children, text }: TooltipProps) {
  const { isVisible, setIsVisible } = useHooks();

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative select-none"
    >
      <div
        className={`absolute -bottom-9 right-0 flex w-[7.5rem] items-center justify-center rounded-lg border border-neutral-800 bg-background px-2 py-1 text-xs font-medium text-foreground duration-150 ${
          isVisible
            ? "visible scale-100 opacity-100"
            : "invisible scale-50 opacity-0"
        }`}
      >
        <span>{text}</span>
      </div>

      {children}
    </div>
  );
}
