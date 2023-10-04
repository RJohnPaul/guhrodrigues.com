import Image from 'next/image'

import logo from '@/assets/images/logo.svg'

export function DesktopHeaderImage() {
  return (
    <div className="hidden lg:block group relative p-5 my-2 rounded-full border bg-background border-neutral-800">
      <div className="overflow-hidden">
        <Image
          src={logo}
          alt="Gustavo"
          className="w-10 scale-100 group-hover:scale-105 ease-in-out duration-300"
        />
      </div>
      <div className="absolute w-4 h-4 rounded-full bg-emerald-600 bottom-1 right-1">
        <div className="absolute z-[11] w-4 h-4 rounded-full bg-emerald-600 bottom-0 -right-0 animate-ping transition-[4s]" />
      </div>
    </div>
  )
}
