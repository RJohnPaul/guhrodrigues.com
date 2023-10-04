'use client'

import { useRef } from 'react'

import Lottie from 'lottie-react'
import downloadIcon from '@/assets/static/download.json'

import { successAlert } from '@/components/utils/Toast'

export function DownloadButton() {
  const downloadRef = useRef<any>()

  return (
    <a
      href="/resume.pdf"
      download="Gustavo Rodrigues.pdf"
      onClick={() => successAlert('Currículo instalado!')}
      onMouseEnter={() => downloadRef.current?.play()}
      onMouseLeave={() => downloadRef.current?.stop()}
    >
      <button className="flex items-center text-foreground text-sm font-medium p-3 gap-2 rounded-lg border border-neutral-800 hover:bg-neutral-800 hover:text-primary duration-300">
        <Lottie
          lottieRef={downloadRef}
          animationData={downloadIcon}
          style={{ width: 20, height: 20 }}
          autoplay={false}
          loop={false}
        />
        Download C.V
      </button>
    </a>
  )
}
