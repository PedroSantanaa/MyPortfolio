import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import Image from 'next/image'



const projectsBase = [{imageUrl:'/todolist.png',stack:'React Typescript NestJS Auth Postgress Tailwind',title:"Todo List",desc:"Todo List FullStack",urlSite:"https://todo-list-ps.vercel.app/login",urlGithub:'https://github.com/PedroSantanaa/Todo-List'},{imageUrl:'/mtg.jpeg',stack:'C# .Net Swagger Entity Framework MySQL',title:"API MTG Cards",desc:"API do Magic Cards",urlGithub:'MTG_WEBAPI_NET'},{imageUrl:'/commerce.png',stack:'React Typescript LocalStorage CSS Modules',title:"E-Commerce ",desc:"E-Commerce com local storage",urlSite:"https://e-commerce-doces.vercel.app/",urlGithub:'https://github.com/PedroSantanaa/e-commerce-doces'}]

type Props={
  titleIcon:string
  projects?: Array<{
    imageUrl: string;
    stack: string;
    title: string;
    desc: string;
    urlSite?: string;
    urlGithub: string;
  }>;
}


const Projects = ({titleIcon,projects}:Props) => {
  return (
    <div className='h-[720px]'>
      <div id='projects' className='2xl:w-[1500px] w-[88%] mx-auto pt-10'>
          <div className='flex gap-4'>
            <Image src={'/line4.svg'} alt='line2' width={95} height={2} />
            <h1 className='text-black font-medium text-3xl'><span className='text-[#C778DD]'>{titleIcon}</span>projetos</h1>
            <Image src={'/line2.svg'} alt='line2' width={167} height={2} className='hidden md:block' />
          </div>
        <p className='w-[65%] mt-5'>Aqui estão os projetos que me inspiram. Desde iniciativas transformadoras até soluções criativas para desafios complexos, estes são os trabalhos que refletem minha paixão e excelência. Venha conferir o que fiz, e imagine o que podemos realizar juntos.</p>
        {projects ? (<ProjectCard data={projects}/>) : (<ProjectCard data={projectsBase}/>)}
      </div>
    </div>
  )
}

export default Projects