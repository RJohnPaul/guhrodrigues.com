"use client";

import NextImage from "next/image";

import { useState } from "react";

import { cn } from "@/lib/utils";

type ImageProps = React.ComponentPropsWithoutRef<typeof NextImage> & {
  zoomHover?: boolean;
  className?: string;
  lazy?: boolean;
};

const Image = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const { zoomHover, className, src, alt, lazy = true, ...rest } = props;

  return (
    <figure
      className={cn(
        "overflow-hidden",
        isLoading && "animate-pulse",
        zoomHover && "duration-500 ease-in-out hover:scale-105",
      )}
    >
      <NextImage
        className={cn(
          "transition-[scale,filter] duration-700",
          isLoading && "scale-[1.02] blur-xl grayscale",
          className,
        )}
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : undefined}
        priority={!lazy}
        quality={100}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </figure>
  );
};

export { Image };
