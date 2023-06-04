import React from 'react'
import RecognisationCard from "./RecognisatonCard";



function HomeSection3() {
  


  return (
    <div className='h-full sm:py-20 sm:px-14 xl:px-18 2xl:px-24  p-10 space-y-5 '>
    <div className='space-y-6'>
    <h1 className='text-4xl xl:text-[2.9rem] text-gray-700 2xl:text-6xl'>Our <span className='font-semibold'>Award's</span> & <span className='font-semibold'>Recognition</span></h1>
    <p className=" text-gray-600 text-xs xl:text-sm 2xl:text-base font-md">MicroDegree is proud to be acknowledged by some prominent publications and organizations</p>
    
    </div>

    <div className=" w-full h-full flex flex-wrap space-x-2 items-center justify-around 2xl:justify-center 2xl:space-x-6 align-center px-10 sm:px-24">
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src="https://ik.imagekit.io/microdegree/homeWebp/Section3/brandLogo1_2WiCC8RvB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245483" alt="" loading="lazy"/>
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src="https://ik.imagekit.io/microdegree/homeWebp/Section3/brandLogo2_dXSQV3Tl7-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245496" alt="" loading="lazy"/>
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src="https://ik.imagekit.io/microdegree/homeWebp/Section3/brandLogo3_1m1sIGs1N.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245467" alt="" loading="lazy"/>
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src="https://ik.imagekit.io/microdegree/homeWebp/Section3/brandLogo4_0SWJWjtHYh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245486" alt="" loading="lazy"/>
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src="https://ik.imagekit.io/microdegree/homeWebp/Section3/brandLogo5_ouprGInjea.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245495" alt="" loading="lazy"/>
    </div>


    <div className="flex flex-wrap items-center justify-around 2xl:justify-center sm:space-x-2 2xl:space-x-8 ">
      <RecognisationCard title='KDEM Recognition at BTS' desc='MicroDegree receiving award for its impactful work at grass root levels.' date='21' month='nov' cardImg="https://ik.imagekit.io/microdegree/homeWebp/Section3/a1_lhmrj-qtxb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245530" loading="lazy"></RecognisationCard>
      <RecognisationCard title='Winning Elevate 2020' desc='MicroDegree chosen as one of the top 100 startups by Govt. of Karnataka.' date='20' month='mar' cardImg="https://ik.imagekit.io/microdegree/homeWebp/Section3/a2_U-_yU8y6k.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245471" loading="lazy"></RecognisationCard>
      <RecognisationCard title='Awarded by IEEE' desc='MicroDegree impacted 3000+ rural talent imparting tech sessions in Kannada.' date='21' month='feb' cardImg="https://ik.imagekit.io/microdegree/homeWebp/Section3/a3_ICdPeqpDi-.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245507" loading="lazy"></RecognisationCard>
      <RecognisationCard title='Bangalore Tech Summit' desc='Sharing a moment with our honourable Deputy Chief Minister of Karnataka.' date='21' month='nov' cardImg="https://ik.imagekit.io/microdegree/homeWebp/Section3/a4_jhGkY2Z8u8.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161245475" loading="lazy"></RecognisationCard>
    </div>
    

  
  </div>
  )
}

export default HomeSection3