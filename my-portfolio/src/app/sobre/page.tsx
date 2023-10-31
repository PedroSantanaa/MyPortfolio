import Aboutme from '@/components/Aboutme'
import React from 'react'
import Image from 'next/image'
import Exp from '@/components/Exp'
import Skills from '@/components/Skills'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Aboutme titleIcon='/'/>
      <div className='w-[88%] 2xl:w-[1500px] 2xl:h-[408px] mx-auto mt-36'>
        <div className='flex gap-4'>
          <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>#</span>Experiências</h1>
          <Image src={'/line2.svg'} alt='line2' width={800} height={2} className='hidden lg:block'/>
        </div>
          <Exp/>
        </div>
      <Skills/>
    </div>
  )
}

export default page