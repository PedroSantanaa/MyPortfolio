import React from 'react'
import Button from './Button'
import Image from 'next/image'

type Props = {}

function Intro({}: Props) {
  return (
    <div className='mt-16 w-[1500px] h-[423px] mx-auto flex justify-between'>
      <div className='flex flex-col gap-8 w-[800px] h-[227px] py-20'>
        <h1 className='text-4xl font-semibold text-white'>Pedro é um <span className='text-[#C778DD]'>Desenvolvedor FullStack</span> e <span className='text-[#C778DD]'>Devops/Cibersegurança Entusiasta</span></h1>
        <p className='text-base text-[#ABB2BF] font-normal'>Ele faz aplicações responsiveis e funcionais além de perfomáticas</p>
        <Button content='Contate-me!!' type='red' redirect='/contatos'/> 
      </div>
      <div className='relative w-[496px] h-[423px]'>
        <Image src={'/backFoto1.svg'} alt='backfoto' width={155} height={155} className='absolute top-40 left-0'/>
        <Image src={'/foto1.png'} alt='foto1' width={1024} height={423} className='w-full h-full relative z-10 border-b border-r border-[#C778DD] '/>
        <Image src={'/dots.svg'} alt='dots' width={84} height={84} className='absolute bottom-3 right-6 z-20'/>
      </div>
    </div>
  )
}

export default Intro