import Link from "next/link";
import Image from "next/image";

import author from "@/assets/images/author.jpg";

import { MobileButton } from "../MobileButton";

export function MobileProfile() {
  return (
    <>
      <Link href="/">
        <figure className="h-10 w-10 overflow-hidden rounded-full lg:hidden">
          <Image src={author} alt="Gustavo" />
        </figure>
      </Link>
      <MobileButton />
    </>
  );
}
