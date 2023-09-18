import { useState } from "react";

import { TooltipProps } from "@/types";
import { Globe } from "lucide-react";

export function Tooltip({ children, text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative select-none"
    >
      <div
        className={`-top-9 absolute w-[140px] flex items-center gap-1.5 bg-background border border-neutral-800 text-foreground font-medium rounded-lg text-xs py-1.5 px-2 -right-3 xl:-right-10 xl:-translate-x-0.5 duration-150 ${
          isVisible
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-50"
        }`}
      >
        <span className="text-emerald-600">
          <Globe size={14} />
        </span>
        <span>{text}</span>
      </div>

      {children}
    </div>
  );
}
