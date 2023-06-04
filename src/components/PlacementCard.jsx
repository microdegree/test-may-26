import React from 'react'

function Section5Card({title, desc, cardImg, logoImg,  }) {
  return (
    <>
<div id="placement" className=" h-[22rem] xl:h-96 2xl:h-[420px]  mb-8 mx-auto relative min-w-[280px] xl:min-w-[280px]  sm:w-60 2xl:min-w-[340px]  rounded-xl overflow-hidden shadow-lg">
  <div className='w-full h-48 xl:h-52 2xl:h-64  '>
  <img loading="lazy" className="w-full h-full object-cover " src={cardImg} alt="Sunset in the mountains"/>
  </div>
  <div className="px-4 py-5 h-full bg-gray-100 text-center space-y-2">
    <h1 className="font-bold font-roboto text-2xl text-gray-800 2xl:text-2xl mb-2">{title}</h1>
    <p className="text-gray-700 font-roboto font-[500] tracking-widest text-sm xl:text-lg 2xl:text-xl p-1">
        {desc}
    </p>
    <div className='flex h-12 w-full items-center justify-center'>
    <img loading="lazy" className='w-28 h-14 flex items-center object-contain' src={logoImg} alt="" />
    </div>
  </div>
</div>

</>
  )
}

export default Section5Card