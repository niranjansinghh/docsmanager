import React from 'react';
import Card from "./Card";
import { useRef } from 'react';


function Foreground() {

  const ref =useRef(null);


  const data =[
{
  desc:"Lorem ipsum dolor sit amet Vitae dicta ",
  filesize:".9mb",
  close:true,
  tag:{ isopen: true, tagTitle: "Download now", tagColor: "green"},

  },
  {
    desc:"Lorem ipsum dolor sit amet Vitae dicta",
    filesize:".9mb",
    close:false,
    tag:{ isopen: true, tagTitle: "Download now", tagColor: "green"},
  
    },
    {
      desc:"Lorem ipsum dolor sit amet Vitae dicta ",
      filesize:".9mb",
      close:true,
      tag:{ isopen: true, tagTitle: "Download now", tagColor: "green"},
    
      },


  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex  flex-wrap gap-7 p-3'>
      {data.map((item,index)=>(
        <Card  data={item} reference={ref}/>
      ))}
        
        
       
    </div>
  )
}

export default Foreground