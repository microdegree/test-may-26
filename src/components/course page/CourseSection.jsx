import React from 'react'
import { Courses } from '../../Courses'
import CourseCard from '../CourseCard'
function Section2() {
  return (
    <div className='flex py-10 '> 
    <div className='basis-1/3 w-full bg-green-500 py-4 pl-20 pr-2 space-y-8'>
        <h1>Cloud Computing Courses</h1>
        
        {/* *******************************first Row ******************************** */}
        <div className='space-y-2'>
            <div className='flex justify-between text-lg '>
                <h2>Courses</h2>
                <p className='text-sm '>Reset Filter</p>
            </div>
            <div className=' flex flex-col items-start space-y-2 text-[0.9rem]'>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                   <ul className='px-5 text-left text-[0.8rem]'>
                    <li>Aws & DevOps</li>
                    <li>Aws</li>
                    <li>DevOps</li>
                    <li>Azure DevOps</li>
                   </ul>
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Cloud Computing
                </label>
            </div>
        </div>
        {/* second Row starts here */}
        <div className='space-y-2'>
            <h2 className='text-left text-lg'>Price</h2>
            <div className='flex flex-col items-start space-y-2 text-[0.9rem]'>
            <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Free
                </label>

                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Paid
                </label>
            </div>
        </div>
        {/* Third Row starts here */}
        <div className='space-y-2'>
            <h2 className='text-left text-lg'>Price</h2>
            <div className='flex flex-col items-start space-y-2 text-[0.9rem]'>
            <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   kannada
                </label>

                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   English
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Hindi
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Tamil
                </label>
                <label className='space-x-2' htmlFor="cloud_computing">
                    <input className='mr-3' type="checkbox" name="cloud_computing" id="cloud_computing" />
                   Malyalam
                </label>
            </div>
        </div>
    </div>
    {/* **********************************Courses Column starts here********************************* */}
    <div className='w-full  p-4'>
        <div className='flex justify-between'>
            <div className='flex '>
                <button className='px-3 py-1 text-sm bg-gray-300 hover:bg-red-500 rounded-sm'>Live</button>
                <button className='px-3 py-1 text-sm bg-gray-300 hover:bg-red-500 '>Hybrid</button>
                <button className='px-3 py-1 text-sm bg-gray-300 hover:bg-red-500 rounded-sm'>Pre Recorded</button>
            </div>
            <button className='px-3 py-1 text-sm bg-blue-600 hover:bg-red-500 rounded-sm'>Most Relevent</button>
        </div>
        <div className='flex flex-wrap p-5 w-full bg-red-500 max-h-[750px] overflow-y-scroll'>
            
            {
                Courses.map((item)=>(
                    <div className='mb-5 mr-5'>
                <CourseCard key={item.id} title={item.course_name} desc={item.course_desc} cardImg={item.course_img} price={item.course_price} category={item.course_category} courseLink={item.course_link}></CourseCard>
                </div>
                ))
            }
            
            
        </div>
    </div>

    </div>
  )
}

export default Section2