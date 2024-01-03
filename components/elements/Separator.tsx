import { twMerge } from "tailwind-merge";

type SeparatorProps = {
  className?: string;
};

const Separator = (props: SeparatorProps) => {
  const { className } = props;

  return <div className={twMerge("bg-divider mx-1 h-4 w-px", className)} />;
};

export { Separator };
