"use client";

import { useRef } from "react";

import Lottie from "lottie-react";
import downloadIcon from "@/assets/icons/download.json";

import toast from "react-hot-toast";

import { Button } from "@/components/utils/Button";
import { Toast } from "./Toast";

export function DownloadButton() {
  const downloadRef = useRef<any>();

  return (
    <>
      <a
        href="/Gustavo Rodrigues.pdf"
        download
        onClick={() => toast.success("Instalado")}
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
