import { useEffect } from "react";

import Toast from "@/components/utils/Toast";

import AnimateEnter from "@/components/utils/AnimateEnter";
import AboutContent from "@/components/content/AboutContent";

export default function About({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <>
            <article className="w-full sm:h-full lg:min-h-[calc(100vh_-_85px)] flex items-center py-20">
                <AnimateEnter className="w-full m-auto py-8">
                    <AboutContent />
                </AnimateEnter>
            </article>

            <Toast />
        </>
    );
}
