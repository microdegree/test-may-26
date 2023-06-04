import React from 'react'

function HomeSection9() {
  return (
    <>


<div className=' hidden sm:block px-28 py-10 w-full h-fit space-y-2' id="news">
<div className='flex items-center space-x-3'><div className='bg-[#FF0049]    p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.3em] text-xs '>News</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

<div className='w-full space-y-6'>
<h1 className=" text-gray-700 text-left text-4xl sm:text-6xl 2xl:text-6xl "><samp className="font-semibold text-gray-700">News</samp>& <span className="font-semibold text-gray-700">Media</span> Talk </h1>

<div className='flex h-[400px] 2xl:h-[540px] space-x-3 w-full '>
  <div className='basis-1/2 h-full '>
    <img src="https://ik.imagekit.io/microdegree/homeWebp/section9/news1_g-AHNPg6qx.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161412558" className='h-full w-full object-contain' alt="" loading="lazy"/></div>
  <div className='basis-3/5 space-y-3 flex flex-col w-full h-full'>

    <div className='basis-2/3 space-x-2 flex w-full '>

      <div className='basis-1/2 h-full'><iframe className='h-full w-full object-cover' src="https://www.youtube.com/embed/y9yhmSQ6qlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen ></iframe></div>

      <div className='basis-1/2 h-full  relative'>
        <img src="https://ik.imagekit.io/microdegree/homeWebp/section9/news2_VQvlVGdBOo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161412507" className='w-full top-1 h-full absolute object-cover' alt="" loading="lazy"/></div>

    </div>

    <div className=' basis-1/3 space-x-2 flex w-full h-full'>
    <div className='basis-1/2 h-full overflwo-hidden relative'><img src="https://ik.imagekit.io/microdegree/homeWebp/section9/news3_yZ7O6OlZb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161412531" className='w-full h-full absolute ' alt="" loading="lazy"/></div>
    <div className='basis-1/2 h-full overflwo-hidden relative'><img src="https://ik.imagekit.io/microdegree/homeWebp/section9/news5_P8BX1fYQ3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161412532" className='w-full h-full absolute ' alt="" loading="lazy"/></div>
    </div>
    </div>
  </div>
</div>
</div>

{/* for Mobile */}

<div className='p-6 sm:hidden font-poppins space-y-8'>
<div className='text-left'>
    <h1 className=" -500 text-3xl tracking-[0.2rem] text-gray-700 "> News & </h1>
  <h1 className=" text-5xl uppercase  font-bold text-gray-700"> Media Talk</h1>
  </div>
  <div className='flex flex-col space-y-6 '>
  <div className='h-full'><iframe className='h-56 w-full object-cover' src="https://www.youtube.com/embed/y9yhmSQ6qlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen ></iframe></div>

  <img loading="lazy" src="https://ik.imagekit.io/microdegree/homeWebp/section9/news1_g-AHNPg6qx.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161412558" className='w-full object-contain' alt="" />
  <img loading="lazy" src="https://ik.imagekit.io/microdegree/homeWebp/section9/news2_VQvlVGdBOo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161412507" className='w-full h-full object-contain ' alt="" />
  <img loading="lazy" src="https://ik.imagekit.io/microdegree/homeWebp/section9/news3_yZ7O6OlZb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161412531" className='w-full object-contain' alt="" />
  <img loading="lazy" src="https://ik.imagekit.io/microdegree/homeWebp/section9/news5_P8BX1fYQ3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161412532" className='w-full object-contain' alt="" />

  </div>
</div>

</>
  )
}

export default HomeSection9