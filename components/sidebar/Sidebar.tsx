import { Navigation } from './Navigation'
import { Divider } from '@/components/utils/Divider'
import { ProfileHeader } from './profile/ProfileHeader'
import { SidebarFooter } from './SidebarFooter'
import { MobileMenu } from './MobileMenu'

export function Sidebar() {
  return (
    <header className="sticky top-0 z-10 h-20 lg:h-auto lg:py-8 flex self-start lg:flex-col w-full lg:max-w-[230px] lg:w-1/2 bg-background lg:bg-transparent">
      <ProfileHeader />
      <Divider className="hidden lg:block my-3" />
      <Navigation />
      <Divider className="hidden lg:block my-3" />
      <SidebarFooter />
      <MobileMenu />
    </header>
  )
}
