"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex h-20 bg-[#282C33]'>
      <div className='hidden lg:flex lg:flex-col lg:mr-12 lg:ml-4 lg:items-center'>
        <Image src={'/line.svg'} alt='line' width={3} height={192}/> 
        <Link href={" https://github.com/PedroSantanaa"}><Image src={'/github.svg'} alt='github' width={40} height={40}/></Link>
        <Link href={"https://www.linkedin.com/in/pedro-santana-7305151a5/"}><Image src={'linkedin.svg'} alt='linkedin' width={36} height={36}/></Link>
      </div>
      <div className='w-[88%] 2xl:w-[1500px] mx-auto pt-8 pb-2 flex px-2 justify-between self-start'>
        <div className='text-white font-bold flex gap-1'>
          <Link href={"/"}><Image src={"/letraP.png"} alt='letraP' width={25} height={25}></Image></Link>
          <Link href={"/"} className='text-base'>Pedro</Link>
        </div>
        <div>          
        <div className='lg:hidden'>
          <Image src={'/hamburguer.svg'} alt='menuHamburguer' width={24} height={24}/>
        </div>
          <ul className='hidden lg:flex lg:justify-center lg:gap-8 lg:font-medium lg:text-base'>
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