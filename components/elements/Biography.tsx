import { Typography } from "./Typography";

const Biography = () => {
  const getAge = () => {
    const now = new Date();
    const dateOfBirth = new Date("2005-11-10");
    const yearOfBirth = dateOfBirth.getFullYear();
    const currentYear = now.getFullYear();

    let age = currentYear - yearOfBirth;

    if (
      now.getMonth() < dateOfBirth.getMonth() ||
      (now.getMonth() === dateOfBirth.getMonth() &&
        now.getDate() < dateOfBirth.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className="space-y-3">
      <Typography className="leading-relaxed">
        Ei! Me chamo Gustavo Rodrigues, sou um{" "}
        <span className="text-primary/80">desenvolvedor web</span> de{" "}
        <span className="text-primary/80">{getAge()} anos</span> com residência
        na área de <span className="text-primary/80">São Paulo</span>. Sou
        formado em Técnico em Informática para Internet pela{" "}
        <a
          href="https://www.cps.sp.gov.br/etec/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/80 underline decoration-primary/50 underline-offset-4 duration-300 hover:decoration-primary/80"
        >
          ETEC
        </a>
        .
      </Typography>
      <Typography className="leading-relaxed">
        Ao longo de mais de{" "}
        <span className="text-primary/80">dois anos de estudo</span> no campo do
        desenvolvimento web, adquiri significativa experiência na criação de
        soluções digitais. Meu foco atual está direcionado para a exploração de{" "}
        <span className="text-primary/80">design systems</span>, na elaboração
        de <span className="text-primary/80">interfaces inovadoras</span> e na
        capacidade de transformar códigos em experiências de usuário
        verdadeiramente excepcionais.
      </Typography>
      <Typography className="leading-relaxed">
        <span className="text-primary/80">
          Busco manter-me constantemente atualizado
        </span>{" "}
        com as últimas tendências do mercado, demonstrando um comprometimento em
        fazer a diferença em todos os projetos nos quais estou envolvido.
      </Typography>
    </div>
  );
};

export { Biography };
