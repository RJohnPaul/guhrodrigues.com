import { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  ghost?: boolean;
};

export function Button({ ghost = false, className, ...props }: ButtonProps) {
  return (
    <button
      data-ghost={ghost}
      className={twMerge(
        "flex text-center justify-center items-center bg-primary text-black font-semibold py-3 px-4 text-sm gap-1 rounded-full hover:bg-primary/70 duration-300 data-[ghost=true]:bg-transparent data-[ghost=true]:text-neutral-400 data-[ghost=true]:hover:text-primary data-[ghost=true]:hover:bg-neutral-800",
        className
      )}
      {...props}
    />
  );
}
