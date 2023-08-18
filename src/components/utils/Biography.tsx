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
                Atualmente atuo com{" "}
                <span className="text-primary">TypeScript</span> juntamente ao{" "}
                <span className="text-primary">React</span>, assim utilizo
                frequentemente várias bibliotecas para facilitar a agilidade e
                manter{" "}
                <span className="text-primary">
                    altos padrões de qualidade em meu código
                </span>
                .
            </m.p>
            <m.p className="text-md text-neutral-400" variants={animation}>
                Possuo{" "}
                <span className="text-primary">+2 anos de experiência</span> em
                desenvolvimento web e estou sempre{" "}
                <span className="text-primary">em busca de desafios</span> e{" "}
                <span className="text-primary">oportunidades</span> para crescer
                profissionalmente.
            </m.p>
        </m.div>
    );
}
