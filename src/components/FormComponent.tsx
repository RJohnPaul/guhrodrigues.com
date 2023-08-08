import { useContext } from "react";
import AppContext from "@/contexts/AppContext";

import { successAlert } from "./Toast";

import * as Form from "@radix-ui/react-form";

import emailjs from "@emailjs/browser";

const emailService = import.meta.env.VITE_EMAIL_SERVICE;
const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function FormComponent() {
    const { name, setName, email, setEmail, message, setMessage } =
        useContext(AppContext);

    const sendEmail = (e: React.FormEvent) => {
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
                successAlert("E-mail enviado :D");

                setName("");
                setEmail("");
                setMessage("");
            });
    };

    return (
        <div className="max-w-[500px] w-full">
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
                                className="w-full p-3 text-white bg-background border-2 border-neutral-400 rounded-2xl outline-none appearance-none w-7xl bg-tertiary focus:border-primary"
                                type="text"
                                autoComplete="off"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field name="question">
                        <div className="flex items-center justify-between">
                            <Form.Label className="text-sm font-medium py-2 text-white">
                                E-mail
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] font-medium text-red-500 opacity-80"
                                match="valueMissing"
                            >
                                Insira um e-mail
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="w-full p-3 text-white bg-background border-2 border-neutral-400 rounded-2xl outline-none appearance-none w-7xl bg-tertiary focus:border-primary"
                                type="email"
                                autoComplete="off"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                className="w-full p-3 text-white bg-background border-2 border-neutral-400 rounded-2xl outline-none appearance-none w-7xl bg-tertiary focus:border-primary"
                                autoComplete="off"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
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
    );
}
