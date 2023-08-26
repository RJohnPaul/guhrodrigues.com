import { m } from "framer-motion";

const animation = {
    hide: { x: -8, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
    },
};

export default function Biography() {
    return (
        <m.div
            initial="hide"
            animate="show"
            transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
            className="leading-8 space-y-4"
        >
            <m.p className="text-md text-neutral-400" variants={animation}>
                Meu nome é{" "}
                <span className="text-primary">Gustavo Rodrigues</span>, sou{" "}
                <span className="text-primary">Desenvolvedor Web</span> e
                estudante de{" "}
                <span className="text-primary">
                    Técnico em Informática para Internet
                </span>
                .
            </m.p>
            <m.p className="text-md text-neutral-400" variants={animation}>
                Sou{" "}
                <span className="text-primary">
                    fanático pela criação de interfaces
                </span>{" "}
                — a web é um meio infinito de oportunidades e criatividade da
                qual se pode mergulhar.
            </m.p>
            <m.p className="text-md text-neutral-400" variants={animation}>
                Estou sempre{" "}
                <span className="text-primary">em busca de conhecimento</span>{" "}
                por meio de projetos novos, desafios e assim crescer
                profissionalmente.
            </m.p>
            <m.p className="text-md text-neutral-400" variants={animation}>
                <span className="text-primary">Interfaces minimalistas</span>,
                dark mode e projetos paralelos me encantam. Desfrutar de músicas
                é uma <span className="text-primary">terapia para mim</span>.
            </m.p>
        </m.div>
    );
}
