import { ComponentProps } from "react";

import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex text-center justify-center gap-1.5 items-center py-3 px-4 text-sm font-semibold duration-300",
  variants: {
    variant: {
      default: "bg-primary text-black text-sm hover:bg-primary/70",
      ghost:
        "text-neutral-400 border border-transparent hover:text-primary/70 hover:bg-muted hover:border-border",
      dark: "font-medium text-secondary/80 bg-transparent border border-border/50 hover:bg-neutral-950 duration-300",
      muted: "text-neutral-400",
    },
    size: {
      default: "rounded-lg",
      lg: "p-3 rounded-lg",
      icon: "w-8 h-8 p-0 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return <button className={button({ variant, size, className })} {...props} />;
};

export { Button };
