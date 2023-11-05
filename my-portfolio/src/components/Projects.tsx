import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import Image from 'next/image'



const projectsBase = [{imageUrl:'/todolist.png',stack:'React Typescript NestJS Auth Postgress Tailwind',title:"Todo List",desc:"Todo List FullStack",urlSite:"https://todo-list-ps.vercel.app/login",urlGithub:'https://github.com/PedroSantanaa/Todo-List'},{imageUrl:'/mtg.png',stack:'C# .Net Swagger Entity Framework MySQL',title:"API MTG Cards",desc:"API do Magic Cards",urlGithub:'MTG_WEBAPI_NET'},{imageUrl:'/commerce.png',stack:'React Typescript LocalStorage CSS Modules',title:"E-Commerce ",desc:"E-Commerce com local storage",urlSite:"https://e-commerce-doces.vercel.app/",urlGithub:'https://github.com/PedroSantanaa/e-commerce-doces'}]

type Props={
  titleIcon:string
  title?:string
  projects?: Array<{
    imageUrl: string;
    stack: string;
    title: string;
    desc: string;
    urlSite?: string;
    urlGithub: string;
  }>;
}


const Projects = ({titleIcon,title,projects}:Props) => {
  return (
    <div className='2xl:w-[1500px] w-[88%] mx-auto mt-8 md:mt-36'>
      {title ? (
        <div className='flex gap-4 mb-14'>
          <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>{titleIcon}</span>{title}</h1>
          <Image src={'/line2.svg'} alt='line2' width={800} height={2} className='hidden lg:block lg:w-[80%]'/>
        </div>
        
        ) 
        :
        (
        <div className='mb-14 flex justify-between items-center'>
        <div className='flex gap-4'>
          <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>{titleIcon}</span>projetos</h1>
          <Image src={'/line2.svg'} alt='line2' width={800} height={2} className='hidden lg:block lg:w-[80%]'/>
        </div>
          <Link href='/projetos' className='font-medium text-base text-white' >{'Ver todos ~~>'}</Link> 
          </div> 
          )}
      {projects ? (<ProjectCard data={projects}/>) : (<ProjectCard data={projectsBase}/>)}
    </div>
  )
}

export default Projects
