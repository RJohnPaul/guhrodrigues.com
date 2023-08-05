import { useRef } from "react";

import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import contactIcon from "@/assets/static/contact.json";

export default function ContactButton() {
    const contactRef = useRef<any>();

    return (
        <>
            <Link to="/contact">
                <button
                    onMouseEnter={() => contactRef.current?.play()}
                    onMouseLeave={() => contactRef.current?.stop()}
                    className="sm:hidden md:flex text-center justify-center items-center bg-primary text-black font-semibold py-3 px-4 text-sm gap-1.5 rounded-full hover:bg-primary/70 duration-300"
                >
                    Contato
                    <Lottie
                        lottieRef={contactRef}
                        animationData={contactIcon}
                        style={{ width: 18, height: 18 }}
                        autoplay={false}
                        loop={false}
                    />
                </button>
            </Link>
        </>
    );
}
