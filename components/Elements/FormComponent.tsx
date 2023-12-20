"use client";

import * as Form from "@radix-ui/react-form";

import toast from "react-hot-toast";

import { useHooks } from "@/contexts/Provider";

import { SendButton } from "@/components/Elements/SendButton";

import { ToastMessage } from "@/components/Elements/Toast";

const FormComponent = () => {
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

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    })
      .then(() => {
        toast.success(
          <ToastMessage
            title="Enviado"
            message="E-mail destinado com sucesso."
          />,
        );

        setName("");
        setEmail("");
        setMessage("");
        setSubmitting(false);
      })
      .catch(() => {
        toast.error(
          <ToastMessage
            title="Não enviado"
            message="Ocorreu um erro ao enviar este e-mail."
          />,
        );
      });
  };

  return (
    <div className="w-full max-w-md">
      <Form.Root onSubmit={sendEmail}>
        <div className="mx-auto flex flex-col gap-4">
          <Form.Field name="text">
            <div className="flex items-center justify-between">
              <Form.Label className="py-2 text-sm font-medium text-neutral-400">
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
                className="w-7xl bg-tertiary w-full appearance-none rounded-lg border border-neutral-700 bg-input p-2 text-sm text-neutral-400 outline-none duration-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-700"
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
              <Form.Label className="py-2 text-sm font-medium text-neutral-400">
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
                className="w-7xl bg-tertiary w-full appearance-none rounded-lg border border-neutral-700 bg-input p-2 text-sm text-neutral-400 outline-none duration-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-700"
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
              <Form.Label className="py-2 text-sm font-medium text-neutral-400">
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
                className="w-7xl bg-tertiary h-20 w-full resize-none appearance-none rounded-lg border border-neutral-700 bg-input p-2 text-sm leading-relaxed text-neutral-400 outline-none duration-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-700"
                autoComplete="off"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Como posso ajudá-lo?"
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <SendButton submitting={submitting} />
          </Form.Submit>
        </div>
      </Form.Root>
    </div>
  );
};

export { FormComponent };
