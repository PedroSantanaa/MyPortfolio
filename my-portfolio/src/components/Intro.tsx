import React from 'react'
import Button from './Button'
import Image from 'next/image'

type Props = {}

function Intro({}: Props) {
  return (
    <div className='bg-black h-[720px]'>
      <div id='home' className='pt-36 w-[88%] 2xl:w-[1500px] 2xl:h-[423px] mx-auto flex flex-wrap justify-center sm:justify-between items-center'>
        <div className='flex flex-col gap-8 w-[300px] 2xl:w-[800px] 2xl:h-[227px]'>
          <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-white'>Pedro é um <span className='text-[#C778DD]'>Desenvolvedor FullStack</span> e <span className='text-[#C778DD]'>Devops/Cibersegurança Entusiasta</span></h1>
          <p className='text-base text-[#ABB2BF] font-normal'>Faço aplicações responsivas e funcionais além de performáticas</p>
          <Button content='Contate-me!' type='red' redirect='#contato'/>
        </div>
        <div>
          <Image src={'/mainFoto.svg'} alt='foto1' width={540} height={478} className='hidden w-[350px] h-[402px] sm:block lg:w-full lg:h-full'/>
        </div>
      </div>
    </div>
  )
}

export default Intro