import React, { useState, useRef } from "react";

import base from '../api/base';
import "../App.css";
import { db } from "../features/firebase";
import imageHolder from '../assets/homeWebp/section7/Image Holder.webp'
import {CheckIcon} from '@heroicons/react/solid';
import { useForm } from "react-hook-form";

function BankDetails() {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  
  const [formAlert, setFormAlert] = useState('');

  const addEmployee = (e) => {
    e.preventDefault();
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Phone = numberRef.current.value;
    base('instagramebook').create(
      { Name, Email, Phone },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        // prompt(record.getId());
      }
    );
    setFormAlert(!formAlert)
  };
  return (
      <section>
      <div className="py-10 w-full" id="ebook" style={{paddingBottom:"70px"}}>
		  <div className="w-full h-[530px] sm:h-[500px] xl:h-[500px] 2xl:h-[430px] relative overflow-hidden">
      <img className='absolute top-24 sm:min-w-[800px] w-full h-64 object-cover overflow-x-hidden ' src="https://ik.imagekit.io/microdegree/New/5556661_ePiTnxbw_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675139863544" alt="" loading="lazy"/>
      
      <center>
      <div >
        <div className=" relative w-full  h-full md:basis-1/2 flex justify-center  md:block">
        <div className="relative pb-14 sm:pb-5 w-full xl:w-[430px] xl:h-[430px] sm:w-72 2xl:w-[450px] h-fit 2xl:h-[800px] bg-gray-100 rounded-md ">

        <div className="head rounded-md bg-[#FCAA2D] px-5 py-8 flex flex-col items-center justify-center space-y-2 text-white">
          <h3 style={{fontSize:"32px",lineHeight:"35px"}}>Bank Details</h3>
          <p className='text-xs xl:text-sm 2xl:text-sm  w-45' style={{fontSize:"15px",marginTop:"17px",lineHeight:"20px"}}>Please try to Pay using below Bank Details</p>
        </div>
        
        <div className='w-full text-left space-y-1'>
        <center>
            <p className='text-base 2xl:text-base text-gray-900' style={{fontSize:"20px",paddingBottom:"10px",paddingTop:"20px"}}>Bank Name: IDFC FIRST BANK</p>
            <p className='text-base 2xl:text-base text-gray-900' style={{fontSize:"15px",paddingBottom:"30px",paddingLeft:"3px",paddingRight:"3px"}}>Account Name: MicroDegree Education Private Limited</p>
            <p className='text-base 2xl:text-base text-gray-900' style={{fontSize:"25px",paddingBottom:"10px",paddingLeft:"3px",paddingRight:"3px"}}>Account Number: 10053678810</p>
            <p className='text-base 2xl:text-base text-gray-900' style={{fontSize:"25px",paddingBottom:"30px"}}>IFSC Code: IDFB0080611</p>
            <p className='text-base 2xl:text-base text-gray-900' style={{fontSize:"15px",paddingBottom:"10px"}}>Branch: Lalbagh, Mangalore</p>
            <p className='text-base 2xl:text-base text-gray-900' style={{fontSize:"15px",paddingBottom:"10px"}}>Account Type: Current Account</p>
        </center>
                </div>
      </div>
    </div>
    </div>
    </center>

    </div>
    </div>
  
    </section>
  );
}
export default BankDetails;
