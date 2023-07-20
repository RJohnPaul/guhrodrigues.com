// React Hooks
import { useEffect } from "react";

// Toastify
import Toast from "./../components/ui/Toast";

// Section
import ContactSection from "./../components/sections/ContactSection";
import FormComponent from "./../components/ui/FormComponent";

// Contact
export default function Contact({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <ContactSection>
                <div className="max-w-[500px] w-full m-auto gap-8 p-5">
                    <div className="pb-8 text-center">
                        <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-2xl py-2">
                            Me mande um e-mail &mdash;
                        </p>
                        <h1 className="sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-white to-transparent via-primary bg-clip-text text-transparent">
                            Entre em contato
                        </h1>
                    </div>

                    <FormComponent />
                </div>
            </ContactSection>

            <Toast />
        </>
    );
}
