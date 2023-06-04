import React from 'react'
import section4Img from '../assets/homeWebp/section4/section4Img.webp'
import base from '../assets/homeWebp/section4/base.webp'
import { PencilAltIcon } from "@heroicons/react/solid";

function HomeSection4() {
  return (
    <div className="hidden  p-10 sm:p-0 relative  w-full space-y-10 h-full mb-10">
      <img className='hidden md:block w-full absolute -z-10' src={base} alt="" loading="lazy"/>
    <div className='w-full pb-10 sm:py-24 px-5 flex justify-center 2xl:justify-around 2xl:px-44  items-center flex-wrap sm:space-x-14 space-y-7 '>
      <h1 className=" h-full text-4xl xl:text-5xl xl:max-w-2xl   2xl:text-5xl 2xl:max-w-4xl text-gray-700 font-[500]  max-w-md text-left">How to join Million <br/> course from <span className='text-[#FB4474]'>MicroDegree</span> </h1>
      <p className=" text-xs 2xl:text-base leading-5  text-gray-700 sm:mr-20 max-w-lg text-left">Whether you're an aspiring IT professional or a non-IT professional who wants switch your career, we have something for you. You will learn from basics to advanced level, trained by industry experts, working on real world projects </p>
    </div>
      <div className=" w-full flex items-center justify-center ">
        <img className='hidden sm:block w-2/5 xl:w-1/2 ' src={section4Img} alt="" loading="lazy" />
        <div className="py-14 px-8 xl:h-[500px] xl:w-[450px] xl:px-14 2xl:px-14 2xl:h-[540px] w-[330px] 2xl:w-[480px] bg-gray-100 rounded-md flex flex-col justify-center flex-shrink space-y-7 2xl:space-y-9">
        <h3 className="text-3xl font-medium text-gray-800 font-roboto xl:text-4xl 2xl:text-4xl text-left">How we execute</h3>
        <div className="w-full font-roboto text-gray-600  space-y-8 2xl:space-y-10 ">
          <div className=" w-full flex justify-between text-gray-600  items-center  ">
            <p>1.</p>
            <PencilAltIcon className='w-5  '></PencilAltIcon>
            <div className="text-left xl:text-xl 2xl:text-xl"><h5 className='font-medium'>Explore Course</h5>
            <p className='text-[0.6rem] xl:text-sm 2xl:text-sm text-gray-500'>This is first step you should take to join</p></div>
          </div>
          <div className=" w-full flex justify-between items-center">
            <p>2.</p>
            <PencilAltIcon className='w-5 '></PencilAltIcon>
            <div className="text-left xl:text-xl 2xl:text-xl"><h5 className='font-medium'>Choose Class</h5>
            <p className='text-[0.6rem] xl:text-sm 2xl:text-sm text-gray-500'>This is 2nd step you should take to join</p></div>
          </div>
          <div className=" w-full flex justify-between items-center">
            <p>3.</p>
            <PencilAltIcon className='w-5 '></PencilAltIcon>
            <div className="text-left xl:text-xl 2xl:text-xl"><h5 className='font-medium' >Enroll First</h5>
            <p className='text-[0.6rem] xl:text-sm  2xl:text-sm text-gray-500'>This is 3rd step you should take to join</p></div>
          </div>
          <div className=" w-full flex justify-between items-center ">
            <p>4.</p>
              <PencilAltIcon className='w-5 '></PencilAltIcon>
            <div className="text-left xl:text-xl 2xl:text-xl"><h5 className='font-medium' >Start Learning</h5>
            <p className='text-[0.6rem] xl:text-sm 2xl:text-sm text-gray-500'>This is 4th step you should take to join</p></div>
          </div>
        </div>

      </div>
      </div>
  </div>
  )
}

export default HomeSection4