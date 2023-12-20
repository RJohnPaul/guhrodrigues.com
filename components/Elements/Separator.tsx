import { twMerge } from "tailwind-merge";

type SeparatorProps = {
  className?: string;
};

const Separator = (props: SeparatorProps) => {
  const { className } = props;

  return <div className={twMerge("mx-1 h-4 w-px bg-neutral-800", className)} />;
};

export { Separator };
