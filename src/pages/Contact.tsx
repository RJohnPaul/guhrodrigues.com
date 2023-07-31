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
            <main className="w-full sm:h-full sm:min-h-[calc(100vh_-_85px)] p-2 flex items-center py-16">
                <section className="m-auto gap-8 py-9 px-4">
                    <div className="mb-8 space-y-4">
                        <h1 className="text-4xl font-extrabold">
                            Mande um e-mail. Como nos velhos tempos.
                        </h1>
                        <p className="text-gray-400">
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
