import { m } from "framer-motion";

import * as Form from "@radix-ui/react-form";

import emailjs from "@emailjs/browser";

import { useHooks } from "@/hooks/Provider";

import { emailService, emailTemplate, publicKey } from "@/utils";

import { successAlert } from "@/components/utils/Toast";
import { Button } from "@/components/utils/Button";

const animation = {
  hide: {
    y: 8,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export function FormComponent() {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    submitting,
    setSubmitting,
  } = useHooks();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

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
        setSubmitting(false);
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
        <m.div className="flex flex-col mx-auto gap-4" variants={animation}>
          <Form.Field name="text">
            <div className="flex items-center justify-between">
              <Form.Label className="text-sm font-medium py-2 text-neutral-400">
                Nome
              </Form.Label>
              <Form.Message
                className="text-xs font-medium text-red-500/70"
                match="valueMissing"
              >
                Insira um nome
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full p-2 text-sm text-neutral-400 placeholder:text-neutral-400 bg-input border border-neutral-700 rounded-lg outline-none appearance-none w-7xl bg-tertiary focus:ring-1 focus:ring-neutral-700 duration-300"
                type="text"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jordan Walke"
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="question">
            <div className="flex items-center justify-between">
              <Form.Label className="text-sm font-medium py-2 text-neutral-400">
                Email
              </Form.Label>
              <Form.Message
                className="text-xs font-medium text-red-500/70"
                match="valueMissing"
              >
                Insira um email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full p-2 text-sm text-neutral-400 placeholder:text-neutral-400 bg-input border border-neutral-700 rounded-lg outline-none appearance-none w-7xl bg-tertiary focus:ring-1 focus:ring-neutral-700 duration-300"
                type="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jordan@walke.com"
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="question">
            <div className="flex items-center justify-between">
              <Form.Label className="text-sm font-medium py-2 text-neutral-400">
                Mensagem
              </Form.Label>
              <Form.Message
                className="text-xs font-medium text-red-500/70"
                match="valueMissing"
              >
                Insira uma mensagem
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea
                className="w-full p-2 h-20 resize-none leading-relaxed text-sm text-neutral-400 placeholder:text-neutral-400 bg-input border border-neutral-700 rounded-lg outline-none appearance-none w-7xl bg-tertiary focus:ring-1 focus:ring-neutral-700 duration-300"
                autoComplete="off"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Como posso ajudá-lo?"
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <Button type="submit" disabled={submitting}>
              {submitting ? <span>Enviar...</span> : <span>Enviar</span>}
            </Button>
          </Form.Submit>
        </m.div>
      </Form.Root>
    </m.div>
  );
}
