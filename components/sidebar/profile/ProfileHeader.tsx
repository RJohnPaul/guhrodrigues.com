import { DesktopProfile } from './DesktopProfile'
import { MobileProfile } from './MobileProfile'

export function ProfileHeader() {
  return (
    <div className="flex justify-between items-center lg:items-start gap-2 lg:gap-0.5 lg:flex-col w-full">
      <DesktopProfile />
      <MobileProfile />
    </div>
  )
}
