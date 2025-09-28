"use client"
import React from 'react'

export default function Icon({icon , tag , url}) {
  return (
    <figure className='bg-zinc-100 border-zinc-300 dark:bg-neutral-900/60 dark:border-zinc-700/60 cursor-pointer size-24 flex flex-col items-center gap-3 justify-center relative border rounded-xl overflow-hidden group font-semibold'>
         <span className='text-2xl'>{icon}</span>
         <p className= 'text-xs'>{tag.length > 10 ? tag.slice(0 , 10) + "..." : tag}</p>
         <figcaption className='dark:bg-neutral-800/40 absolute w-full h-full left-0 top-0 p-1 flex flex-col gap-1  backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300'>
             <button onClick={() => navigator.clipboard.writeText(tag)} className='dark:bg-white/1 w-full h-1/2 p-2 rounded-lg grid place-content-center cursor-pointer border border-zinc-700/70 active:[&>p]:hidden active:[&>b]:block'>
                 <p>Tag</p>
                 <b className='font-semibold hidden'>Copied</b>
             </button>
             <button onClick={() => navigator.clipboard.writeText(url)} className='dark:bg-white/1 w-full h-1/2 p-2 rounded-lg grid place-content-center cursor-pointer border border-zinc-700/70 active:[&>p]:hidden active:[&>b]:block'>
                 <p>URL</p>
                 <b className='font-semibold hidden'>Copied</b>
             </button>
         </figcaption>
     </figure>
  )
}

// Dark mode
//  <figure className='bg-zinc-100 border-zinc-300 dark:bg-neutral-900/60 dark:border-zinc-700/60 cursor-pointer size-24 flex flex-col items-center gap-3 justify-center relative border rounded-xl overflow-hidden group font-semibold'>
//         <span className='text-2xl'>{icon}</span>
//         <p className= 'text-xs'>{tag.length > 10 ? tag.slice(0 , 10) + "..." : tag}</p>
//         <figcaption className='dark:bg-neutral-800/40 absolute w-full h-full left-0 top-0 p-1 flex flex-col gap-1  backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300'>
//             <button onClick={() => navigator.clipboard.writeText(tag)} className='dark:bg-white/1 w-full h-1/2 p-2 rounded-lg grid place-content-center cursor-pointer border border-zinc-700/70 active:[&>p]:hidden active:[&>b]:block'>
//                 <p>Tag</p>
//                 <b className='font-semibold hidden'>Copied</b>
//             </button>
//             <button onClick={() => navigator.clipboard.writeText(url)} className='dark:bg-white/1 w-full h-1/2 p-2 rounded-lg grid place-content-center cursor-pointer border border-zinc-700/70 active:[&>p]:hidden active:[&>b]:block'>
//                 <p>URL</p>
//                 <b className='font-semibold hidden'>Copied</b>
//             </button>
//         </figcaption>
//     </figure>


// White mode
// <figure className='bg-zinc-50 border-zinc-300  cursor-pointer size-24 flex flex-col items-center gap-3 justify-center relative border rounded-xl overflow-hidden group font-semibold'>
//       <span className='text-2xl'>{icon}</span>
//       <p className= 'text-xs'>{tag.length > 10 ? tag.slice(0 , 10) + "..." : tag}</p>
//       <figcaption className='absolute w-full h-full left-0 top-0 p-1 flex flex-col gap-1 bg-white/60 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300'>
//           <button onClick={() => navigator.clipboard.writeText(tag)} className='w-full h-1/2 p-2 rounded-lg grid place-content-center cursor-pointer border border-zinc-300 active:[&>p]:hidden active:[&>b]:block'>
//               <p>Tag</p>
//               <b className='font-semibold hidden'>Copied</b>
//           </button>
//           <button onClick={() => navigator.clipboard.writeText(url)} className='w-full h-1/2 p-2 rounded-lg grid place-content-center cursor-pointer border border-zinc-300 active:[&>p]:hidden active:[&>b]:block'>
//               <p>URL</p>
//               <b className='font-semibold hidden'>Copied</b>
//           </button>
//       </figcaption>
//   </figure>