import { ComponentProps } from "react";

import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex text-center justify-center gap-1.5 items-center py-3 px-4 text-sm font-semibold duration-300",
  variants: {
    variant: {
      default: "bg-primary text-black text-sm hover:bg-primary/70",
      ghost: "text-neutral-400 hover:text-primary hover:bg-neutral-800",
      dark: "text-primary bg-gradient-to-br from-black via-black to-zinc-700 border border-zinc-700",
      muted: "text-neutral-400",
    },
    size: {
      default: "rounded-lg",
      rounded: "rounded-full",
      lg: "rounded-lg p-0",
      icon: "rounded-full p-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button className={button({ variant, size, className })} {...props} />;
}
