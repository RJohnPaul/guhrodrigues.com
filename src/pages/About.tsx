// React Hooks
import { useEffect } from "react";

// Toastify
import Toast from "@/components/ui/Toast";

// Assets
import author from "@/assets/img/author.jpg";

// Section
import AboutSection from "@/components/sections/AboutSection";

// About Components
import Biography from "@/components/ui/Biography";
import DownloadButton from "@/components/ui/DownloadButton";

// About
export default function About({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <>
            <AboutSection>
                <div className="max-w-[1000px] w-full m-auto py-8 px-4">
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold bg-gradient-to-br from-white to-transparent via-primary bg-clip-text text-transparent">
                            Um pouco sobre mim. Meu conhecimento.
                        </h1>
                    </div>
                    <div className="flex sm:flex-col lg:flex-row justify-between gap-12">
                        <div className="w-full lg:order-2">
                            <img
                                src={author}
                                className="rounded-2xl w-[350px] hover:scale-105 ease-in duration-300"
                                alt="Gustavo"
                            />
                        </div>
                        <div className="flex justify-center flex-col lg:mt-0 gap-4 sm:px-1 lg:px-0">
                            <Biography />

                            <DownloadButton />
                        </div>
                    </div>
                </div>
            </AboutSection>
            <Toast />
        </>
    );
}
