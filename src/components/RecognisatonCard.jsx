import React from 'react'

function Section3Card({title, desc, cardImg, date, month }) {
  return (
<div id="recognation" className=" mx-auto sm:mx-0 mb-7 h-72 group relative w-[280px] xl:w-[17.5rem] md:w-[260px] 2xl:w-[310px] 2xl:h-[350px] rounded overflow-hidden shadow-lg">
  <img className="w-full object-contain " src={cardImg} alt="Sunset in the mountains" loading="lazy"/>
  <div className='group-hover:hidden absolute top-2 left-3 w-12 h-12 bg-white rounded-full text-sm font-semibold flex flex-col leading-4 justify-center items-center'>
    <h1 className='text-yellow-500 font-bold text-[1rem]'>{date}</h1>
    <h1 className='text-[0.7rem] uppercase'>{month}</h1>
  </div>
  
  <div className="px-4 py-3 2xl:py-4 h-full bg-white text-left space-y-2">
    <h1 className="truncate font-medium  2xl:font-semibold text-lg 2xl:text-xl ">{title}</h1>
    <p className=" text-gray-700 text-xs xl:text-sm  2xl:text-base">
        {desc}
    </p>
  </div>
</div>
  )
}

export default Section3Card