import React from 'react'

// Images
import html from '../../public/assets/img/html.png'
import css from '../../public/assets/img/css.png'
import javascript from '../../public/assets/img/javascript.png'
import php from '../../public/assets/img/php.png'
import react from '../../public/assets/img/react.png'
import tailwind from '../../public/assets/img/tailwind.png'
import bootstrap from '../../public/assets/img/bootstrap.png'
import mysql from '../../public/assets/img/mysql.png'

// Skills
const Skills = () => {
    const skills = [
        {
            id: 1,
            src: html,
            name: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            name: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            name: 'JavaScript',
            style: 'shadow-yellow-300'
        },
        {
            id: 4,
            src: php,
            name: 'PHP',
            style: 'shadow-indigo-300'
        },
        {
            id: 5,
            src: react,
            name: 'React',
            style: 'shadow-cyan-400'
        },
        {
            id: 6,
            src: tailwind,
            name: 'Tailwind',
            style: 'shadow-cyan-600'
        },
        {
            id: 7,
            src: bootstrap,
            name: 'Bootstrap',
            style: 'shadow-violet-500'
        },
        {
            id: 8,
            src: mysql,
            name: 'MySQL',
            style: 'shadow-sky-400'
        },
    ]

    return (
        <section
            className="w-full lg:h-screen p-2"
            id="skills"
        >
            <div className="max-w-[1000px] mx-auto flex justify-center flex-col h-full">
                <div className="pb-8 text-center">
                    <h1 className="text-4xl font-bold inline">Habilidades</h1>
                    <p className="py-3">Tecnologias que tenho conhecimento</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-white">
                    {
                        skills.map(({ id, src, name, style }) => (
                            <div
                                key={id}
                                className={`p-6 shadow-2xl rounded-xl ${style} bg-backgroundSecondary`}
                            >
                                <div className="grid grid-cols-1 gap-4 justify-center items-center">
                                    <div className="m-auto">
                                        <img
                                            src={src}
                                            width="64px"
                                            height="64px"
                                            alt={name}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h3>{name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills