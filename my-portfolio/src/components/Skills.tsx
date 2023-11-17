import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SkillCard from './SkillCard'

type Props = {}

const skills = [{title : 'Linguagens', content: 'Javascript Typescript Python C#'}, {title:'Bancos de Dados', content:'MySQL Postgres SqlServer'}, {title:'Ferramentas',content:'VSCode Visual Studio Linux Docker Jenkins Git Figma Github Actions,AWS'}, {title:'Frameworks',content: 'React Express.js NestJs Next.js  '}, {title:'Outros',content:' HTML CSS TAILWINDCSS SCSS BOOTSTRAP'},{title:'Linguas',content:'Português Nativo Inglês Avançado Espanhol Básico'}]
const Skills = (props: Props) => {
  return (
    <div className='bg-black h-[720px]'>
      <div id='skills' className='w-[88%] 2xl:w-[1500px] mx-auto pt-10'>
        <div className='flex flex-wrap justify-between'>
          <div className='flex gap-4 mb-5'>
              <Image src={'/line4.svg'} alt='line2' width={95} height={2} />
              <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>#</span>skills</h1>
              <Image src={'/line2.svg'} alt='line2' width={167} height={2} className='hidden md:block' />
          </div>
        </div>
        <SkillCard data={skills}/>
      </div>
    </div>
  )
}

export default Skills