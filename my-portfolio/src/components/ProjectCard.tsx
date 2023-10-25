import Image from 'next/image'
import React from 'react'
import Button from './Button'

type Props = {
  data: Array<{
    imageUrl: string,
    stack: string,
    title: string,
    desc: string,
    urlSite?: string,
    urlGithub: string
  }>
}

const ProjectCard = ({data}: Props) => {
  return (
    <div className='inline-flex gap-4'>
      {data.map((item,idx)=>{
        return(
          <div key={idx} className='border border-gray-400 flex-col justify-start items-start inline-flex relative z-30'>       
            <Image src={item.imageUrl} alt={item.title} width={1024} height={0} className='h-[240px] border-b border-gray-400 bg-cover bg-no-repeat relative z-10'/>
            <div className='p-4'>
              <p className='text-base font-normal text-[#ABB2BF]'>{item.stack}</p>
            </div>
            <div className='self-stretch p-4 border-t border-gray-400 flex-col justify-start items-start gap-4 flex h-auto '>
              <h2 className='font-medium text-2xl text-white '>{item.title}</h2>
              <p className='text-[#ABB2BF]'>{item.desc}</p>
              <div className='flex gap-4'>
                {item.urlSite ? <Button content='Site <~>' type='red' redirect={item.urlSite}/> : null}
                <Button content='Github <~>' type='gray' redirect={item.urlGithub} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard