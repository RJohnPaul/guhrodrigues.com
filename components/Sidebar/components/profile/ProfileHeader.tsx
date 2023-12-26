import { useIsMobile } from "@/components/sidebar/hooks/useIsMobile";

import { DesktopProfile } from "@/components/sidebar/components/profile/DesktopProfile";
import { MobileProfile } from "@/components/sidebar/components/profile/MobileProfile";

const ProfileHeader = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex w-full items-center justify-between gap-2 lg:flex-col lg:items-start lg:gap-0.5">
      {isMobile ? <MobileProfile /> : <DesktopProfile />}
    </div>
  );
};

export { ProfileHeader };
