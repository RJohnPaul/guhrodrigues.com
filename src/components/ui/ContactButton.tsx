import { useRef } from "react";

import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import contactIcon from "@/assets/static/contact.json";

import Button from "@/components/utils/Button";

export default function ContactButton() {
    const contactRef = useRef<any>();

    return (
        <>
            <Link to="/contact">
                <Button
                    onMouseEnter={() => contactRef.current?.play()}
                    onMouseLeave={() => contactRef.current?.stop()}
                    className="gap-1.5 sm:hidden md:flex"
                >
                    Contato
                    <Lottie
                        lottieRef={contactRef}
                        animationData={contactIcon}
                        style={{ width: 18, height: 18 }}
                        autoplay={false}
                        loop={false}
                    />
                </Button>
            </Link>
        </>
    );
}
