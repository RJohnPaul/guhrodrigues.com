"use client";

import { useRef } from "react";

import Lottie from "lottie-react";
import downloadIcon from "@/assets/icons/download.json";

import { Toast, successAlert } from "@/components/ui/Toast";

import { Button } from "@/components/utils/Button";

export function DownloadButton() {
  const downloadRef = useRef<any>();

  return (
    <>
      <a
        href="/Gustavo Rodrigues.pdf"
        download
        onClick={() => successAlert("Currículo instalado ツ")}
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
  );
}
