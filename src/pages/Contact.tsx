import { useEffect } from "react";

import Toast from "@/components/Toast";

import FormComponent from "@/components/FormComponent";

export default function Contact({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <>
            <main className="w-full sm:h-full md:min-h-[calc(100vh_-_85px)] flex items-center py-16">
                <section className="gap-8 py-9">
                    <div className="mb-8 space-y-4">
                        <h1 className="text-4xl font-extrabold">
                            Mande um e-mail. Como nos velhos tempos.
                        </h1>
                        <p className="text-neutral-400">
                            Caso se interessou pelo meu trabalho ou queira{" "}
                            <span className="text-primary">
                                dar um feedback
                            </span>{" "}
                            sobre este website, me{" "}
                            <span className="text-primary">
                                mande uma mensagem
                            </span>
                            .
                        </p>
                    </div>

                    <FormComponent />
                </section>
            </main>

            <Toast />
        </>
    );
}
