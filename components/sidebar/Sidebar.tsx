"use client";

import { Navigation } from "./components/Navigation";
import { Divider } from "@/components/elements/Divider";
import { ProfileHeader } from "./components/profile/ProfileHeader";
import { SidebarFooter } from "./components/sidebarFooter";
import { MobileMenu } from "./components/MobileMenu";
import { useIsMobile } from "./hooks/useIsMobile";

const Sidebar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full self-start bg-background lg:h-auto lg:w-full lg:max-w-[250px] lg:flex-col lg:bg-transparent lg:py-8">
      <ProfileHeader />
      {!isMobile ? (
        <>
          <Divider className="my-3 hidden lg:block" />
          <Navigation />
          <Divider className="my-3 hidden lg:block" />
          <SidebarFooter />
        </>
      ) : (
        <MobileMenu />
      )}
    </header>
  );
};

export { Sidebar };
