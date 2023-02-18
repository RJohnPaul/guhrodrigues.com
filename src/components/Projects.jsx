import React from 'react'

// Images
import portfolio from '/assets/img/portfolio.jpg'
import moviecorn from '/assets/img/moviecorn.jpg'
import musicplayer from '/assets/img/musicplayer.jpg'
import calculator from '/assets/img/calculator.jpg'

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
      src: moviecorn,
      alt: "MovieCorn",
      visit: "https://moviecorn.vercel.app/",
      code: "https://github.com/projects-gustavo/moviecorn"
    },
    {
      id: 3,
      src: musicplayer,
      alt: "Music Player",
      visit: "https://projects-gustavo.github.io/music-player/",
      code: "https://github.com/projects-gustavo/music-player"
    },
    {
      id: 4,
      src: calculator,
      alt: "Calculadora",
      visit: "https://projects-gustavo.github.io/calculator/",
      code: "https://github.com/projects-gustavo/calculator"
    },
  ]

  return (
    <div className="w-full text-white md:h-screen" id="projects">
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 text-center mt-20">
          <h1 className="text-4xl inline">Projetos</h1>
          <p className="py-3 text-gray-400">Confira aqui alguns dos meus trabalhos</p>
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
                    className="rounded-md hover:scale-105 ease-in-out duration-300"
                    alt={alt}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={visit}
                    className="font-medium text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary"
                    target="_blank"
                  >
                    <button className="w-1/2 px-6 py-3 m-4 duration-300">Visitar</button>
                  </a>
                  <a
                    href={code}
                    className="font-medium text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary"
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
