import Image from 'next/image'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='w-[1500px] flex flex-col gap-5 mx-auto mt-36'>
      <div className='mb-14 flex gap-6'>
        <div className='flex gap-4'>
          <h1 className='text-white font-medium text-3xl'><span className='text-[#C778DD]'>#</span>Contato</h1>
          <Image src={'/line2.svg'} alt='line2' width={800} height={2}/>
        </div>
    </div>
        <div className='flex justify-between'>
          <p className=' w-[600px] text-gray-400'>Estou interessado em contrato CLT ou PJ. Entretanto, se voce tem algum freelancer sinta-se a vontade para me contatar</p>
          <div className='flex flex-col gap-4 border border-gray-400 p-4'>
            <p className='text-white'>Mande mensagem pro aqui</p>
            <div className='flex gap-2'>
              <EmailIcon className='text-gray-400'/>
              <p className='text-gray-400'>pedro.ferraz01@gmail.com</p>
            </div>
            <div className='flex gap-2'>
              <Link href={"https://www.linkedin.com/in/pedro-santana-7305151a5/"} target='_blank'><LinkedInIcon className='text-gray-400'/></Link>
              <p className='text-gray-400'>in/pedro-santana-7305151a5</p>
            </div>
          </div>
          </div>     
    </div>
  )
}

export default Contact