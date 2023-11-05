import Projects from '@/components/Projects'
import SmallProjectCard from '@/components/SmallProjectCard'
import React from 'react'

const completedProjects = [{imageUrl:'/todolist.png',stack:'React Typescript NestJS Auth Postgress Tailwind',title:"Todo List",desc:"Todo List FullStack",urlSite:"https://todo-list-ps.vercel.app",urlGithub:'https://github.com/PedroSantanaa/Todo-List'},{imageUrl:'/mtg.png',stack:'C# .Net Swagger Entity Framework MySQL',title:"API MTG Cards",desc:"API do Magic Cards",urlGithub:'MTG_WEBAPI_NET'},{imageUrl:'/commerce.png',stack:'React Typescript LocalStorage CSS Modules',title:"E-Commerce ",desc:"E-Commerce com local storage",urlSite:"https://e-commerce-doces.vercel.app/",urlGithub:'https://github.com/PedroSantanaa/e-commerce-doces'},{imageUrl:'/arduino.png',stack:'C# Entity Framework MySQL Arduino',title:"Sistema de Medição em Tempo Real com IoT e Banco de Dados",desc:"Conexção entre C# e Arduino em tempo real",urlGithub:'https://github.com/PedroSantanaa/Arduino-and-C-Connection'},{imageUrl:'/portfolio.png',stack:'React Next Typescript Tailwind',title:"Meu Portfolio",desc:"Portfolio",urlSite:"https://meu-portfolio-ten-psi.vercel.app/",urlGithub:'https://github.com/PedroSantanaa/MyPortfolio'}]

const smallProjects = [{stack:'React Typescript',title:"Estudo sobre React",desc:"Repositorio de todo estudo de react",urlGithub:'https://github.com/PedroSantanaa/React-Study'},{stack:'Html Css Javascript Typescript Node React Bootstrap',title:"FullStack estudos",desc:"Curso da OneBitcode",urlGithub:'https://github.com/PedroSantanaa/FullStack-Studying'},{stack:'C# .NET',title:"Estudos C#",desc:"Repositorio sobre estudo em C#",urlGithub:'https://github.com/PedroSantanaa/C-Sharp--study'},{stack:'Next Js Tailwind Axios Typescript',title:"Projeto de desafio estágio",desc:"Site para um desafio de uma vaga de estágio",urlGithub:'https://github.com/PedroSantanaa/Projeto-Estagio-App'}]

const page = () => {
  return (
    <div>
      <div className='mt-36 w-[88%] mx-auto 2xl:w-[1500px] flex flex-col gap-3'>
        <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>{'/'}</span>projetos</h1>
        <p className='text-gray-400'>Lista dos meus projetos</p>
      </div>
      <Projects titleIcon='#' title="projetos-completos" projects={completedProjects}/>

      <div className='mt-36 w-[88%] mx-auto 2xl:w-[1500px] flex flex-col gap-3 mb-16'>
        <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>{'#'}</span>projetos-pequenos</h1>
      </div>
      <SmallProjectCard data={smallProjects}/>
    </div>
  )
}

export default page