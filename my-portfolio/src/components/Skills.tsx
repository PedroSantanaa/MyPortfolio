import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SkillCard from './SkillCard'

type Props = {}

const skills = [{title : 'Javascript', imageUrl: '/javascript.svg'}, {title:'Typescript', imageUrl:'/type.svg'},{title:'Node.js',imageUrl:'/node.svg'}, {title:'Python',imageUrl:'/python.svg'}, {title:'C#',imageUrl: '/c.svg'}, {title:'MySQL',imageUrl:'/mysql.svg'},{title:'React.js',imageUrl:'/react.svg'},{title:'Next.js',imageUrl:'/next1.svg'},{title:'Tailwind',imageUrl:'/tail.svg'},{title:'PostgreSQL',imageUrl:'/post.svg'},{title:'Docker',imageUrl:'/docker.svg'}]
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
        <p className='font-bold text-[#E0E5EB] text-3xl'>Habilidades que uso para entender e resolver problemas</p>
        <div className='grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-6 xl:gap-10 w-fit mx-auto pt-14'>
          {skills.map((skill, index) => (
            <SkillCard key={index} data={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills