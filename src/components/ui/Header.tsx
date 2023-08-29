import { useHandleScroll } from "@/hooks/handleScroll";

import LinksMenuNav from "./LinksMenuNav";
import MobileButton from "./MobileButton";

import logo from "@/assets/images/logo.svg";

export default function Header() {
	const { visible } = useHandleScroll();

  return (
    <header
      className={`flex w-full h-[70px] z-50 fixed bg-background ${
        visible ? "md:top-0" : "md:-top-20"
      } top-0 duration-500`}
    >
      <nav className="max-w-5xl w-full mx-auto px-6 justify-between flex items-center">
        <img src={logo} width={25} loading="lazy" alt="Logo" />

        <LinksMenuNav />

        <MobileButton />
      </nav>
    </header>
  );
}
