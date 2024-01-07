import { Metadata } from "next";

import { Title } from "@/components/elements/Title";
import { Typography } from "@/components/elements/Typography";
import { FormComponent } from "@/components/elements/FormComponent";
import { Socials } from "@/components/elements/Socials";
import { Divider } from "@/components/elements/Divider";
import { AnimateEnter } from "@/components/elements/AnimateEnter";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Sinta-se à vontade para entrar em contato e conversaremos sobre como podemos trabalhar juntos.",
};

const ContactPage = () => {
  return (
    <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section className="space-y-6">
        <Title variant="title">Contato</Title>
        <Typography className="leading-relaxed">
          <span className="text-primary/80">
            Sinta-se à vontade para entrar em contato
          </span>{" "}
          e conversaremos sobre como podemos trabalhar juntos.
        </Typography>
        <div>
          <Title variant="title" size="xl">
            Minhas redes sociais
          </Title>
          <Socials />
        </div>
      </section>
      <Divider />
      <section className="space-y-6">
        <div className="space-y-3">
          <Title variant="title" size="xl">
            Mande um email, como nos velhos tempos
          </Title>
          <Typography className="leading-relaxed">
            Se meu trabalho despertou seu interesse ou se você gostaria de
            compartilhar feedback sobre este website,{" "}
            <span className="text-primary/80">
              ficarei aberto em trocar ideias
            </span>
            .
          </Typography>
        </div>
        <FormComponent />
      </section>
    </AnimateEnter>
  );
};

export default ContactPage;
