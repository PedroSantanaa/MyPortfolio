"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  const pathname = usePathname(); 
  return (
    <div className='flex'>
      <div className='flex flex-col ml-8 items-center justify-center'>
        <Image src={'/line.svg'} alt='line' width={2} height={192}></Image>
        <Link href={" https://github.com/PedroSantanaa"}><Image src={'/github.svg'} alt='github' width={40} height={40}/></Link>
        <Link href={"https://www.linkedin.com/in/pedro-santana-7305151a5/"}><Image src={'linkedin.svg'} alt='linkedin' width={36} height={36}/></Link>
      </div>
      <div className='w-[1024px] mx-auto pt-8 pb-2 flex justify-between'>
        <div className='text-white font-bold flex gap-1'>
          <Link href={"/"}><Image src={"/letraP.png"} alt='letraP' width={25} height={25}></Image></Link>
          <Link href={"/"} className='text-base'>Pedro</Link>
        </div>
        <div>
          <ul className='flex justify-center flex-row gap-8 font-medium text-base'>
            <Link href={'/'}><span className='text-[#C778DD]'>#</span><span className={pathname === '/' ? 'text-white' : 'text-[#ABB2BF]'}>home</span></Link>
            <Link href={"/projetos"}><span className='text-[#C778DD]'>#</span><span className={pathname === '/projetos' ? 'text-white' : 'text-[#ABB2BF]'}>projetos</span></Link>
            <Link href={"/sobre"}><span className='text-[#C778DD]'>#</span><span className={pathname ==="/sobre" ? 'text-white': 'text-[#ABB2BF]'}>sobre mim</span></Link>
            <Link href={"/contatos"}><span className='text-[#C778DD]'>#</span><span className={pathname === '/contatos' ?'text-white' : 'text-[#ABB2BF]'}>contatos</span></Link>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Header