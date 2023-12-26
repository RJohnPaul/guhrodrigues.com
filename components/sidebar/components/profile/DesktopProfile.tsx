import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import author from "@/assets/images/author.jpg";

import { Title } from "@/components/elements/Title";
import { Typography } from "@/components/elements/Typography";
import { Image } from "@/components/elements/Image";

const DesktopProfile = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cn("-ml-1 mb-2 duration-500 ease-in-out max-lg:hidden", {
          "scale-90": isScrolled,
          "scale-100": !isScrolled,
        })}
      >
        <div className="h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image src={author} alt="Gustavo" zoomHover={true} />
        </div>
      </div>
      <div className="hidden lg:block">
        <Title variant="title" className="text-md lg:text-xl">
          Gustavo Rodrigues
        </Title>
        <a
          href="https://github.com/guhrodriguess"
          target="_blank"
          rel="noreferrer"
          className="block w-fit"
        >
          <Typography
            variant="muted"
            className="select-none text-sm duration-300 hover:text-foreground"
          >
            @guhrodriguess
          </Typography>
        </a>
      </div>
      <div className="mb-1 mt-3 flex items-center gap-2 max-lg:hidden">
        <div>
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-600">
            <div className="z-[11] h-2.5 w-2.5 animate-ping rounded-full bg-emerald-600 transition-[4s]" />
          </div>
        </div>
        <Typography size="sm" variant="muted" className="font-mono">
          disponível para contratação
        </Typography>
      </div>
    </>
  );
};

export { DesktopProfile };
