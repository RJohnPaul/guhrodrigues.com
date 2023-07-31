import { useEffect } from "react";

import Toast from "@/components/Toast";

import author from "@/assets/img/author.jpeg";

import Biography from "@/components/Biography";
import DownloadButton from "@/components/DownloadButton";

export default function About({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <>
            <main className="w-full sm:h-full lg:min-h-[calc(100vh_-_85px)] p-2 flex items-center py-16">
                <section className="max-w-[1000px] w-full m-auto py-8 px-4">
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold">
                            Sobre mim. Meu conhecimento.
                        </h1>
                    </div>
                    <div className="flex sm:flex-col lg:flex-row justify-between gap-12">
                        <div className="w-full">
                            <img
                                src={author}
                                loading="lazy"
                                className="rounded-lg w-[350px] hover:grayscale ease-in duration-300"
                                alt="Gustavo"
                            />
                        </div>
                        <div className="flex flex-col lg:mt-0 gap-4 sm:px-1 lg:px-0">
                            <Biography />

                            <DownloadButton />
                        </div>
                    </div>
                </section>
            </main>
            <Toast />
        </>
    );
}
