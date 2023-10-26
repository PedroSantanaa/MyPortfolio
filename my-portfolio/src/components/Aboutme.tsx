
import Image from 'next/image'
import Button from './Button'


const Aboutme = () => {
  return (
    <div className='w-[1500px] h-[508px] mx-auto mt-36 flex'>
      <div className='mb-14 flex flex-col gap-6'>
        <div className='flex gap-4'>
          <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>#</span>Sobre mim</h1>
          <Image src={'/line2.svg'} alt='line2' width={800} height={2}/>
        </div>
        <div className='flex flex-col gap-7 w-[600px] '>
            <p className='text-gray-400'>Olá, meu nome é Pedro Santana Ferraz de Oliveira!!</p>
            <p className='text-gray-400'>Eu sou um desenvolvedor fullstack auto didata, moro na Bahia,Brasil. Eu posso desenvolver aplicações responsivas e funcionais desde o rascunho até o projeto final e de forma objetiva e perfomática, tanto aplicações front-end quanto back-end.</p>
            <p className='text-gray-400'>Transformando minha paixao por programação que começou em 2018 em projetos reais e de grande valor. Venho sempre estudando para me manter atualizado nas tecnologias. Além disso, sou um entusiasta em Cibersegurança/Devops.</p>
            <Button type='red' content='Leia Mais ->' redirect='/sobre' />
          </div>
      </div>
      <div className='flex justify-between align-middle'>        
        <Image src={'/fotoSobre.png'} alt='foto' width={339} height={507} className='border-b border-[#C778DD]'/>
      </div>
    </div>
  )
}

export default Aboutme