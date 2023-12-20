import { useHooks } from "@/contexts/Provider";

import { cn } from "@/lib/utils";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

const Tooltip = (props: TooltipProps) => {
  const { isVisible, setIsVisible } = useHooks();

  const { text, children } = props;

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
};

export { Tooltip };
