import React from 'react'

// Images
import portfolio from '../../public/assets/img/portfolio.jpg'
import musicplayer from '../../public/assets/img/musicplayer.jpg'
import calculator from '../../public/assets/img/calculator.jpg'
import todo from '../../public/assets/img/todo.jpg'

// Projects
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: portfolio,
      alt: "Portfolio",
      visit: "https://guhrodrigues.vercel.app/",
      code: "https://github.com/projects-gustavo/portfolio"
    },
    {
      id: 2,
      src: musicplayer,
      alt: "Music Player",
      visit: "https://projects-gustavo.github.io/music-player/",
      code: "https://github.com/projects-gustavo/music-player"
    },
    {
      id: 3,
      src: calculator,
      alt: "Calculadora",
      visit: "https://projects-gustavo.github.io/calculator/",
      code: "https://github.com/projects-gustavo/calculator"
    },
    {
      id: 4,
      src: todo,
      alt: "To-do",
      visit: "https://to-do-projects-gustavo.vercel.app/",
      code: "https://github.com/projects-gustavo/to-do"
    }
  ]

  return (
    <div className="w-full text-white md:h-screen" id="projects">
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 text-center mt-20">
          <h1 className="text-4xl font-bold inline">Projetos</h1>
          <p className="py-3">Confira aqui alguns dos meus trabalhos</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {
            projects.map(({ id, src, alt, visit, code }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg bg-backgroundSecondary"
              >
                <div className="overflow-hidden">
                  <img
                    src={src}
                    className="rounded-md hover:scale-105 ease-in duration-300"
                    alt={alt}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={visit}
                    className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary"
                    target="_blank"
                  >
                    <button className="w-1/2 px-6 py-3 m-4 duration-300">Visitar</button>
                  </a>
                  <a
                    href={code}
                    className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary"
                    target="_blank">
                    <button className="w-1/2 px-6 py-3 m-4 duration-300">Repositório</button>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
