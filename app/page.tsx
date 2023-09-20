import { AnimateEnter } from '@/components/utils/AnimateEnter'
import { HomeContent } from '@/components/content/HomeContent'

export default function Home() {
  return (
    <article className="w-full sm:h-full sm:min-h-[calc(100vh_-_85px)] flex text-center justify-center pt-20">
      <AnimateEnter className="flex flex-col items-center justify-center p-8">
        <HomeContent />
      </AnimateEnter>
    </article>
  )
}
