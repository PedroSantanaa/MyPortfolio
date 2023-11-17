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
      <div id='contato' className='w-[88%] 2xl:w-[1500px] flex flex-col gap-5 mx-auto pt-10'>
        <div className='mb-14 flex gap-6'>
          <div className='flex gap-4'>
           <Image src={'/line4.svg'} alt='line2' width={95} height={2} />
            <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>{titleIcon}</span>contatos</h1>
            <Image src={'/line2.svg'} alt='line2' width={167} height={2} />
          </div>
      </div>
          <div className='flex flex-wrap gap-8 2xl:justify-between'>
            <p className=' w-[600px] text-gray-400'>Estou interessado em contrato CLT ou PJ. Entretanto, se voce tem algum freelancer sinta-se a vontade para me contatar</p>
            <div className='flex flex-col gap-4 border border-gray-400 p-4'>
              <p className='text-white'>Mande mensagem por aqui</p>
              <div className='flex gap-2'>
                <Link href={'mailto:pedro.ferraz01@gmail.com'}>
                  <EmailIcon className='text-gray-400'/>
                </Link>
                <Link href={'mailto:pedro.ferraz01@gmail.com'} className='text-gray-400'>pedro.ferraz01@gmail.com</Link>
              </div>
              <div className='flex gap-2'>
                <Link href={"https://www.linkedin.com/in/pedro-santana-7305151a5/"} target='_blank'><LinkedInIcon className='text-gray-400'/></Link>
                <Link href={'https://www.linkedin.com/in/pedro-santana-7305151a5/'} className='text-gray-400'>in/pedro-santana-7305151a5</Link>
              </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Contact