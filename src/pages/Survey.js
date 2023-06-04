import React from 'react'
import { useState } from 'react'
import rectangle40 from '../assets/homeWebp/section10/rectangle40.png'
import rectangle41 from '../assets/homeWebp/section10/rectangle41.png'
import section10bg from '../assets/homeWebp/section10/section10bg.webp'
import { db } from "../features/firebase";
import { addDoc, query, collection } from "firebase/firestore";
import tgLogo from '../assets/homeWebp/section10/tgLogo.webp'
import {CheckIcon} from '@heroicons/react/solid'

const q = query(collection(db, "Test-Arshad"));

function Survey() {

    const [Name, setName] = useState('')
    const [ContactNo, setContactNo] = useState('')
    const [Email, setEmail] = useState('')
    const [formAlert, setFormAlert]= useState(false)
    // const [EnrollId, setEnrollId] = useState('');
    // const [CourseName, setCourseName] = useState('');
    // const [Message, setMessage] = useState('');


const onSubmit= async (e) => {
  e.preventDefault();
  await addDoc(q, {
    name: Name,
    contactNo: ContactNo,
    email: Email
    // enrollId: EnrollId,
    // courseName: CourseName,
    // message: Message,

  });
  setName('')
  setEmail('')
  setContactNo('')
  setFormAlert(!formAlert)
};



  return (
    <>
<div className="sm:flex hidden px-3 md:px-28 py-20 w-full oveflow-visible" id="form">
<div className=' w-full  px-8 sm:basis-1/2 flex-none overflow-visible'>
  <div className="  relative w-full overflow-x-visible mt-5  px-5 h-[550px] xl:h-[550px] 2xl:h-[600px]">
<div className="absolute overflow-x-visible top-14 sm:top-11 right-4 ">

  <img className=' w-[350px] xl:w-[400px] 2xl:w-[450px]  object-contain' src={section10bg} alt="" />
</div>
<div className="w-80 xl:w-[370px] 2xl:w-[410px] h-[510px] xl:h-[510px] 2xl:h-[560px] absolute right-4 top-3  z-10  ">
  <div className="relative w-full h-full">
  <img className="object-fit absolute" src={rectangle40} alt="" loading="lazy" />
    <img className="object-fit z-10 absolute" src={rectangle41} alt="" loading="lazy" />
    <div className=' absolute opacity-40 w-full h-full bg-black'></div>

    <div className={`${formAlert?'block':'hidden'}  bg-opacity-90 bg-gray-900 z-30 top-0 w-full p-5 flex justify-center items-center flex-col h-full absolute space-y-4`}>
      <CheckIcon className='w-16 bg-gradient-to-br animate-popup from-orange-500 to-yellow-500 text-white p-3 rounded-full'></CheckIcon>
      <p className='font-bold text-white text-2xl'>Thanks for submitting </p>
      <p className='text-sm text-white'>You have successfully submitted the form | For re-submitting <span className='text-yellow-500 cursor-pointer ' onClick={()=>setFormAlert(!formAlert)}> Click here</span> </p>
    </div>
    <form onSubmit={onSubmit} action='' className=" absolute flex flex-col justify-center items-center w-full h-full p-10 px-5 space-y-3  z-20">
      <h1 className='text-white text-xl text-left py-5'>Please enter your details to get a call back from <span className='text-xl text-yellow-500'>Career Mentor</span> </h1>
      <input required onChange={(e)=>{setName(e.target.value)}} className='w-full text-sm xl:text-xl xl:p-4 2xl:text-xl text-gray-700 p-3 px-2 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Your name" title='Please enter your name' id="" />
      <input required onChange={(e)=>{setContactNo(e.target.value)}} className='w-full xl:text-xl text-sm xl:p-4 2xl:text-xl text-gray-700 p-2 px-3 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" pattern='[1-9]{1}[0-9]{9}' title='Please enter a 10 digit mobile no' placeholder="Mobile No" id="" />
      <input required onChange={(e)=>{setEmail(e.target.value)}} className='w-full xl:text-xl text-sm xl:p-4 2xl:text-xl text-gray-700 p-3 px-2 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="email" name="" placeholder="Email" title='Please enter valid email address' id="" />
      
      <button className='bg-[#4C1BCF] mt-2 px-4 py-3 w-full  rounded text-xs  xl:p-4 xl:text-xl  text-white '>Submit Request</button>
    </form>
    </div>
  </div>
  </div>
</div>

{/* secttion10 part 2 */}


<div className=" sm:block hidden shrink basis-1/2 px-3 p-5 space-y-6">
<div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-widest text-xs '>About Microdegree</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

  <div className=" w-full text-left space-y-5 ">
    
  <h1 className=" text-5xl xl:text-6xl 2xl:text-7xl text-gray-700 ">Multilingual <br /> <span className="font-bold">IT Skilling</span> Platform <br />for <span className="font-bold"> Bharat</span> </h1>
  <p className='text-gray-700 text-sm xl:text-base 2xl:text-base'>Platform where you learn the most on-demand IT Skills. Increase your chance of landing a high paying job even if you come from a non Computer Science background.</p>
  <ul className=" w-full text-sm xl:text-base 2xl:text-lg text-gray-700">
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Get trained by industry experts</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Work on real world projects</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Interview preparation</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Placement Assistance</p>.</li>

  </ul>
<div  className='pr-4 flex items-center border-2 rounded-full w-fit border-blue-300 space-x-2 '>
    <img className='w-8 2xl:w-10  rounded-full' src={tgLogo} alt="" loading="lazy"/>
    <a href="https://t.me/microdegreekannada"><p className='text-blue-400 text-lg font-medium'>Join Our Telegram</p></a>
  </div>
  </div>
</div>
</div>

{/* for Mobile vesion */}
<div>
  <div className='relative sm:hidden bg-[#0f2c3f]     mt-10 py-12 space-y-7 '>
  <div className={` ${formAlert?'block':'hidden'} bg-opacity-90 bg-gray-900 z-30 top-0 w-full p-5 flex justify-center items-center flex-col h-full absolute space-y-4`}>
      <CheckIcon className='w-16 bg-gradient-to-br animate-popup from-orange-500 to-yellow-500 text-white p-3 rounded-full'></CheckIcon>
      <p className='font-bold text-white text-2xl'>Thanks for submitting </p>
      <p className='text-sm text-white'>You have successfully submitted the form | For re-submitting <span className='text-yellow-500 cursor-pointer ' onClick={()=>setFormAlert(!formAlert)}> Click here</span> </p>
    </div>
    <div className='py-4 px-1 '>
    <h2 className='text-2xl font-roboto leading-[2.4rem] font-[500] px-4 text-left text-white '>Please enter your details to get a call back from <span className=' w-full text-3xl  py-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-orange-500 '>Career Mentor</span> </h2>
    </div>
  <form onSubmit={onSubmit} action='' className=" px-5 flex flex-col justify-center items-center w-full space-y-4 ">

<input required onChange={(e)=>{setName(e.target.value)}} className='w-full text-base p-4  text-gray-700 rounded outline-none bg-[rgba(255,255,255,0.85)]' title='Please enter your name' type="text" name="name" placeholder="Your name" id="name" />

<input required onChange={(e)=>{setContactNo(e.target.value)}} className='w-full text-base p-4  text-gray-700 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="text" title='Please enter a 10 digit mobile no' name="contact" pattern='[1-9]{1}[0-9]{9}'   placeholder="Mobile No" id="contactNo" />

<input required onChange={(e)=>{setEmail(e.target.value)}} className='w-full text-base p-4  text-gray-700 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="email" title='Please enter a valid email address' name="email"  placeholder="Email" id="email" />

<button className='bg-gradient-to-br from-orange-500 to-yellow-600 mt-2 px-4 py-4 w-full  rounded text-lg  text-white '>Submit Request</button>
<p className='text-xs py-5 leading-5 text-white text-left'>By providing your contact details, you agree to our <a className='border-b-[0.3px] border-gray-200' href='https://pages.microdegree.work/termsnconditions.html'> Terms of Use </a> & <a className='border-b-[0.3px] border-gray-200' href='https://www.next.microdegree.work/privacy'>  Privacy Policy </a> </p>
    </form>
  </div>
</div>
</>
  )
}

export default Survey








