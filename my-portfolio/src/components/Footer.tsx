import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black'>
      <div className='border-t border-white flex flex-col justify-center items-center '>
        <div className='flex flex-wrap gap-4 justify-center items-center 2xl:justify-between w-[88%] 2xl:w-[1500px]'>
          <div className='2xl:pb-12'>
            <div className='flex gap-2 pb-4 justify-center items-center lg:justify-normal'>
              <Link href={"#top"}><Image src={"/logoPedro.svg"} alt='logoP' width={206} height={92}></Image></Link>
            </div>
            <p className='text-gray-400'>Desenvolvedor Fullstack e Devops/Cibersegurança Entusiasta</p>
            <div className='flex gap-2'>
              <Link href={'https://github.com/PedroSantanaa'} target='_blank'><Image src={'/githubIcon.svg'} width={40} height={40} alt='githubIcon'/></Link>
              <Link href={'https://www.linkedin.com/in/pedro-santana-7305151a5/'} target='_blank'><Image src={'/linkedinIcon.svg'} width={40} height={40} alt='linkedinIcon'/></Link>
              <Link href={'mailto:pedro.ferraz01@gmail.com'} target='_blank'><Image src={'/emailIcon.svg'} width={40} height={40} alt='emailIcon'/></Link>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2'>
              <Link href={"#contato"} className='border border-white rounded-lg px-7 py-2 text-white text-xl'><span className='text-[#C778DD]'>#</span><span >contate-me</span></Link>         
            </div>
          </div>
        </div>
          <p className='text-white text-xl font-inika font-bold'>© Copyright 2023. Feito por Pedro</p>
      </div>
    </div>

  )
}

export default Footer