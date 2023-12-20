import { twMerge } from "tailwind-merge";

type DividerProps = {
  className?: string;
};

const Divider = (props: DividerProps) => {
  const { className } = props;

  return (
    <div className={twMerge("my-6 h-px w-full bg-neutral-800", className)} />
  );
};

export { Divider };
