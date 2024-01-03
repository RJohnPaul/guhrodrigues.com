import { twMerge } from "tailwind-merge";

type DividerProps = {
  className?: string;
};

const Divider = (props: DividerProps) => {
  const { className } = props;

  return <div className={twMerge("bg-divider my-6 h-px w-full", className)} />;
};

export { Divider };
