
import React, { useState, useRef } from "react";

import base from '../api/base';
import {XIcon} from '@heroicons/react/solid'

function Modal({setViewModal, viewModal, handleAlert}) {
  
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  
  const [formAlert, setFormAlert] = useState('');

  const addEmployee = (e) => {
    e.preventDefault();
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Phone = numberRef.current.value;
    base('freeconsultation').create(
      { Name, Email, Phone },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        // prompt(record.getId());
      }
    );
    setViewModal(!viewModal);
    handleAlert()
  };

  return (
    <div  className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
    <div onClick={()=>setViewModal(!viewModal)} className="absolute h-full w-full bg-black bg-opacity-80 inset-0 -z-10"></div>
    <div className='relative  flex p-3'>
 <div className="relative w-full flex flex-col max-w-[400px] shrink py-2 px-5  rounded-xl shadow-lg  bg-gray-900 ">
  
   {/* <!--content--> */}
   <div className='text-left  text-lg  px-3 pt-10 pb-4 text-gray-300'>Please enter your details to get a call back from <span className='text-xl '> Career Mentor</span> </div>
   <div onClick={()=>setViewModal(!viewModal)} className='absolute right-4 top-3'> <XIcon className='w-7 p-1 text-white hover:text-yellow-500'></XIcon> </div>
   <div className="">
   <form action=""  className=''>
     {/* <!--body--> */}
     <div className='p-3 py-6 space-y-5'>
                <div className='space-y-7'>
                <div className='w-full text-left'>
                    <p className='text-sm 2xl:text-base text-gray-100'>Your Name</p>
                    <input className='form-control text-[0.95rem] 2xl:text-lg outline-none border-gray-800 bg-transparent border-b-2 w-full text-gray-100' title='Please enter your name' placeholder='Your Name' type="name"
            id="exampleInputName"
            aria-describedby="nameHelp"
            ref={nameRef}/>
                </div>
                <div className='w-full text-left'>
                    <p className='text-sm 2xl:text-base text-gray-100'>Email</p>
                    <input className='form-control text-[0.95rem] 2xl:text-lg outline-none border-gray-800 bg-transparent border-b-2 w-full text-gray-100' title='Please enter a valid email address' placeholder='Enter Your Email Address' type="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    ref={emailRef} />
                </div>
                <div className='w-full text-left'>
                    <p className='text-sm 2xl:text-base text-gray-100'>Mobile No</p>
                    <input className='form-control text-[0.95rem] 2xl:text-lg outline-none border-gray-800 bg-transparent border-b-2 w-full text-gray-100' title='Please enter a 10 digit mobile no' placeholder='Enter Your Mobile No' pattern='[1-9]{1}[0-9]{9}' 
                    type="number"
           id="exampleInputNumber"
           ref={numberRef} />
                </div>

                </div>

                <div className="p-3  mt-2 text-center space-x-4 md:block">
         <button type="submit" onClick={addEmployee} className="mb-2 2xl:text-lg md:mb-0 bg-gradient-to-br rounded-sm from-yellow-500 to-orange-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white w-full hover:shadow-lg ">Submit</button>
     </div>

            </div>
     {/* <!--footer--> */}
    
     
     </form>
   </div>
   </div>
 </div>
</div>
  )
}

export default Modal