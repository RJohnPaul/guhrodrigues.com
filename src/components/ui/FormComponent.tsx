import { useContext } from "react";
import AppContext from "@/contexts/AppContext";

import { m } from "framer-motion";

import { successAlert } from "@/components/utils/Toast";

import * as Form from "@radix-ui/react-form";

import emailjs from "@emailjs/browser";

import Button from "@/components/utils/Button";

const emailService = import.meta.env.VITE_EMAIL_SERVICE;
const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const animation = {
    hide: { y: 8, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
    },
};

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
        <m.div
            initial="hide"
            animate="show"
            transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
            className="max-w-[500px] w-full"
        >
            <Form.Root onSubmit={sendEmail}>
                <m.div
                    className="flex flex-col w-full mx-auto gap-4"
                    variants={animation}
                >
                    <Form.Field name="text">
                        <div className="flex items-center justify-between">
                            <Form.Label className="text-sm font-medium py-2 text-neutral-400">
                                Nome
                            </Form.Label>
                            <Form.Message
                                className="text-sm font-medium text-red-500 opacity-80"
                                match="valueMissing"
                            >
                                Insira um nome
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="w-full p-2.5 text-sm text-white bg-neutral-900 border border-neutral-700 rounded-xl outline-none appearance-none w-7xl bg-tertiary focus:ring-2 focus:ring-neutral-700 duration-300"
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
                            <Form.Label className="text-sm font-medium py-2 text-neutral-400">
                                E-mail
                            </Form.Label>
                            <Form.Message
                                className="text-sm font-medium text-red-500 opacity-80"
                                match="valueMissing"
                            >
                                Insira um e-mail
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="w-full p-2.5 text-sm text-white bg-neutral-900 border border-neutral-700 rounded-xl outline-none appearance-none w-7xl bg-tertiary focus:ring-2 focus:ring-neutral-700 duration-300"
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
                            <Form.Label className="text-sm font-medium py-2 text-neutral-400">
                                Mensagem
                            </Form.Label>
                            <Form.Message
                                className="text-sm font-medium text-red-500 opacity-80"
                                match="valueMissing"
                            >
                                Insira uma mensagem
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <textarea
                                className="w-full p-2.5 text-sm text-white bg-neutral-900 border border-neutral-700 rounded-xl outline-none appearance-none w-7xl bg-tertiary focus:ring-2 focus:ring-neutral-700 duration-300"
                                autoComplete="off"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Submit asChild>
                        <Button type="submit" className="rounded-xl">
                            Enviar
                        </Button>
                    </Form.Submit>
                </m.div>
            </Form.Root>
        </m.div>
    );
}
