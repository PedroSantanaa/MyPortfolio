"use client"
import React from 'react'

type Props = {}

const experiencias=[{job:'Desenvolvedor BackEnd e Sub Lider', company:'Vacuum', subTitle:'Trabalho Voluntário', where:'Remoto', time:'Abril 2023 - Setembro 2023', stack:['NestJs'], desc:['Comunidade no Discord com mais de 5000 membros;','Sub Lider para gerenciar a comunidade, além de gerenciar projetos;','Desenvolvimento da parte do BackEnd de um Fórum utilizando NestJS além de DDD e Github Projects.']},{job:'Desenvolvedor de Sistema Autônomo', company:'GIPAR', subTitle:'Bolsista', where:'Bahia', time:'Agosto 2022 - Janeiro 2023', stack:['Python','Arduino'], desc:['Grupo de Inovação e Pesquisa em Automação e Robótica;','Desenvolvimento de um sistema autônomo para uma cadeira de rodas utilizando Python e Arduino para que ela fosse possível ir a locais sozinha ou por comandos de voz.']}] 

function Exp({}: Props) {
  const [job,setJob]=React.useState('')

  const handleJob=(e:React.MouseEvent<HTMLParagraphElement>)=>{
    const text=e.currentTarget.textContent
    const jobText=text?.split(' ')[0]

    if(jobText){
      setJob(jobText)
      }
  }

  return (
    <div className='flex flex-col md:flex-row gap-10 lg:gap-28 mt-14'>
      <div className='p-10 flex flex-col gap-10'>
        {experiencias.map((exp)=>(
          <span key={exp.company} onClick={handleJob} className={`text-gray-400 font-bold lg:text-xl cursor-pointer hover:border border-none hover:bg-[#C778DD33] rounded p-3 flex justify-between w-[200px] lg:w-[300px] group ${job === exp.company ? 'border border-none bg-[#C778DD33]' : ''}`}>{exp.company} <p className={`opacity-0 group-hover:opacity-100 ${job === exp.company ? 'opacity-100' : ''}`}> {'>'} </p> </span>
        ))}
      </div>
      <div className='text-gray-400'>
        {job && experiencias.filter((exp)=>exp.company===job).map((exp)=>(
          <div key={exp.company}>
            <div className='flex flex-col gap-2'>
              <p className='text-xl font-bold'>{exp.job}</p>
              <p className='text-sm'>{exp.subTitle}</p>
              <p className='text-sm'>{exp.where}</p>
              <p className='text-sm'>{exp.time}</p>
              <p>{exp.stack.map((stack)=>(
                <span key={stack} className='border border-white p-1 text-xs rounded mr-2'>{stack}</span>        
              ))}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='border-t border-gray-400 mt-12 mb-6'></div>
              {exp.desc.map((desc)=>(
                <p key={desc} className='text-sm md:text-base'>{`- ${desc}`}</p>
              ))}
            </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Exp