import Image from 'next/image'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

type Props={
  titleIcon: string
}


const Contact = ({titleIcon}:Props) => {
  return (
    <div className='h-[720px] bg-black'>
      <div id='contato' className='w-[88%] 2xl:w-[1500px] flex flex-col mx-auto pt-10'>
        <div className='mb-5 flex gap-6'>
          <div className='flex gap-4'>
           <Image src={'/line4.svg'} alt='line2' width={95} height={2} />
            <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>{titleIcon}</span>contatos</h1>
            <Image src={'/line2.svg'} alt='line2' width={167} height={2} className='hidden md:block' />
          </div>
      </div>
          <div className='flex flex-col gap-20'>
            <p className='w-[80%] sm:w-[600px] text-gray-400 text-base sm:text-2xl'>Estou aberto a oportunidades tanto no regime CLT quanto como PJ. Se você está em busca de um freelancer com experiência, sinta-se à vontade para entrar em contato comigo.</p>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'>
                <Link href={'mailto:pedro.ferraz01@gmail.com'}>
                  <EmailIcon className='text-gray-400'/>
                </Link>
                <Link href={'mailto:pedro.ferraz01@gmail.com'} className='text-white text-base sm:text-2xl'>pedro.ferraz01@gmail.com</Link>
              </div>
              <div className='flex gap-2'>
                <Link href={"https://www.linkedin.com/in/pedro-santana-7305151a5/"} target='_blank'><LinkedInIcon className='text-white text-base sm:text-2xl'/></Link>
                <Link href={'https://www.linkedin.com/in/pedro-santana-7305151a5/'} className='text-white text-base sm:text-2xl'>in/pedro-santana-7305151a5</Link>
              </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Contact