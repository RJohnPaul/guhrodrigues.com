import { useState, useEffect } from "react";

// Radix-UI
import * as Form from "@radix-ui/react-form";

// EmailJS
import emailjs from "@emailjs/browser";

// Toastify
import Toast, { sendEmailAlert } from "./../components/Toast";

// Environment Variables
const emailService = import.meta.env.VITE_EMAIL_SERVICE;
const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

// Contact
export default function Contact({ title }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        };

        emailjs
            .send(
                `${emailService}`,
                `${emailTemplate}`,
                templateParams,
                `${publicKey}`
            )
            .then(() => {
                sendEmailAlert();

                setName("");
                setEmail("");
                setMessage("");
            });
    };

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Toast />
            <section className="w-full sm:h-full sm:min-h-[calc(100vh_-_85px)] p-2 flex items-center py-16">
                <div className="max-w-[500px] w-full m-auto gap-8 p-5">
                    <div className="pb-8 text-center">
                        <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-2xl py-2">
                            Mande um email &mdash;
                        </p>
                        <h1 className="sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-white to-transparent via-primary bg-clip-text text-transparent">
                            Entre em contato
                        </h1>
                    </div>
                    <Form.Root onSubmit={sendEmail}>
                        <div className="flex flex-col w-full mx-auto gap-4">
                            <Form.Field name="text">
                                <div className="flex items-center justify-between">
                                    <Form.Label className="text-sm font-medium py-2 text-white">
                                        Nome
                                    </Form.Label>
                                    <Form.Message
                                        className="text-[13px] font-medium text-red-500 opacity-80"
                                        match="valueMissing"
                                    >
                                        Insira um nome
                                    </Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <input
                                        className="w-full p-3 text-white bg-background border-2 border-gray-400 rounded-2xl outline-none appearance-none w-7xl bg-tertiary focus:border-teal-300"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </Form.Control>
                            </Form.Field>
                            <Form.Field name="question">
                                <div className="flex items-center justify-between">
                                    <Form.Label className="text-sm font-medium py-2 text-white">
                                        Email
                                    </Form.Label>
                                    <Form.Message
                                        className="text-[13px] font-medium text-red-500 opacity-80"
                                        match="valueMissing"
                                    >
                                        Insira um email
                                    </Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <input
                                        className="w-full p-3 text-white bg-background border-2 border-gray-400 rounded-2xl outline-none appearance-none w-7xl bg-tertiary focus:border-teal-300"
                                        type="email"
                                        autoComplete="off"
                                        required
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Form.Control>
                            </Form.Field>
                            <Form.Field name="question">
                                <div className="flex items-center justify-between">
                                    <Form.Label className="text-sm font-medium py-2 text-white">
                                        Mensagem
                                    </Form.Label>
                                    <Form.Message
                                        className="text-[13px] font-medium text-red-500 opacity-80"
                                        match="valueMissing"
                                    >
                                        Insira uma mensagem
                                    </Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <textarea
                                        className="w-full p-3 text-white bg-background border-2 border-gray-400 rounded-2xl outline-none appearance-none w-7xl bg-tertiary focus:border-teal-300"
                                        autoComplete="off"
                                        required
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    />
                                </Form.Control>
                            </Form.Field>
                            <Form.Submit asChild>
                                <button
                                    className="flex text-center justify-center items-center bg-primary text-black font-semibold p-3 text-sm gap-1 rounded-2xl hover:bg-primary/70 duration-300"
                                    type="submit"
                                >
                                    Enviar
                                </button>
                            </Form.Submit>
                        </div>
                    </Form.Root>
                </div>
            </section>
        </>
    );
}
