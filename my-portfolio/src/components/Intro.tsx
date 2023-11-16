import React from 'react'
import Button from './Button'
import Image from 'next/image'

type Props = {}

function Intro({}: Props) {
  return (
<<<<<<< HEAD
    <div id='home' className='mt-12 lg:mt-32 w-[88%] 2xl:w-[1500px] 2xl:h-[423px] mx-auto flex flex-wrap justify-center lg:justify-between items-center'>
      <div className='flex flex-col gap-8 w-[300px] 2xl:w-[800px] 2xl:h-[227px] py-20'>
=======
    <div className='mt-12 lg:mt-24 w-[88%] 2xl:ml-20 2xl:w-[1500px] 2xl:h-[423px] mx-auto flex flex-wrap justify-center lg:justify-between items-center'>
      <div className='flex flex-col gap-8 w-[300px] 2xl:w-[800px] 2xl:h-[227px] py-8'>
>>>>>>> 416a2b95bdf5f1c456259eeadb3a28140ed7a539
        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-white'>Pedro é um <span className='text-[#C778DD]'>Desenvolvedor FullStack</span> e <span className='text-[#C778DD]'>Devops/Cibersegurança Entusiasta</span></h1>
        <p className='text-base text-[#ABB2BF] font-normal'>Faço aplicações responsivas e funcionais além de performáticas</p>
        <Button content='Contate-me!' type='red' redirect='/contatos'/> 
      </div>
      <div >
        <Image src={'/foto1.png'} alt='foto1' width={457} height={386} className='border-b border-r border-[#C778DD] '/>
      </div>
    </div>
  )
}

export default Intro