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
            className="max-w-md w-full"
        >
            <Form.Root onSubmit={sendEmail}>
                <m.div
                    className="flex flex-col w-full mx-auto gap-4"
                    variants={animation}
                >
                    <Form.Field name="text">
                        <div className="flex items-center justify-between">
                            <Form.Label className="text-sm font-medium py-2 text-primary">
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
                                className="w-full p-2.5 text-sm text-primary bg-neutral-950 border border-neutral-600 rounded-xl outline-none appearance-none w-7xl bg-tertiary focus:ring-1 focus:ring-primary duration-300"
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
                            <Form.Label className="text-sm font-medium py-2 text-primary">
                                Email
                            </Form.Label>
                            <Form.Message
                                className="text-sm font-medium text-red-500 opacity-80"
                                match="valueMissing"
                            >
                                Insira um Email
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="w-full p-2.5 text-sm text-primary bg-neutral-950 border border-neutral-600 rounded-xl outline-none appearance-none w-7xl bg-tertiary focus:ring-1 focus:ring-primary duration-300"
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
                            <Form.Label className="text-sm font-medium py-2 text-primary">
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
                                className="w-full p-2.5 text-sm text-primary bg-neutral-950 border border-neutral-600 rounded-xl outline-none appearance-none w-7xl bg-tertiary focus:ring-1 focus:ring-primary duration-300"
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
