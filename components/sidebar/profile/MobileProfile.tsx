import Link from "next/link";

import author from "@/assets/images/author.png";

import { Image } from "@/components/utils/Image";
import { MobileButton } from "../MobileButton";
import { CommandMenuButton } from "@/components/command/CommandMenuButton";

export function MobileProfile() {
  return (
    <>
      <Link href="/">
        <figure className="h-10 w-10 overflow-hidden rounded-full lg:hidden">
          <Image src={author} alt="Gustavo" />
        </figure>
      </Link>
      <div className="flex items-center gap-1 lg:hidden">
        <CommandMenuButton iconClassName="w-5 h-5" />
        <MobileButton />
      </div>
    </>
  );
}
