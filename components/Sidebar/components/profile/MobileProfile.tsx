import Link from "next/link";

import author from "@/assets/images/author.jpg";

import { Image } from "@/components/Elements/Image";
import { MobileButton } from "@/components/Sidebar/components/MobileButton";
import { CommandMenuButton } from "@/components/CommandMenu/components/CommandMenuButton";

const MobileProfile = () => {
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
};

export { MobileProfile };
