import React from 'react';


function Background() {
  return (
   <>
   <div className='fixed z-[2] w-full h-screen'>
   <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-400 font-semibold text-xl'> Notes.</div>
    <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[9vw] leading-none font-semibold tracking-tighter text-zinc-900'>Note Maker.</h1>

   </div>

   </>
   
  )
}

export default Background