
import Image from 'next/image'
import React from 'react'
import Button from './Button'

type Props = {
  data: Array<{
    title: string,
    content: string
  }>
}

const SkillCard = ({data}: Props) => {
  return (
    <div className='grid grid-rows-6 md:grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 mx-8 2xl:w-[600px]'>
      {data.map((item,idx)=>{
        return(
          <div key={idx} className='border border-gray-400 flex-col justify-start items-start inline-flex w-[200px]'>       
              <div className='border-b border-gray-400 p-2 w-full'>
                <p className='font-medium text-white '>{item.title}</p>
              </div>
              <div className='p-2'>
                <p className='text-[#ABB2BF]'>{item.content}</p>
              </div>
          </div>
        )
      })}
      <div></div>
    </div>
  )
}

export default SkillCard