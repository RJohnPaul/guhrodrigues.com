// React Hooks
import { useRef } from "react";

// Lottie
import Lottie from "lottie-react";

// Icon
import downloadIcon from "@/static/download.json";

// PDF
import curriculo from "@/assets/docs/curriculo.pdf";

// Toast
import { downloadAlert } from "./Toast";

// Download Button
export default function DownloadButton() {
    const downloadRef = useRef<any>();

    return (
        <div className="mt-3.5 flex text-center sm:justify-center lg:justify-start">
            <a
                href={curriculo}
                download="Gustavo Rodrigues.pdf"
                type="application/pdf"
            >
                <button
                    onClick={downloadAlert}
                    onMouseEnter={() => downloadRef.current?.play()}
                    onMouseLeave={() => downloadRef.current?.stop()}
                    className="flex text-center items-center text-primary font-semibold py-3 px-4 gap-2 rounded-lg hover:bg-[#222] transition-colors"
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
        </div>
    );
}
