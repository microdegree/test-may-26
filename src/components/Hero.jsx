import React from 'react'
import VideoCard from './VideoCard';
function Hero({setViewModal, videoModal, setvideoModal, videoOutput, setVideoOutput}) {


    const videoLinks =[
        {
          id: 1,
          name : "video1",
          title: "How to enroll to courses?",
          link:'https://www.youtube.com/embed/YfmFWwzoLnQ'
        },
        {
          id: 2,
          name : "video2",
          title: "Why Our Courses?",
          link:'https://www.youtube.com/embed/01qSumyUrpU'
        },
        {
          id: 3,
          name : "video3",
          title: "Why Microdegree?",
          link:'https://www.youtube.com/embed/owYvziGyVZQ'
        },
      ]



      const handleVideo1 =()=>{
        console.log('hi')
        setVideoOutput(videoLinks.filter((item)=>item.name.includes("video1"))[0])
        console.log(videoOutput)
        setvideoModal(!videoModal)
      }
      const handleVideo2 =()=>{
        setVideoOutput(videoLinks.filter((item)=>item.name.includes("video2"))[0])
        setvideoModal(!videoModal)
      }
      const handleVideo3 =()=>{
        setVideoOutput(videoLinks.filter((item)=>item.name.includes("video3"))[0])
        setvideoModal(!videoModal)
      }
  return (
    <div>
    <div className='sm:flex w-full  h-[650px] px-10 md:px-14 xl:px-18 2xl:px-18  items-center hidden '>
    <div className="w-full h-full basis-1/2 flex items-center pb-10 xl:mt-20 2xl:mt-14">
      <div className=" px-5 overflow-visible w-fit   h-fit min-w-[380px]  text-left space-y-9">
        <div className="space-y-7 min-w-[450px] max-w-[600px] 2xl:max-w-[600px]">
        <a href="https://pages.razorpay.com/pl_Hafc79gZguWpnS/view"> <span className='text-[#FFF] font-roboto text-[0.5rem] 2xl:text-[0.7rem] uppercase tracking-wide bg-[#fa9f00] px-2 2xl:text-xs  py-1'>Save 75% on MicroDegree Pro</span></a>
        <h1 className='text-3xl xl:text-4xl sm:text-[2.3rem] sm:leading-[2.4rem] 2xl:text-5xl font-bold leading-[2.4rem] 2xl:leading-[3.1rem] text-gray-700'>
          <span className='text-orange-400 w-full font-benne xl:text-5xl white '>ಕನ್ನಡಿಗರಿಗೆ</span> <a href='https://www.microdegree.work/'>IT Job-Ready</a> <br></br> <span className='font-benne xl:text-5xl'>ಮಾಡುವ </span> <span className='text-orange-400 xl:text-5xl font-benne'> ಅಭಿಯಾನ</span> 
        </h1>
        <p className="text-sm 2xl:text-lg font-medium w-fit">
          MicroDegree is an <span className='text-purple-700'> Ed-tech platform</span> teaching <span className='text-purple-700' >coding & job-ready </span>skills in Kannada at an <a href='https://courses.microdegree.work/pages/premium-courses'>affordable</a> price.
        </p>
        <div className='space-x-8'>
          <button onClick={()=>setViewModal('77')} className=" p-[0.9rem] px-9 bg-[#FF0049] text-white text-base 2xl:text-lg rounded-md">Free Consultation</button>
         <a href="https://courses.microdegree.work/pages/premium-courses"><button className='rounded-md p-2 px-5 border-2 font-medium border-purple-700 text-purple-700 text-sm'>All Courses</button></a>
        </div> 
        </div>

        <div className="w-full flex space-x-3 py-3 overflow-x-scroll scrollbar-hide">

          <VideoCard handleVideo={handleVideo3} vidthumb="https://ik.imagekit.io/microdegree/homeWebp/heroSection/thumbnail1_PekE7n6KA5.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161195216" title="Why Microdegree?" loading="lazy"></VideoCard>
          <VideoCard handleVideo={handleVideo2} vidthumb="https://ik.imagekit.io/microdegree/homeWebp/heroSection/thumbnail2_uqI7Y9elnX.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161195218" title="Why Our Courses?" loading="lazy"></VideoCard>
          <VideoCard handleVideo={handleVideo1} vidthumb="https://ik.imagekit.io/microdegree/homeWebp/heroSection/thumbnail3_CTC5OPdSep.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161195173" title="How to enroll to courses?" loading="lazy"></VideoCard>
        </div>
      </div>
    </div>
    <div className='px-10 basis-1/2 relative'>
      <div className='w-fit relative'>
        <img className='2xl:w-[520px] w-[450px] xl:w-[500px] ' src="https://ik.imagekit.io/microdegree/homeWebp/heroSection/HeroImg1_-_Copy__2__swclcaTQT_cNDQpVjii.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672130989612" alt="" loading="lazy"/>
        <img className='sm:w-24 xl:w-36 2xl:w-44 absolute top-64 -left-0' src="https://ik.imagekit.io/microdegree/homeWebp/heroSection/Group_19-2_hUBHs0IMs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665121474831" alt="" loading="lazy"/>
        <a href='https://t.me/microdegreekannada'><img className='sm:w-10 xl:w-20 2xl:w-20 right-5  top-10  absolute' src="https://ik.imagekit.io/microdegree/homeWebp/heroSection/telegram-web_XWBUFtW5-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665120777045" alt="" loading="lazy"/></a>
      
      </div>
      </div>
  </div>




  <div className='sm:hidden px-10 py-12 flex items-center pb-14'>
   <div className="text-left space-y-6 w-screen">
         <div className="space-y-6 ">
         <a href="https://pages.razorpay.com/pl_Hafc79gZguWpnS/view"> <span className=' text-[#FFF] bg-[#fa9f00] text-[0.4rem] font-medium px-2 py-1 uppercase'>Save 75% on MicroDegree Pro</span></a>
         <h1 className='text-3xl font-bold text-gray-700 w-[19rem]'>
           <span className='text-orange-400 '>ಕನ್ನಡಿಗರಿಗೆ</span> <a href='https://www.microdegree.work/'>IT Job-Ready</a> ಮಾಡುವ <span className='text-orange-400'> ಅಭಿಯಾನ</span> 
         </h1>
         <p className="text-sm font-medium  w-[19rem]">
         MicroDegree is an <span className='text-purple-700'> Ed-tech platform</span> teaching <span className='text-purple-700' >coding & job-ready </span>skills in Kannada at an <a href='https://courses.microdegree.work/pages/premium-courses'>affordable</a> price.
         </p>
         <div className='space-x-8'>
           <button onClick={()=>setViewModal('77')} className=" p-3 px-4 bg-[#FF0049] text-white text-sm rounded-md">Free Consultation</button>
         <a href="https://courses.microdegree.work/pages/premium-courses"><button className='rounded-md p-2 border border-blue-800 text-blue-800 text-sm'>All Courses</button></a>
         </div> 
        </div>
  <div className="w-full flex space-x-3 py-3 overflow-x-scroll">
  <VideoCard handleVideo={handleVideo3} vidthumb="https://ik.imagekit.io/microdegree/homeWebp/heroSection/thumbnail1_PekE7n6KA5.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161195216" title="Why Microdegree?" loading="lazy"></VideoCard>
          <VideoCard handleVideo={handleVideo2} vidthumb="https://ik.imagekit.io/microdegree/homeWebp/heroSection/thumbnail2_uqI7Y9elnX.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161195218" title="Why Our Courses?" loading="lazy"></VideoCard>
          <VideoCard handleVideo={handleVideo1} vidthumb="https://ik.imagekit.io/microdegree/homeWebp/heroSection/thumbnail3_CTC5OPdSep.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161195173" title="How to enroll to courses?" loading="lazy"></VideoCard>
          <div className='min-w-[50px]'></div>
   </div>
        </div>
  </div>
  </div>
  )
}

export default Hero