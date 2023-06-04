import React, { useEffect, useState } from 'react'
import trendingtag from '../assets/homeWebp/Section2/trendingtag.png'
function BlogCard({cardImg, title, category, price, courseLink, desc, course_details, trending }) {

  const [categoryColor, setCategoryColor] = useState('bg-green-500')

  const color = 'bg-red-400'

  useEffect(() => {

    if (title[0].toLowerCase()==='a') {
       setCategoryColor('bg-[#FF0049]')
    } 

    else if(title[0].toLowerCase()==='m'){
      setCategoryColor('bg-yellow-500')
    }
    else if(title[0].toLowerCase()==='p'){
      setCategoryColor('bg-purple-700')
    }
    else if(title[0].toLowerCase()==='d'){
      setCategoryColor('bg-blue-500')
    }
   
    else {
      setCategoryColor('bg-green-500')
    }
  }, [])
  
console.log(title.length)

  
  return (
    <>
    {/* <a href={courseLink}> */}
    <div className='m-auto sm:m-0 relative  w-60 min-w-[280px] sm:min-w-[250px] xl:min-w-[280px] 2xl:min-w-[310px] h-full min-h-[380px] sm:min-h-[350px] 2xl:min-h-[420px] bg-white text-left group rounded-md shadow-lg'>
      <div>
  
    <div className='w-full h-full relative'>
<img className='w-full h-full object-contain rounded-t-md' src={cardImg} alt="" />
{
  trending && <div className='absolute top-6'>
    <img className='w-28' src={trendingtag} alt="" />
  </div>
}

  </div>
  <div className='h-full w-full p-4 space-y-3'>
  <div className='flex justify-between'>
        <p className={`text-center flex items-center p-1 ${categoryColor} text-white px-2 '}  rounded-md text-xs`}>{category}</p>
        <div className={`${price==='FREE'?'text-green-500':"text-yellow-500"} font-medium text-lg 2xl:text-2xl 2xl:font-semibold`} style={{fontSize:"15px"}}>{price}</div>
    </div>
    <p className="font-medium w-3/4 text-lg 2xl:text-2xl font-roboto mb-2 line-clamp-2">{title}</p>
    <p className="text-gray-700 2xl:text-[0.9rem] text-[0.7rem] line-clamp-5">{desc}</p>
    
  </div>
  </div>

  {/* layer */}
{/* 
   <div className='absolute w-full h-full top-0 hidden group-hover:block rounded-lg '>
    <div className='h-full w-full rounded-lg '>
  <div className='w-full opacity-95 top-0 rounded-lg  bg-gradient-to-br justify-center flex items-center  from-yellow-400 to-red-500 h-full'>
    <div className='text-left px-7 text-white space-y-3'>
      <h3 className='text-2xl 2xl:text-4xl whitespace-nowrap font-medium'>Course Details</h3>
      <ul className='list-disc space-y-1'>
      {
  course_details.map((para)=>(<li key={para} className='text-sm 2xl:text-lg'>{para}</li>))
}
</ul>
<div>
<a href={courseLink}><button className='border border-white bg-transparent px-2 py-1 text-sm 2xl:text-lg rounded-lg'>View Course</button></a>
</div>
</div>
</div>
    </div>
  </div>  */}

</div>
{/* </a> */}
</>
  )
}

export default BlogCard