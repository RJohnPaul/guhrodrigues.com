import { ComponentProps } from "react";

type ContainerProps = ComponentProps<"main">;

export function Container({ ...props }: ContainerProps) {
  return <main className="max-w-5xl w-full mx-auto px-6" {...props} />;
}
