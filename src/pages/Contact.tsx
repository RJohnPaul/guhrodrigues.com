import { useEffect } from "react";

import Toast from "@/components/utils/Toast";

import FormComponent from "@/components/ui/FormComponent";

import AnimateEnter from "@/components/utils/AnimateEnter";

export default function Contact({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <>
            <main className="w-full min-h-[calc(100vh_-_85px)] flex items-center py-16">
                <AnimateEnter className="gap-8 py-9">
                    <div className="mb-8 space-y-4">
                        <h1 className="text-4xl font-extrabold">
                            Mande um email. Como nos velhos tempos.
                        </h1>
                        <p className="text-neutral-400">
                            Caso se interessou pelo meu trabalho ou queira{" "}
                            <span className="text-primary">
                                dar um feedback
                            </span>{" "}
                            sobre este website, vamos{" "}
                            <span className="text-primary">trocar um papo</span>
                            .
                        </p>
                    </div>

                    <FormComponent />
                </AnimateEnter>
            </main>

            <Toast />
        </>
    );
}
