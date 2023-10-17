import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/logo.svg";

import { MobileButton } from "../MobileButton";

export function MobileProfile() {
  return (
    <>
      <Link href="/">
        <div className="my-2 rounded-full border border-neutral-800 bg-background p-3 lg:hidden">
          <Image
            src={logo}
            alt="Gustavo"
            className="w-5 scale-100 duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </Link>
      <MobileButton />
    </>
  );
}
