import { Metadata } from 'next'

import { AnimateEnter } from '@/components/utils/AnimateEnter'
import { ContactContent } from '@/components/content/ContactContent'
import { Toast } from '@/components/utils/Toast'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Mande um email, como nos velhos tempos',
}

export default function Contact() {
  return (
    <>
      <article className="w-full min-h-[calc(100vh_-_85px)] flex items-center py-24">
        <AnimateEnter className="gap-8 py-9">
          <ContactContent />
        </AnimateEnter>
      </article>

      <Toast />
    </>
  )
}
