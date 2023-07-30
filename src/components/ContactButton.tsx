// React Hooks
import { useRef } from "react";

// React Router
import { Link } from "react-router-dom";

// Lottie
import Lottie from "lottie-react";

// Contact Icon
import contactIcon from "@/static/contact.json";

// Contact Button
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
