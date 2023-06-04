import React from 'react'
import PlacementCard from './PlacementCard'

function CmnSection2() {
  return (
    <div className='px-10 md:px-14 xl:px-18  2xl:px-20  py-10 w-full h-full space-y-5'>
    <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.4em] text-xs xl:text-sm 2xl:text-base '>Success Stories</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>
<div className="  space-y-10 text-left">
  <div className='w-full justify-between flex'>
  <h1 className="text-4xl sm:text-5xl 2xl:text-6xl  sm:tracking-[0.04em] space-x-2 text-gray-800"><span className="font-[600] text-gray-700">Placement</span> Diaries</h1>
  <div>
<a href="https://www.next.microdegree.work/testimonial">
      <button className="h-fit hidden sm:block  bg-[#FF0049] text-white text-base rounded-md px-5 py-2 ">View More</button>
      </a>
      </div>
  </div>
  <div className="flex w-full justify-between flex-nowrap overflow-x-scroll space-x-3">
    <PlacementCard title='Jeevan Kumar' desc='Cloud Engineer'  cardImg="https://ik.imagekit.io/microdegree/homeWebp/section5/ezgif.com-gif-maker_li7l-Ylhkp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674552114044" logoImg='https://ik.imagekit.io/microdegree/homeWebp/section5/niveus_4zLzMwwh0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661322291396' loading="lazy"></PlacementCard>
    <PlacementCard title='Pratik Bhusanur' desc='DevOps Engineer' cardImg="https://ik.imagekit.io/microdegree/homeWebp/section5/pratik__1__7YxWeAyd8_AYI6wz-TCJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674552307063" logoImg='https://ik.imagekit.io/microdegree/homeWebp/section5/lt-infotech-logo_WPy4vXESAF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661322291404' loading="lazy"></PlacementCard>
    <PlacementCard title='Uday Kumar' desc='Junior Cloud Engineer' cardImg="https://ik.imagekit.io/microdegree/homeWebp/section5/WhatsApp_Image_2022-11-24_at_5.00.18_PM_z75fWYGSu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674552208085" logoImg='https://ik.imagekit.io/microdegree/homeWebp/section5/1648612050948_AWoJOAlN32.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1674541531179' loading="lazy"></PlacementCard>
    <PlacementCard title='Mohammed Afreed' desc='DevOps Engineer' cardImg="https://ik.imagekit.io/microdegree/homeWebp/section5/IMG-20221214-WA0003_2_D20x11aJ_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674551891502" logoImg='https://ik.imagekit.io/microdegree/homeWebp/section5/raasoft-infotech-kankanady-mangalore-internet-service-providers-jparifnqcn-250_WEwkSVQXZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674550444687' loading="lazy"></PlacementCard>
    <PlacementCard title='Shridhar' desc='DevOps Engineer' cardImg="https://ik.imagekit.io/microdegree/homeWebp/section5/1662527566170__1__O2UOFYodR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674551697418" logoImg='https://ik.imagekit.io/microdegree/homeWebp/section5/gm_logo__rVhxsJpX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674550768821' loading="lazy"></PlacementCard>
    <PlacementCard title='Sagar Shetty' desc='Cloud Engineer' cardImg="https://ik.imagekit.io/microdegree/homeWebp/section5/7933_KBpELs63pH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674551397735" logoImg='https://ik.imagekit.io/microdegree/homeWebp/section5/1669699646869_gpz470FCw.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1674551024589' loading="lazy"></PlacementCard>

  </div>
</div>
<div>
<a href="https://www.next.microdegree.work/testimonial">
      <button className="h-fit sm:hidden bg-[#FF0049] text-white text-base rounded-md px-10 py-3 ">View More</button>
      </a>
      </div>
</div>
  )
}

export default CmnSection2