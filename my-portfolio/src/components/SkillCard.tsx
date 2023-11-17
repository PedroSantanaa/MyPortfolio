
import Image from 'next/image'
import React from 'react'
import Button from './Button'

type Props = {
  data: {
    title: string,
    imageUrl: string
  }
}

const SkillCard = ({data}: Props) => {
  return (
     <div className='rounded-md flex flex-col gap-4 justify-center items-center bg-[#00000066] box-shadow-custom w-[64px] h-[72px] md:w-[128px] md:h-[135px] xl:w-[148px] xl:h-[155px]'> 
        <Image src={data.imageUrl} alt='skills' width={92} height={93} className='w-[43px] h-43px] md:w-[75px] lg:h-[75px] xl:w-full xl:h-full' />
        <p className='text-white text-[10px] md:text-base'>{data.title}</p>     
      </div>

    )
}

export default SkillCard