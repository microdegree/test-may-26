import React, { useState, useRef } from "react";

import base from '../api/base';
import "../App.css";
import { db } from "../features/firebase";
import imageHolder from '../assets/homeWebp/section7/Image Holder.webp'
import {CheckIcon} from '@heroicons/react/solid';
import { useForm } from "react-hook-form";

function ThankYou() {
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
      <div>
          <section>
        <div className="sm:mx-5 hidden sm:block">
        <center>
        <h1 style={{marginTop:"60px",fontSize:"40px"}}>ದಾಖಲಾದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.</h1>
        <h2 style={{marginTop:"10px",fontSize:"20px"}}>ನೀವು ಶೀಘ್ರದಲ್ಲೇ ಇಮೇಲ್ ಲಿಂಕ್ ಅನ್ನು ಪಡೆಯುತ್ತೀರಿ</h2>
        <h1 style={{paddingBottom:"10px",color:"#FF1F5F",paddingLeft:"140px",paddingRight:"140px",marginTop:"20px"}}>Please Note: Sometimes our servers might be busy due to high traffic. You should be able to see the enrolled courses in your DASHBOARD in around 30 minutes. Thanks for supporting us!</h1>
        <div  style={{paddingBottom:"50px"}}>
        <a href="https://courses.microdegree.work/users/sign_in"><button className=" p-[0.9rem] px-9 bg-[#FF0049] text-white text-base 2xl:text-lg rounded-md">Login</button></a>
        </div>
        </center>
        </div>
        <div className="sm:mx-5 block sm:hidden" style={{marginTop:"-20px"}}>
        <h2 style={{marginTop:"60px",fontSize:"30px"}}>ದಾಖಲಾದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.</h2>
        <h2 style={{fontSize:"15px"}}>ನೀವು ಶೀಘ್ರದಲ್ಲೇ ಇಮೇಲ್ ಲಿಂಕ್ ಅನ್ನು ಪಡೆಯುತ್ತೀರಿ</h2>
        <center>
        <h1 style={{paddingBottom:"10px",color:"#FF1F5F",fontSize:"12px",paddingTop:"10px"}}>Please Note: Sometimes our servers might be busy due to high traffic. You should be able to see the enrolled courses in your DASHBOARD in around 30 minutes. Thanks for supporting us!</h1>
        <div  style={{paddingBottom:"30px"}}>
        <a href="https://courses.microdegree.work/users/sign_in"><button className=" p-[0.9rem] px-9 bg-[#FF0049] text-white text-base 2xl:text-lg rounded-md">Login</button></a>
        </div>
        </center>
        </div>
        </section>
        </div>
  
    </section>
  );
}
export default ThankYou;
