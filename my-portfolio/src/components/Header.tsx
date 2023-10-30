"use client"
import { Box, Modal, Typography } from '@mui/material'
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
          <Link href={"/"} className='text-base' >Pedro</Link>
        </div>
        <div>          
        <div className='lg:hidden'>
          <Image src={'/hamburguer.svg'} alt='menuHamburguer' width={24} height={24} onClick={toggleMenu} className='cursor-pointer'/>
           <Modal
              open={menuOpen}
              onClose={toggleMenu}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className='lg:hidden'
              >
        <Box className='w-full h-screen bg-[#282C33] lg:hidden'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='flex justify-between p-4 font-fira'>
            <div className='flex gap-3 text-white font-bold'>
              <Link href={"/"}><Image src={"/letraP.png"} alt='letraP' width={25} height={25} onClick={toggleMenu}></Image></Link>
              <Link href={"/"} className='text-base' onClick={toggleMenu}>Pedro</Link>
            </div>
            <div><Image src={'/X.svg'} alt='close' width={24} height={24} onClick={toggleMenu}/></div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='font-fira'>
            <ul className='flex flex-col gap-8 mt-12 ml-4 text-4xl font-medium' >
            <Link href={'/'}><span className='text-[#C778DD]'>#</span><span className={pathname === '/' ? 'text-white' : 'text-[#ABB2BF]'} onClick={toggleMenu}>home</span></Link>
            <Link href={"/projetos"}><span className='text-[#C778DD]'>#</span><span className={pathname === '/projetos' ? 'text-white' : 'text-[#ABB2BF]'} onClick={toggleMenu}>projetos</span></Link>
            <Link href={"/sobre"}><span className='text-[#C778DD]'>#</span><span className={pathname ==="/sobre" ? 'text-white': 'text-[#ABB2BF]'} onClick={toggleMenu}>sobre mim</span></Link>
            <Link href={"/contatos"}><span className='text-[#C778DD]'>#</span><span className={pathname === '/contatos' ?'text-white' : 'text-[#ABB2BF]'} onClick={toggleMenu}>contatos</span></Link>
          </ul>
          </Typography>
          <Typography id="modal-modal-social" className='mt-28 flex justify-center items-center'>
            <div className='flex gap-4'>
              <Link href={" https://github.com/PedroSantanaa"}><Image src={'/github.svg'} alt='github' width={60} height={60}/></Link>
              <Link href={"https://www.linkedin.com/in/pedro-santana-7305151a5/"}><Image src={'linkedin.svg'} alt='linkedin' width={60} height={60}/></Link>
      </div>
          </Typography>
        </Box>
      </Modal>
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