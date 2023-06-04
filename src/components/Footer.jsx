import React from 'react'
import fBg1 from '../assets/homeWebp/footer/fpart1/fBg1.webp'
import {PhoneIcon, MailIcon} from '@heroicons/react/solid'
import overlay43 from '../assets/homeWebp/footer/fpart1/overlay43.webp'
import Eclipse1 from '../assets/homeWebp/footer/fpart1/Eclipse1.webp'
import Eclipse2 from '../assets/homeWebp/footer/fpart1/Eclipse2.webp'
import Eclipse3 from '../assets/homeWebp/footer/fpart1/Eclipse3.webp'
import phone1 from '../assets/homeWebp/footer/fpart1/phone1.webp'
import phone2 from '../assets/homeWebp/footer/fpart1/phone2.webp'
import playstore from '../assets/homeWebp/footer/fpart1/playstore.webp'
import Qrcode from '../assets/homeWebp/footer/fpart1/Qrcode.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
<footer className=''>
  <section className="md:block hidden relative w-full h-fit  overflow-hidden">
    <img className=' object-fit xl:h-[430px] 2xl:h-[580px] w-full' src={fBg1} alt="" loading="lazy" />
    <img className='absolute z-10  -left-28 -bottom-28 ' src={Eclipse1} alt="" loading="lazy"/>
    <img className='absolute z-10  top-10 right-20' src={Eclipse2} alt="" loading="lazy"/>
    <img className='absolute z-10  top-40 right-[500px]' src={Eclipse3} alt="" loading="lazy"/>
    <img className="absolute w-full z-10 top-0 object-cover h-full " src={overlay43} alt="" loading="lazy" />

    <div className=' absolute top-0 z-20 flex items-center  h-full w-full'>
      <div className='basis-1/2 2xl:basis-2/4 text-left text-white px-36 2xl:px-44 py-10 2xl:py-14 space-y-2'>
      <div className='flex items-center space-x-3'><div className='bg-white   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-white p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className='uppercase text-white font-extrathin tracking-widest text-xs 2xl:text-[0.9rem] '>M o b i l e A p p</p> <div className='bg-white  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div><div className='bg-white  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>
      <div className=" h-full space-y-7 ">
        <h1 className='text-5xl 2xl:text-7xl'><span className="text-5xl font-semibold 2xl:text-7xl">Download</span><br /> <span className='font-regular'> Our App</span></h1>
        <p className='text-sm w-[450px] 2xl:text-lg'>Get up to date with the latest technologies and certification with IT skills. Download our app now & be part of fastest growing sector of the Indian economy.</p>
        <div className="flex w-full justify-between 2xl:justify-between items-center">
         <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp"> <img className='object-contain w-24 2xl:w-36' src={Qrcode} alt="" loading="lazy"/></a>
          <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp"><img className='w-36 2xl:w-56 shadow-xl object-contain' src={playstore} alt="" loading="lazy"/></a>
        </div>
      </div>
      </div>
      <div className=" relative basis-1/2 overflow-hidden h-full px-10">
        <img className="absolute  object-contain w-56 -bottom-48 2xl:w-72 2xl:-bottom-72 2xl:left-[200px] left-[170px]" src={phone1} alt="" loading="lazy"/>
        <img className="absolute  object-contain w-56 -bottom-44 2xl:w-72 2xl:-bottom-52 " src={phone2} alt="" loading="lazy"/>
      </div>

    </div>

  </section>

  {/* footer section 2 startts from here  */}
  <section className="hidden sm:block h-full w-full bg-[#364045] pt-10 px-20">
  <div className="flex  border-b-[0.1rem] border-gray-600 py-6 ">
    <div className="basis-1/4 text-left text-white space-y-4">
      <h1 className='text-2xl w-fit 2xl:text-3xl text-center leading-3 text-bold'> <span className='text-center'>Micro </span> <br/> <span className="font-medium text-left text-3xl 2xl:text-4xl font-roboto">Degree</span></h1>
      <p className="text-xs 2xl:text-sm 2xl:w-56 leading-5 text-gray-400 w-48 font-light ">MicroDegree is an Ed-tech platform teaching coding & job-ready skills in Kannada at an affordable price</p>
      <div className='flex py-2 space-x-3'>
      <a href="https://www.facebook.com/MicroDegree-101072281390361/?modal=admin_todo_tour"> 
        <FontAwesomeIcon className='text-2xl hover:text-[#1DA0F0] ' icon={faFacebook}></FontAwesomeIcon></a>

        {/* <a href="https://mobile.twitter.com/micro_degree">
        <FontAwesomeIcon className='text-sm p-[0.3rem] bg-white rounded-full text-[#364045] hover:bg-[#1DA0F0] ' icon={faTwitter}></FontAwesomeIcon></a>
         */}
        <a href="https://www.linkedin.com/company/microdegree/?viewAsMember=true">
        <FontAwesomeIcon className='text-sm p-[0.3rem] bg-white rounded-full text-[#364045] hover:bg-[#1DA0F0] ' icon={faLinkedin}></FontAwesomeIcon></a>

        <a href="https://www.youtube.com/channel/UCu8l4v6xqQd8LfOfd0kMPsA">
        <FontAwesomeIcon className='text-sm p-[0.3rem] bg-white rounded-full text-[#364045] hover:bg-[#1DA0F0] ' icon={faYoutube}></FontAwesomeIcon></a>

        <a href="https://www.instagram.com/microdegree.work/?hl=en">
        <FontAwesomeIcon className='text-sm p-[0.3rem] bg-white rounded-full text-[#364045] hover:bg-[#1DA0F0] ' icon={faInstagram}></FontAwesomeIcon></a>
      </div>
    </div>
    <div className="basis-1/4 flex items-center justify-center h-full">
      <ul className="space-y-2 font-light text-left">
        <li className='font-medium 2xl:text-lg text-gray-200'>Company</li>
        <li className='text-sm 2xl:text-lg text-gray-400'> <a href="https://pages.microdegree.work/about.html"> About</a></li>
        <li className='text-sm 2xl:text-lg text-gray-400'><a href="https://courses.microdegree.work/pages/premium-courses">All Courses</a></li>
        <li className='text-sm 2xl:text-lg text-gray-400'><a href="https://pages.microdegree.work/scholarship.html">Scholarships</a></li>
        <li className='text-sm 2xl:text-lg text-gray-400'><a href="https://courses.microdegree.work/courses/aws-certification-live">Trending Course</a></li>
        <li className='text-sm 2xl:text-lg text-gray-400'><a href="https://www.microdegree.work/refund-and-course-rescheduling-policy">Refund Policy</a></li>
    
      </ul>
    </div>
    <div className="basis-1/4 flex items-center justify-center h-full">
      <ul className="space-y-2 font-light text-left">
        <li className='font-medium 2xl:text-lg text-gray-200'>Useful Links</li>
        <li className='text-sm 2xl:text-lg text-gray-400'> <a href="https://t.me/microdegreekannada"> Community</a></li>
        <li className='text-sm 2xl:text-lg text-gray-400'> <a href="https://courses.microdegree.work/pages/free"> Free Courses</a></li>
        <li className='text-sm  2xl:text-lg text-gray-400'> <a href="https://blog.microdegree.work/">Blogs</a></li>
      </ul>
    </div>
    <div className="basis-1/4 font-light text-left space-y-3 text-xs 2xl:text-lg text-gray-400 px-10">
      <h3 className='text-gray-300 text-lg 2xl:text-lg font-medium'>Contact us</h3>
      <div className='flex space-x-2'><PhoneIcon className='w-3'></PhoneIcon>
      <p>0804-710-9999</p>
      </div>
      <div className='flex space-x-2'><MailIcon className='w-4'></MailIcon>
      <p>hello@microdegree.work</p>
      </div>
      
      <p>MicroDegree Education Private Limited (Formerly Pillpouch Healthtech Private Limited), K-tech Innovation Hub 3rd Floor, Plama Building Bejai, Mangaluru, Karnataka 575004.</p>
    </div>
  </div>
  <div className='py-3 flex font-light justify-between text-gray-400 text-xs'>
    <p>Copyright @2023 Microdegree All rights reserved</p>
    <div className="flex w-64 justify-between ">
      <a href="https://pages.microdegree.work/termsnconditions.html"><p>Terms & Conditions</p></a>
      <a href="https://www.microdegree.work/refund-and-course-rescheduling-policy"><p>Refund Policy</p></a>
      <a href="https://www.next.microdegree.work/privacy"><p>Legal & Privacy</p></a>
    </div>
    
  </div>
  </section> 
  {/* mobile version footer  */}

  <div className='sm:hidden relative w-full h-80 overflow-hidden'>
    <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp">
  <img loading="lazy" className="absolute w-full z-10 top-0 object-cover h-full " src="https://ik.imagekit.io/microdegree/homeWebp/footer/fpart1/overlay43_bQJM-xCoF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161174323" alt="" />
  
  <div className="absolute z-20 h-full w-full flex flex-col justify-center space-y-8 text-left">
  <div className=' text-3xl px-10 flex items-center space-x-3'><div className='bg-white   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-white p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className='uppercase text-white font-extrathin tracking-widest text-xs 2xl:text-[0.9rem] '>M o b i l e A p p</p> <div className='bg-white  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='b-white  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

    <div>
     <h1 className='text-3xl px-10 text-white' >Download MicroDegree App</h1> 
    </div>

    <div className='flex justify-around items-center'>
         <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp"> <img className='object-contain w-24 2xl:w-36' src={Qrcode} alt="" loading="lazy"/></a>
          <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp"><img className='w-36 2xl:w-56 shadow-xl object-contain' src={playstore} alt="" loading="lazy"/></a>
        </div>
        </div>

        <img className="absolute  object-contain w-56 -bottom-48 2xl:w-72 2xl:-bottom-72 2xl:left-[200px] left-[170px]" src={phone1} alt="" loading="lazy"/>
        <img className="absolute  object-contain w-56 -bottom-44 2xl:w-72 2xl:-bottom-52 " src={phone2} alt="" loading="lazy"/>
        </a>
  </div>

  <div className='sm:hidden bg-[#364045] px-10 p-10 flex flex-col  justify-center text-white  text-left space-y-6'>
    <div className='text-left  space-y-2'>
      <h1 className='text-3xl '>Micro<span className='text-bold text-left'>Degree</span> </h1>
      <p className='text-sm font-light'>MicroDegree is an Ed-tech platform teaching coding & job-ready skills in Kannada at an affordable price.</p>
    </div>

    <div className='text-left font-light text-sm space-y-2'>
      <h2 className='text-lg font-medium'>Useful Links</h2>
   
      <p> <a href='https://t.me/microdegreekannada'>Community</a> | <a href='https://courses.microdegree.work/pages/free'>Free Courses</a> | <a href='https://blog.microdegree.work/'>Blogs</a></p>
    </div>

    <div className='text-[0.8rem] space-y-2 font-light '>
      <h2 className='text-lg font-medium'>Company</h2>
      <p className='text-sm'> <a href="https://courses.microdegree.work/pages/premium-courses" >Courses</a> | <a href="https://pages.microdegree.work/scholarship.html" >Scholarship</a> | <a href="https://courses.microdegree.work/courses/aws-certification-live" >Trending Course</a><a href="https://www.microdegree.work/refund-and-course-rescheduling-policy">Refund Policy</a></p>
    
      
    </div>
    <div className="font-light flex flex-col justify-center items-center space-y-3 text-sm  text-gray-200 ">
      <h3 className=' text-2xl self-start font-medium'>Contact us</h3>

      
      <p className='text-left '>MicroDegree Education Private Limited (Formerly Pillpouch Healthtech Private Limited), K-tech Innovation Hub 3rd Floor, Plama Building Bejai, Mangaluru, Karnataka 575004.</p>
      <div className='flex py-2 space-x-3'>
      <a href="https://www.facebook.com/MicroDegree-101072281390361/?modal=admin_todo_tour"> 
        <FontAwesomeIcon className='text-2xl hover:text-[#1DA0F0] ' icon={faFacebook}></FontAwesomeIcon></a>

        <a href="https://www.linkedin.com/company/microdegree/?viewAsMember=true">
        <FontAwesomeIcon className='text-sm p-[0.3rem] bg-white rounded-full text-[#364045] hover:bg-[#1DA0F0] ' icon={faLinkedin}></FontAwesomeIcon></a>

        <a href="https://www.youtube.com/channel/UCu8l4v6xqQd8LfOfd0kMPsA">
        <FontAwesomeIcon className='text-sm p-[0.3rem] bg-white rounded-full text-[#364045] hover:bg-[#1DA0F0] ' icon={faYoutube}></FontAwesomeIcon></a>

        <a href="https://www.instagram.com/microdegree.work/?hl=en">
        <FontAwesomeIcon className='text-sm p-[0.3rem] bg-white rounded-full text-[#364045] hover:bg-[#1DA0F0] ' icon={faInstagram}></FontAwesomeIcon></a>
      </div>

      <div className-='flex justify-center flex-col'>
      <div className='flex justify-center space-x-2 text-xs'><PhoneIcon className='w-3'></PhoneIcon>
      <p>0804-710-9999</p>
      </div>
      <div className='flex justify-center space-x-2 text-xs'><MailIcon className='w-4'></MailIcon>
      <p>hello@microdegree.work</p>
      </div>

      </div>
    </div>

  </div>
  <div className="sm:hidden  bg-[#364045] flex p-3 justify-center space-x-14 text-[0.6rem] border-t-[0.03rem] text-gray-200 ">
     <div><a href="https://pages.microdegree.work/termsnconditions.html"><p>Terms & Conditions</p></a></div>
     <div><a href="https://www.microdegree.work/refund-and-course-rescheduling-policy"><p>Refund Policy</p></a></div>
     <div> <a href="https://www.next.microdegree.work/privacy"><p>Legal & Privacy</p></a></div>
    </div>
</footer>
  )
}

export default Footer