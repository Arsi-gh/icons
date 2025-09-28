"use client"
import React, { useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { MdInstallDesktop } from "react-icons/md";

export default function SnippetWrapper({children}) {

  const [active , setActive] = useState(false)  

  const clickHandler = () => {
    setActive(true)
    navigator.clipboard.writeText(children)
    setTimeout(() => {
        setActive(false)
    } , [1000])
  }  

  return (
    <>
    <b className='flex gap-2 items-center text-xl w-full my-2'><MdInstallDesktop className='text-xl'/>Installation</b>
    <div className='p-3 pr-0 bg-white/5 rounded-xl border border-zinc-700 flex items-center'>
        <pre>
            <code>
                {children}
            </code>
        </pre>
        <span className='w-[1px] h-5 bg-zinc-700 mx-3'></span>
        <IoCopyOutline onClick={() => clickHandler()} className='cursor-pointer text-xl'/>
        <p className={`h-5 ${active ? 'w-14' : 'w-0'} transition-all duration-300 overflow-hidden ml-3`}>Copied</p>
    </div>
    </>
  )
}