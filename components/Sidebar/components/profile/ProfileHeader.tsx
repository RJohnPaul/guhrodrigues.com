import { DesktopProfile } from "@/components/Sidebar/components/profile/DesktopProfile";
import { MobileProfile } from "@/components/Sidebar/components/profile/MobileProfile";

const ProfileHeader = () => {
  return (
    <div className="flex w-full items-center justify-between gap-2 lg:flex-col lg:items-start lg:gap-0.5">
      <DesktopProfile />
      <MobileProfile />
    </div>
  );
};

export { ProfileHeader };
