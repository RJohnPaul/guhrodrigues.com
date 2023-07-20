// React Hooks
import { useRef } from "react";

// React Router
import { Link } from "react-router-dom";

// Lottie
import Lottie from "lottie-react";

// Contact Icon
import contactIcon from "../../../public/static/contact.json";

// Contact Button
export default function ContactButton() {
    const contactRef = useRef();

    return (
        <>
            <Link to="/contact">
                <button
                    onMouseEnter={() => contactRef.current?.play()}
                    onMouseLeave={() => contactRef.current?.stop()}
                    className="sm:hidden md:flex text-center justify-center items-center bg-primary text-black font-semibold p-3 text-sm gap-1.5 rounded-2xl hover:bg-primary/70 duration-300"
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
