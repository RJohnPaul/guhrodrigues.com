import NextImage from "next/image";

export interface ImageProps
  extends React.ComponentPropsWithoutRef<typeof NextImage> {
  zoomHover?: boolean;
  className?: string;
  lazy?: boolean;
}
