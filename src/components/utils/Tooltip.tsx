import { useState } from "react";

import { TooltipProps } from "@/types";

export function Tooltip({ children, text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative select-none"
    >
      <div
        className={`-top-9 absolute w-[83px] bg-background border border-neutral-800 text-foreground font-medium rounded-lg text-xs py-1.5 px-2 -right-3 lg:-right-4 lg:-translate-x-0.5 duration-150 ${
          isVisible
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-50"
        }`}
      >
        {text}
      </div>

      {children}
    </div>
  );
}
