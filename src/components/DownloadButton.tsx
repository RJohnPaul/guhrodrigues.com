import { useRef } from "react";

import Lottie from "lottie-react";
import downloadIcon from "@/static/download.json";

import resume from "@/assets/docs/resume.pdf";
import { downloadAlert } from "./Toast";

export default function DownloadButton() {
    const downloadRef = useRef<any>();

    return (
        <a
            href={resume}
            download="Gustavo Rodrigues.pdf"
            type="application/pdf"
        >
            <button
                onClick={downloadAlert}
                onMouseEnter={() => downloadRef.current?.play()}
                onMouseLeave={() => downloadRef.current?.stop()}
                className="flex text-center items-center text-primary font-semibold py-3 px-4 gap-2 rounded-lg hover:bg-neutral-800 transition-colors"
            >
                <Lottie
                    lottieRef={downloadRef}
                    animationData={downloadIcon}
                    style={{ width: 24, height: 24 }}
                    autoplay={false}
                    loop={false}
                />
                Download C.V
            </button>
        </a>
    );
}
