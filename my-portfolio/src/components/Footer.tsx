import Image from 'next/image'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='border-t border-gray-400 py-8 flex flex-col justify-center items-center'>
      <div className='flex justify-between w-[1200px]'>
        <div className='pb-12'>
          <div className='flex gap-2 pb-4'>
            <Image src={"/letraP.png"} alt='letraP' width={10} height={10}/>
            <p className='font-bold text-white'>Pedro</p>
            <p className='text-gray-400'>pedro.ferraz01@gmail.com</p>
          </div>
          <p className='text-gray-400'>Desenvolvedor Fullstack e Devops/Cibersegurança Entusiasta</p>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-white font-bold text-2xl'>Midia</p>
          <div className='flex gap-2'>
            <Link href={'https://github.com/PedroSantanaa'} target='_blank'><GitHubIcon className='text-gray-400'/></Link>
            <Link href={'https://www.linkedin.com/in/pedro-santana-7305151a5/'} target='_blank'><LinkedInIcon className='text-gray-400'/></Link>
            <Link href={'mailto:pedro.ferraz01@gmail.com'} target='_blank'><EmailIcon className='text-gray-400'/></Link>
          </div>
        </div>
      </div>
        <p className='text-gray-400'>© Copyright 2023. Feito por Pedro</p>
    </div>

  )
}

export default Footer