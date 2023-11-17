
import Image from 'next/image'
import Button from './Button'
import { title } from 'process'
import Exp from './Exp'

type Props={
  titleIcon: string
}

const Aboutme = ({titleIcon}:Props) => {
  return (
    <div className='h-[720px]'>
      <div id='sobre' className='w-[88%] 2xl:w-[1500px] 2xl:h-[508px] mx-auto pt-10'>
        <div className='mb-14 flex flex-col gap-6'>
          <div className='flex gap-4'>
            <Image src={'/line4.svg'} alt='line2' width={95} height={2} />
            <h1 className='text-black font-medium text-3xl'><span className='text-[#C778DD]'>{titleIcon}</span>sobre mim</h1>
            <Image src={'/line2.svg'} alt='line2' width={167} height={2} />
          </div>
        </div>
        <div className='flex gap-10 text-center'>
          <div className='flex flex-col gap-7 w-[650px]'>
              <p className='text-black'>Olá, meu nome é Pedro Santana Ferraz de Oliveira!!</p>
              <p className='text-black text-xs 2xl:text-base'>Eu sou um desenvolvedor fullstack auto didata, moro na Bahia,
              Brasil. Eu posso desenvolver aplicações responsivas e funcionais desde o rascunho até o projeto final e de forma objetiva e performática, tanto aplicações front-end quanto back-end.</p>
              <p className='text-black text-xs 2xl:text-base'>Transformando minha paixão por programação, que começou em 2018, em projetos reais e de grande valor. Venho sempre estudando para me manter atualizado nas tecnologias. Além disso, sou um entusiasta em Cibersegurança/Devops.</p>
            </div>
            <div>
              <p className='text-xl font-bold'>Experiências</p>
                        <Exp/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme