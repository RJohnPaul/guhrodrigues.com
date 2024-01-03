import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: React.ReactNode;
  isReverse?: boolean;
};

const InfiniteSlider = ({
  children,
  isReverse = false,
}: InfiniteSliderProps) => {
  return (
    <div
      className={cn("animate-slide flex w-fit", {
        "direction-reverse": isReverse,
        "direction-normal": !isReverse,
      })}
    >
      {children}
    </div>
  );
};

export { InfiniteSlider };
