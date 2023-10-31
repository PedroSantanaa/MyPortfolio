
import Image from 'next/image'
import Button from './Button'
import { title } from 'process'

type Props={
  titleIcon: string
}

const Aboutme = ({titleIcon}:Props) => {
  return (
    <div className='w-[88%] 2xl:w-[1500px] 2xl:h-[508px] mx-auto mt-8 2xl:mt-36 flex flex-wrap justify-center items-center lg:justify-between '>
      <div className='mb-14 flex flex-col gap-6'>
        <div className='flex gap-4'>
          <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>{titleIcon}</span>sobre mim</h1>
          <Image src={'/line2.svg'} alt='line2' width={800} height={2} className='hidden lg:block lg:w-72 2xl:w-full'/>
        </div>
        <div className='flex flex-col gap-7 w-[88%] lg:w-[450px] 2xl:w-[800px] '>
            <p className='text-gray-400'>Olá, meu nome é Pedro Santana Ferraz de Oliveira!!</p>
            <p className='text-gray-400 text-xs 2xl:text-base'>Eu sou um desenvolvedor fullstack auto didata, moro na Bahia, 
            Brasil. Eu posso desenvolver aplicações responsivas e funcionais desde o rascunho até o projeto final e de forma objetiva e perfomática, tanto aplicações front-end quanto back-end.</p>
            <p className='text-gray-400 text-xs 2xl:text-base'>Transformando minha paixão por programação, que começou em 2018, em projetos reais e de grande valor. Venho sempre estudando para me manter atualizado nas tecnologias. Além disso, sou um entusiasta em Cibersegurança/Devops.</p>
            <Button type='red' content='Experiências ->' redirect='/sobre' />
          </div>
      </div>
      <div >        
        <Image src={'/file-removebg-preview.png'} alt='foto' width={339} height={507} className='border-b border-[#C778DD] '/>
      </div>
    </div>
  )
}

export default Aboutme