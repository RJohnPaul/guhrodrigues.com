import Image from "next/image";
import { useHooks } from "@/contexts/Provider";

import { cn } from "@/lib/utils";

import author from "@/assets/images/author.jpg";

const ExpandProfilePhoto = () => {
  const { isExpandPhotoVisible, setIsExpandPhotoVisible } = useHooks();

  const handleCloseExpandPhoto = () => {
    document.documentElement.style.overflow = "";

    setIsExpandPhotoVisible(false);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] h-screen w-full cursor-zoom-out bg-black/70 backdrop-blur-sm",
        {
          visible: isExpandPhotoVisible,
          invisible: !isExpandPhotoVisible,
        },
      )}
      onClick={handleCloseExpandPhoto}
    >
      <figure className="grid h-screen place-items-center px-8">
        <Image
          src={author}
          alt="Author"
          className={cn("rounded-xl duration-150", {
            "visible translate-y-0 opacity-100": isExpandPhotoVisible,
            "injhvisible translate-y-3 opacity-0": !isExpandPhotoVisible,
          })}
          width={600}
          height={600}
          quality={100}
        />
      </figure>
    </div>
  );
};

export { ExpandProfilePhoto };
