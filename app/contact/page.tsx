import { Metadata } from "next";

import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";
import { FormComponent } from "@/components/ui/FormComponent";
import { Socials } from "@/components/ui/Socials";
import { Divider } from "@/components/utils/Divider";
import { AnimateEnter } from "@/components/utils/AnimateEnter";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Sinta-se à vontade para entrar em contato e conversaremos sobre como podemos trabalhar juntos.",
};

export default function Contact() {
  return (
    <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section className="space-y-6">
        <Title variant="title">Contato</Title>
        <Typography className="leading-relaxed">
          Sinta-se à vontade para entrar em contato e conversaremos sobre como
          podemos trabalhar juntos.
        </Typography>
        <div>
          <Title variant="title" size="xl">
            Minhas redes sociais
          </Title>
          <Socials />
        </div>
      </section>
      <Divider />
      <section className="space-y-4">
        <Title variant="title" size="xl">
          Mande um email, como nos velhos tempos
        </Title>
        <Typography className="leading-relaxed">
          Gosto muito de interagir com programadores, criadores e estudantes da
          tecnologia. Caso se interessou pelo meu trabalho ou queira dar um
          feedback sobre este website, vamos trocar um papo.
        </Typography>
        <FormComponent />
      </section>
    </AnimateEnter>
  );
}
