import { DesktopProfile } from "./DesktopProfile";
import { MobileProfile } from "./MobileProfile";

export function ProfileHeader() {
  return (
    <div className="flex w-full items-center justify-between gap-2 lg:flex-col lg:items-start lg:gap-0.5">
      <DesktopProfile />
      <MobileProfile />
    </div>
  );
}
