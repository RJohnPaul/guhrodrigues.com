'use client'

import { useRef } from 'react'

import Lottie from 'lottie-react'
import downloadIcon from '@/assets/static/download.json'

import { Toast, successAlert } from '@/components/utils/Toast'

import { Button } from '@/components/utils/Button'

export function DownloadButton() {
  const downloadRef = useRef<any>()

  return (
    <>
      <a
        href="/resume.pdf"
        download="Gustavo Rodrigues.pdf"
        onClick={() => successAlert('Currículo instalado!')}
        onMouseEnter={() => downloadRef.current?.play()}
        onMouseLeave={() => downloadRef.current?.stop()}
      >
        <Button variant="dark" size="lg">
          <Lottie
            lottieRef={downloadRef}
            animationData={downloadIcon}
            style={{ width: 20, height: 20 }}
            autoplay={false}
            loop={false}
          />
          Download C.V
        </Button>
      </a>

      <Toast />
    </>
  )
}
