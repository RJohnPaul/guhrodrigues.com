// React Hooks
import { useEffect } from "react";

// Toastify
import Toast from "../components/ui/Toast";

// Assets
import about from "/assets/img/about.jpg";

// Section
import AboutSection from "./../components/sections/AboutSection";

// About Components
import Biography from "./../components/ui/Biography";
import DownloadButton from "./../components/ui/DownloadButton";

// About
export default function About({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <>
            <AboutSection>
                <div className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1050px] m-auto gap-8 p-5">
                    <div className="pb-8 text-center">
                        <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-lg py-2">
                            Introdução &mdash;
                        </p>
                        <h1 className="text-4xl font-extrabold bg-gradient-to-br from-white to-transparent via-primary bg-clip-text text-transparent">
                            Sobre mim
                        </h1>
                    </div>
                    <div className="md:grid lg:grid-cols-5">
                        <div className="w-full h-auto sm:col-span-3 lg:col-span-2 m-auto flex items-center justify-center p-4">
                            <img
                                src={about}
                                className="rounded-2xl flex w-[350px] hover:scale-105 ease-in duration-300"
                                alt="Gustavo"
                            />
                        </div>
                        <div className="col-span-3 flex justify-center flex-col sm:mt-6 lg:ml-24 lg:mt-0 gap-3 sm:px-1 lg:px-0">
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
