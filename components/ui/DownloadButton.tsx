'use client'

import { useRef } from 'react'

import Lottie from 'lottie-react'
import downloadIcon from '@/assets/static/download.json'

import { successAlert } from '@/components/utils/Toast'

export function DownloadButton() {
  const downloadRef = useRef<any>()

  return (
    <a
      href="/assets/docs/resume.pdf"
      download="Gustavo Rodrigues.pdf"
      onClick={() => successAlert('Currículo instalado!')}
      onMouseEnter={() => downloadRef.current?.play()}
      onMouseLeave={() => downloadRef.current?.stop()}
      className="flex items-center text-primary font-semibold p-3 gap-2 rounded-lg hover:bg-neutral-800 transition-colors"
    >
      <Lottie
        lottieRef={downloadRef}
        animationData={downloadIcon}
        style={{ width: 24, height: 24 }}
        autoplay={false}
        loop={false}
      />
      Download C.V
    </a>
  )
}
