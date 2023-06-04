// import React, { useState, useRef } from "react";

// import base from '../api/base';
// import {CheckIcon} from '@heroicons/react/solid';
// import imageHolder from '../assets/homeWebp/section7/Image Holder.webp';
// import "../App.css";



// function Testing() {
//   const nameRef = useRef();
//   const emailRef = useRef();
//   const numberRef = useRef();
  
//   const [formAlert, setFormAlert] = useState('');

//   const addEmployee = (e) => {
//     e.preventDefault();
//     const Name = nameRef.current.value;
//     const Email = emailRef.current.value;
//     const Phone = numberRef.current.value;
//     base('instagramebook').create(
//       { Name, Email, Phone },
//       function (err, record) {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         // prompt(record.getId());
//       }
//     );
//     setFormAlert(!formAlert)
//   };
//   return (
//       <section>
//       <div className="py-10 w-full" id="ebook" style={{paddingBottom:"70px"}}>
// 		  <div className="w-full h-[530px] sm:h-[500px] xl:h-[500px] 2xl:h-[530px] relative overflow-hidden">
//       <img className='absolute top-24 sm:min-w-[800px] w-full h-64 object-cover overflow-x-hidden ' src={imageHolder} alt="" loading="lazy"/>
//       <div className='w-full h-fit  sm:h-64 z-10 relative sm:flex'>
//       <div className=" hidden h-full basis-0 sm:basis-1/2 md:flex flex-col items-center justify-center mt-20 ">
//       <div className="text-white 2xl:mt-8 flex flex-col justify-center text-left space-y-2">
//         <p className="text-sm 2xl:text-xl font-roboto" style={{marginLeft:"90px"}}>ಫ್ರೀ e-ಪುಸ್ತಕ ಪಡೆಯಿರಿ</p>
//         <h3 className='text-4xl xl:text-5xl 2xl:text-5xl ' style={{marginLeft:"90px"}}><b>How to Become Cloud Professional</b></h3>
//         {/* <p className='text-xs 2xl:text-base text-gray-200 font-roboto w-96 2xl:w-[500px]'>Get the power and economies of cloud computing (AWS) with 15% off.</p> */}
//         </div>
//         </div>

//         <div className=" relative w-full  h-full md:basis-1/2 flex justify-center  md:block">
//         <form className='h-full w-full'  action="">

//         <div className="relative pb-14 sm:pb-5 w-full xl:w-[430px] xl:h-[900px] sm:w-72 2xl:w-[450px] h-fit 2xl:h-[800px] bg-gray-100 rounded-md ">
//       <div className={` ${formAlert?'block':'hidden'} bg-opacity-90 bg-black z-30 top-0 w-full p-5 flex justify-start py-24 items-center flex-col h-full absolute space-y-4`}>
//       <CheckIcon className='w-16 bg-gradient-to-br animate-popup from-orange-500 to-yellow-500 text-white p-3 rounded-full'></CheckIcon>
//       <p className='font-bold text-white text-2xl'>Thanks for submitting </p>
//       <p className='text-sm text-white'>You will soon receive your free ebook on your email id. For re-submitting <span className='text-yellow-500 cursor-pointer ' onClick={()=>setFormAlert(!formAlert)}><a href="https://www.microdegree.work/ebook">Click here</a></span> </p>
//     </div>
//         <div className="head rounded-md bg-[#FCAA2D] px-5 py-8 flex flex-col items-center justify-center space-y-2 text-white">
//           <h3 style={{fontSize:"32px",lineHeight:"35px"}}>Download Free eBook</h3>
//           <p className='text-xs xl:text-sm 2xl:text-sm  w-45' style={{fontSize:"15px",marginTop:"17px",lineHeight:"20px"}}>FREE guide on "How to become a Cloud Professional"</p>
//         </div>
//         <div className=" px-3  sm:px-7 xl:px-7 py-10 sm:py-5 2xl:py-10 ovrflow-visible space-y-7">
//         <div className='w-full text-left space-y-1'>
//                     <p className='text-base 2xl:text-base text-gray-900'>Your Name</p>
//                     <input className='form-control  text-lg 2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter your name' placeholder='Your Name' 
//                     type="name"
//             id="exampleInputName"
//             aria-describedby="nameHelp"
//             ref={nameRef} />
                 
//                 </div>
//                 <div className='w-full text-left space-y-1'>
//                     <p className='text-base 2xl:text-base text-gray-900'>Email</p>
//                     <input className='form-control  text-lg 2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter a valid email address' placeholder='Enter Your Email Address' 
//                     type="email"
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                     ref={emailRef} />
                
//                 </div>
//                 <div className='w-full text-left space-y-1'>
//                     <p className='text-base 2xl:text-base text-gray-900'>Mobile No</p>
//                     <input className='form-control  text-lg  2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter a 10 digit mobile no' placeholder='Enter Your Mobile No' pattern='[1-9]{1}[0-9]{9}'
//            type="number"
//            id="exampleInputNumber"
//            ref={numberRef}
//            />
                    
//                 </div>
//                 <button type="submit"
//           onClick={addEmployee} className="w-full my-2 py-4 xl:p-3 xl:px-6 2xl:py-4 2xl:px-8  bg-[#FCAA2D] sm:rounded-md text-base xl:text-lg 2xl:text-xl text-white">Get it Now</button>
//         </div>

//       </div>
// </form>

 
//     </div>



//     </div>
//     </div>
//     </div>
  
//     </section>
     
//   );
// }

// export default Testing;






import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../features/firebase";
import imageHolder from '../assets/homeWebp/section7/Image Holder.webp'
import {CheckIcon} from '@heroicons/react/solid';

function Testing() {
  const [customerName, setCustomerName] = useState("");
	const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [formAlert, setFormAlert] = useState('');
	const [customersData, setCustomersData] = useState([]);
  
	
	useEffect(() => {
	  db.collection("customersData").onSnapshot((snapshot) => {
		setCustomersData(
		  snapshot.docs.map((doc) => ({
			id: doc.id,
			data: doc.data(),
		  }))
		);
	  });
	  console.log({ customersData });
	}, []);
	
	const submit = (e) => {
	  e.preventDefault();
	  db.collection("customersData").add({
		name: customerName,
    phone: customerPhone,
		password: customerEmail,
	  });
	
	  setCustomerName("");
    setCustomerPhone("");
	  setCustomerEmail("");
    setFormAlert(!formAlert);
	};

	return (
    <section>
      <div className="py-10 w-full" id="ebook" style={{paddingBottom:"70px"}}>
		  <div className="w-full h-[530px] sm:h-[500px] xl:h-[500px] 2xl:h-[530px] relative overflow-hidden">
      <img className='absolute top-24 sm:min-w-[800px] w-full h-64 object-cover overflow-x-hidden ' src={imageHolder} alt="" loading="lazy"/>
      <div className='w-full h-fit  sm:h-64 z-10 relative sm:flex'>
      <div className=" hidden h-full basis-0 sm:basis-1/2 md:flex flex-col items-center justify-center mt-20 ">
      <div className="text-white 2xl:mt-8 flex flex-col justify-center text-left space-y-2">
        <p className="text-sm 2xl:text-xl font-roboto" style={{marginLeft:"90px"}}>ಫ್ರೀ e-ಪುಸ್ತಕ ಪಡೆಯಿರಿ</p>
        <h3 className='text-4xl xl:text-5xl 2xl:text-5xl ' style={{marginLeft:"90px"}}><b>How to Become Cloud Professional</b></h3>
        {/* <p className='text-xs 2xl:text-base text-gray-200 font-roboto w-96 2xl:w-[500px]'>Get the power and economies of cloud computing (AWS) with 15% off.</p> */}
        </div>
        </div>

        <div className=" relative w-full  h-full md:basis-1/2 flex justify-center  md:block">

        <div className="relative pb-14 sm:pb-5 w-full xl:w-[430px] xl:h-[900px] sm:w-72 2xl:w-[450px] h-fit 2xl:h-[800px] bg-gray-100 rounded-md ">
      <div className={` ${formAlert?'block':'hidden'} bg-opacity-90 bg-black z-30 top-0 w-full p-5 flex justify-start py-24 items-center flex-col h-full absolute space-y-4`}>
      <CheckIcon className='w-16 bg-gradient-to-br animate-popup from-orange-500 to-yellow-500 text-white p-3 rounded-full'></CheckIcon>
      <p className='font-bold text-white text-2xl'>Thanks for submitting </p>
      <p className='text-sm text-white'>You will soon receive your free ebook on your email id. For re-submitting <span className='text-yellow-500 cursor-pointer ' onClick={()=>setFormAlert(!formAlert)}> <a href='https://jocular-lokum-03d97a.netlify.app/testing'>Click here</a></span> </p>
    </div>
        <div className="head rounded-md bg-[#FCAA2D] px-5 py-8 flex flex-col items-center justify-center space-y-2 text-white">
          <h3 style={{fontSize:"32px",lineHeight:"35px"}}>Download Free eBook</h3>
          <p className='text-xs xl:text-sm 2xl:text-sm  w-45' style={{fontSize:"15px",marginTop:"17px",lineHeight:"20px"}}>FREE guide on "How to become a Cloud Professional"</p>
        </div>
        <div className=" px-3  sm:px-7 xl:px-7 py-10 sm:py-5 2xl:py-10 ovrflow-visible space-y-7">
        <div className='w-full text-left space-y-1'>
                    <p className='text-base 2xl:text-base text-gray-900'>Your Name</p>
                    <input noValidate value={customerName} onChange={(e) => setCustomerName(e.target.value)} className='  text-lg 2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter your name' placeholder='Your Name' type="text" name="name" id="name" />
                </div>
                <div className='w-full text-left space-y-1'>
                    <p className='text-base 2xl:text-base text-gray-900'>Email</p>
                    <input noValidate value={customerEmail} onChange={(e)=>{setCustomerEmail(e.target.value)}} className='  text-lg 2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter a valid email address' placeholder='Enter Your Email Address' type="email" name="email" id="email" />
                </div>
                <div className='w-full text-left space-y-1'>
                    <p className='text-base 2xl:text-base text-gray-900'>Mobile No</p>
                    <input noValidate value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className='  text-lg  2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter a 10 digit mobile no' placeholder='Enter Your Mobile No' type="text" pattern='[1-9]{1}[0-9]{9}' name="number" id="number" />
                </div>
                <button onClick={submit} className="w-full my-2 py-4 xl:p-3 xl:px-6 2xl:py-4 2xl:px-8  bg-[#FCAA2D] sm:rounded-md text-base xl:text-lg 2xl:text-xl text-white">Get it Now</button>
        </div>

      </div>


 
    </div>



    </div>
    </div>
    </div>
  
    </section>
  );
}
export default Testing;
