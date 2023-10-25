import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const projects = [{imageUrl:'/todolist.png',stack:'React Typescript NestJS Auth Postgress Tailwind',title:"Todo List",desc:"Todo List FullStack",urlSite:"https://todo-list-ps.vercel.app/login",urlGithub:'https://github.com/PedroSantanaa/Todo-List'},{imageUrl:'/mtg.jpeg',stack:'C# .Net Swagger Entity Framework MySQL',title:"API MTG Cards",desc:"API do Magic Cards",urlGithub:'MTG_WEBAPI_NET'},{imageUrl:'/todolist.png',stack:'React Typescript NestJS Auth Postgress Tailwind fsdfsdfsdfsdfsdfsdfsdfsdfsdfsd',title:"Todo List",desc:"Todo List FullStack",urlSite:"https://todo-list-ps.vercel.app/login",urlGithub:'https://github.com/PedroSantanaa/Todo-List'}]

const Projects = (props: Props) => {
  return (
    <div className='w-[1500px] mx-auto mt-36'>
      <div className='mb-14 flex justify-between'>
        <div className='flex gap-4'>
          <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>#</span>projetos</h1>
          <Image src={'/line2.svg'} alt='line2' width={800} height={2}/>
        </div>
        <Link href='/projetos' className='font-medium text-base text-white' >{'Ver todos ~~>'}</Link>
      </div>
      <ProjectCard data={projects}/>
    </div>
  )
}

export default Projects