import { Navigation } from "./components/Navigation";
import { Divider } from "@/components/Elements/Divider";
import { ProfileHeader } from "./components/profile/ProfileHeader";
import { SidebarFooter } from "./components/SidebarFooter";
import { MobileMenu } from "./components/MobileMenu";

const Sidebar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-20 w-full self-start bg-background lg:h-auto lg:w-full lg:max-w-[250px] lg:flex-col lg:bg-transparent lg:py-8">
      <ProfileHeader />
      <Divider className="my-3 hidden lg:block" />
      <Navigation />
      <Divider className="my-3 hidden lg:block" />
      <SidebarFooter />
      <MobileMenu />
    </header>
  );
};

export { Sidebar };
