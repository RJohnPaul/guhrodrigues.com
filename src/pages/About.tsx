import { useEffect } from "react";

import Toast from "@/components/utils/Toast";

import author from "@/assets/images/author.jpeg";

import Biography from "@/components/utils/Biography";
import DownloadButton from "@/components/ui/DownloadButton";

import AnimateEnter from "@/components/utils/AnimateEnter";

export default function About({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <>
            <article className="w-full sm:h-full lg:min-h-[calc(100vh_-_85px)] flex items-center py-24">
                <AnimateEnter className="w-full m-auto py-8">
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold">
                            Quem sou & minha jornada pessoal.
                        </h1>
                    </div>
                    <div className="flex sm:flex-col lg:flex-row justify-between gap-16">
                        <figure>
                            <img
                                src={author}
                                loading="lazy"
                                className="rounded-lg w-[350px] lg:w-[700px]"
                                alt="Gustavo"
                            />
                        </figure>
                        <div className="flex items-start flex-col lg:mt-0 gap-4 sm:px-1 lg:px-0">
                            <Biography />

                            <DownloadButton />
                        </div>
                    </div>
                </AnimateEnter>
            </article>

            <Toast />
        </>
    );
}
