"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import clsx from "clsx";

import logo from "@/assets/images/logo.svg";

import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";

export function DesktopProfile() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={clsx(
          "group relative -ml-1 mb-2 hidden rounded-full border border-neutral-800 bg-background p-5 duration-500 ease-in-out lg:block",
          {
            "scale-90": isScrolled,
            "scale-100": !isScrolled,
          },
        )}
      >
        <div className="overflow-hidden">
          <Image
            src={logo}
            alt="Gustavo"
            className="w-9 scale-100 duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-600">
          <div className="absolute -right-0 bottom-0 z-[11] h-4 w-4 animate-ping rounded-full bg-emerald-600 transition-[4s]" />
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
            className="text-sm duration-300 hover:text-foreground"
          >
            @guhrodriguess
          </Typography>
        </a>
      </div>
      <div className="mb-1 mt-3 hidden lg:block">
        <Typography className="hidden text-sm lg:block">
          Desenvolvedor Web
        </Typography>
      </div>
    </>
  );
}
