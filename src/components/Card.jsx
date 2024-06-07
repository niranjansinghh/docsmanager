import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.1} 
    dragTransition={{ bounceStiffness:100, bounceDamping:30}}
    className=' relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-8 px-7 overflow-hidden'>
      <LuFileSpreadsheet />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full  left-0 ' >

        <div className='flex items-center justify-between px-8 py-1  mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".7em" color='#000' />}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div className={`tag w-full py-3 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null
        }




      </div>


    </motion.div>
  );
}

export default Card