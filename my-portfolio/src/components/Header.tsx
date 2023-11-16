"use client"
import { Box, Modal, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };
  return (
    <div id='top' className='fixed top-0 left-0 right-0 z-50 flex h-20 bg-[#000000]'>
    
      <div className='w-[88%] 2xl:w-[1500px] mx-auto pb-2 flex px-2 justify-between self-start'>
        <div className=''>
          <Link href={"#top"}><Image src={"/logoPedro.svg"} alt='logoP' width={206} height={92}></Image></Link>
        </div>
        <div>          
        <div className='lg:hidden pt-7'>
          <Image src={'/hamburguer.svg'} alt='menuHamburguer' width={24} height={24} onClick={toggleMenu} className='cursor-pointer'/>
           <Modal
              open={menuOpen}
              onClose={toggleMenu}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className='lg:hidden'
              >
        <Box className='w-full h-screen bg-[#000000] lg:hidden'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='flex justify-between p-4 font-fira'>
            <div className='flex gap-3 text-white font-bold'>
              <Link href={"#top"}><Image src={"/logoPedro.svg"} alt='letraP' width={111} height={50} onClick={toggleMenu}></Image></Link>
            </div>
            <div><Image src={'/X.svg'} alt='close' width={24} height={24} onClick={toggleMenu}/></div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='font-fira'>
            <ul className='flex flex-col gap-8 mt-12 ml-4 text-4xl font-medium' >
            <Link href={'#top'}><span className='text-[#C778DD]'>#</span><span className={'text-white'} onClick={toggleMenu}>home</span></Link>
            <Link href={"#projects"}><span className='text-[#C778DD]'>#</span><span className={'text-white'} onClick={toggleMenu}>projetos</span></Link>
            <Link href={"#skills"}><span className='text-[#C778DD]'>#</span><span className={'text-white'}>skills</span></Link>
            <Link href={"#sobre"}><span className='text-[#C778DD]'>#</span><span className={'text-white'} onClick={toggleMenu}>sobre mim</span></Link>
            <Link href={"#contato"}><span className='text-[#C778DD]'>#</span><span className={'text-white'} onClick={toggleMenu}>contatos</span></Link>
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
          <ul className='hidden text-white items-center lg:pt-9 lg:flex lg:justify-center lg:gap-7 lg:font-medium lg:text-base'>
            <Link href={'#top'}><span className='text-[#C778DD]'>#</span><span >home</span></Link>
            <Link href={"#projects"}><span className='text-[#C778DD]'>#</span><span >projetos</span></Link>
            <Link href={"#skills"}><span className='text-[#C778DD]'>#</span><span >skills</span></Link>
            <Link href={"#sobre"}><span className='text-[#C778DD]'>#</span><span >sobre mim</span></Link>
            <Image src={'/line3.svg'} alt='line3' width={1} height={41}/>
            <Link href={"#contato"} className='border border-white rounded-lg px-7 py-2'><span className='text-[#C778DD]'>#</span><span >contate-me</span></Link>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Header