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
        Ei! Me chamo Gustavo Rodrigues, sou um desenvolvedor web de {getAge()}{" "}
        anos com residência na área de São Paulo. Sou formado em Técnico em
        Informática para Internet pela{" "}
        <a
          href="https://www.cps.sp.gov.br/etec/"
          target="blank"
          className="text-primary underline decoration-primary/50 underline-offset-4 duration-300 hover:decoration-primary"
        >
          ETEC
        </a>
        .
      </Typography>
      <Typography className="leading-relaxed">
        Ao longo de mais de dois anos de estudo no campo do desenvolvimento web,
        adquiri significativa experiência na criação de soluções digitais. Meu
        foco atual está direcionado para a exploração de design systems, a
        elaboração de interfaces inovadoras e a capacidade de transformar
        códigos em experiências de usuário verdadeiramente excepcionais.
      </Typography>
      <Typography className="leading-relaxed">
        Busco manter-me constantemente atualizado com as últimas tendências do
        mercado, demonstrando um comprometimento em fazer a diferença em todos
        os projetos nos quais estou envolvido.
      </Typography>
    </div>
  );
};

export { Biography };
