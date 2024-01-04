import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import Lottie from "lottie-react";

import { cn } from "@/lib/utils";

import homeIcon from "@/assets/icons/home.json";
import aboutIcon from "@/assets/icons/about.json";
import projectsIcon from "@/assets/icons/projects.json";
import contactIcon from "@/assets/icons/contact.json";

const Navigation = () => {
  const homeRef = useRef<any>();
  const aboutRef = useRef<any>();
  const projectsRef = useRef<any>();
  const contactRef = useRef<any>();

  const pathname = usePathname();

  const actions = [
    {
      href: "/",
      ref: homeRef,
      icon: homeIcon,
      name: "Início",
    },
    {
      href: "/about",
      ref: aboutRef,
      icon: aboutIcon,
      name: "Sobre",
    },
    {
      href: "/projects",
      ref: projectsRef,
      icon: projectsIcon,
      name: "Projetos",
    },
    {
      href: "/contact",
      ref: contactRef,
      icon: contactIcon,
      name: "Contato",
    },
  ];

  return (
    <nav className="hidden flex-col gap-1 lg:flex">
      {actions.map(({ href, ref, icon, name }) => (
        <Link
          key={name}
          href={href}
          onMouseEnter={() => ref.current?.play()}
          onMouseLeave={() => ref.current?.stop()}
          className={cn(
            "flex items-center gap-2 rounded-lg border border-transparent px-2.5 py-2 text-foreground duration-300 hover:bg-muted",
            {
              "border-border/50 bg-muted text-primary/80": href === pathname,
            },
          )}
        >
          <Lottie
            lottieRef={ref}
            animationData={icon}
            style={{ width: 24, height: 24 }}
            autoplay={false}
            loop={false}
          />
          <span className="text-sm">{name}</span>
        </Link>
      ))}
    </nav>
  );
};

export { Navigation };
