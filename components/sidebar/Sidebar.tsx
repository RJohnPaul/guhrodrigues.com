import { Navigation } from "./Navigation";
import { Divider } from "@/components/utils/Divider";
import { ProfileHeader } from "./profile/ProfileHeader";
import { SidebarFooter } from "./SidebarFooter";
import { MobileMenu } from "./MobileMenu";

export function Sidebar() {
  return (
    <header className="sticky top-0 z-10 flex h-20 w-full self-start bg-background lg:h-auto lg:w-1/2 lg:max-w-[230px] lg:flex-col lg:bg-transparent lg:py-8">
      <ProfileHeader />
      <Divider className="my-3 hidden lg:block" />
      <Navigation />
      <Divider className="my-3 hidden lg:block" />
      <SidebarFooter />
      <MobileMenu />
    </header>
  );
}
