import Link from 'next/link'
import { type } from 'os'
import React from 'react'

type Props = {
  content:string,
  type:'red'|'gray',
  redirect:string

}


const Button = ({content,type,redirect}: Props) => {
  return (
    <Link href={redirect} className={type === 'red' ? 'text-center w-[110px] 2xl:w-[150px] h-[40px] border border-[#C778DD] px-2 2xl:px-4 py-2 text-xs 2xl:text-base text-white font-medium': 'text-center w-[110px] 2xl:w-[150px] h-[40px] border border-[#ABB2BF] px-3 2xl:px-4 py-2 text-xs 2xl:text-base text-white font-medium'}> {content} </Link>
  )
}

export default Button