
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import SearchedOutput from './pages/SearchedOutput';
import { useState } from 'react';

import Ebook from './pages/Ebook';
import Survey from './pages/Survey';
import Courses from './pages/Courses';

import ReactGA from 'react-ga';
import Whatsapp from './pages/Whatsapp';
import Kn_Blogs from './pages/Kn_Blog';
import JoinDemo from './pages/JoinDemo';
import Task_Steps from './pages/Task_Steps';
import Privacy from './pages/Privacy';
import Hiring from './pages/Hiring';
import JoinDrive from './pages/JoinDrive';
import BankDetails from './pages/BankDetails';
import ThankYou from './pages/ThankYou';
const TRACKING_ID = "UA-240891607-1";
ReactGA.initialize(TRACKING_ID);


function App() {

  const [searchedResults, setSearchedResults] = useState([])
  const [alertStatus, setAlertStatus] = useState(false)

  
  const handleAlert =()=>{
    setAlertStatus(!alertStatus)
    setTimeout(() => (
      setAlertStatus(false)
    ), 4000);
  }

  return (
    <div className="App relative w-full h-full overflow-x-hidden overflow-y-hidden font-poppins ">
      {/* <div className='relative w-full h-full '> */}
        {/* </div> */}

        <div className='absolute top-0 bg-repeat -z-10 w-full h-full '>
          <div className='relative h-full '>
        <img className="w-52  absolute top-10 -left-20 -z-10" src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_2_HIiNBR7tx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149336" alt="" />
        <img className="w-52 absolute top-40 right-0 -z-10" src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344" alt="" />
        <img className="w-52 absolute top-60 left-96 -z-10" src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354" alt="" />
        <img
          className="w-52 absolute top-[500px] -z-10 left-0"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_5_KfPpQbr692.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149383"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[700px] -z-10 right-20"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_6_wlveWSMMxp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149371"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[850px] -z-10 left-96"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_7_XaE1Czf875.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149393"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[1050px] -z-10 left-10"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_8_j8dOugzXtd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149345"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[1150px] -z-10 right-10"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_9_Vkrkh2T2Uv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149356"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[1550px] -z-10 -left-24"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_2_HIiNBR7tx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149336"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[1750px] -z-10 right-0"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[1950px] -z-10 left-96"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[2450px] -z-10 right-10"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_6_wlveWSMMxp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149371"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[2650px] -z-10 left-96"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_7_XaE1Czf875.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149393"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[2850px] -z-10 left-10"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_8_j8dOugzXtd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149345"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[3150px] -z-10 left-96"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_11_3jfFczI1e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149340"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[3350px] -z-10 right-5"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_10_gbXxGgi5A.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149350"
          alt=""
        />
        <img loading="lazy"
          className="w-52 absolute top-[3350px] -z-10 right-5"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_10_gbXxGgi5A.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149350"
          alt=""
        />
        {/* ********************** */}
        <img loading="lazy"
          className="w-52 absolute top-[4350px] -z-10 right-5"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_10_gbXxGgi5A.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149350"
          alt=""
        />
          <img loading="lazy"
          className="w-52 absolute top-[4000px] -z-10 left-44"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />
                <img loading="lazy"
          className="w-52 absolute top-[3850px] -z-10 right-56"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />
          <img loading="lazy"
          className="w-52 absolute top-[4550px] -z-10 -left-24"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_2_HIiNBR7tx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149336"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[4350px] -z-10 left-[200px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />
        {/* ******************************** */}
        <img loading="lazy"
          className="w-52 absolute top-[5350px] -z-10 right-5"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_10_gbXxGgi5A.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149350"
          alt=""
        />
          <img loading="lazy"
          className="w-52 absolute top-[5000px] -z-10 left-44"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />
                <img loading="lazy"
          className="w-52 absolute top-[5850px] -z-10 right-56"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />
          <img loading="lazy"
          className="w-52 absolute top-[5550px] -z-10 -left-24"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_2_HIiNBR7tx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149336"
          alt=""
        />
                  <img loading="lazy" 
          className="w-52 absolute top-[6200px] -z-10 left-[200px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[6600px] -z-10 -left-[80px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_2_HIiNBR7tx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149336"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[7000px] -z-10 -right-[80px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[6700px] -z-10 right-[50px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_5_KfPpQbr692.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149383"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[7300px] -z-10 left-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />  
                  <img loading="lazy"
          className="w-52 absolute top-[7600px] -z-10 right-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[8000px] -z-10 left-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />   
                  <img loading="lazy"
          className="w-52 absolute top-[8300px] -z-10 right-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[8600px] -z-10 left-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />  
                  <img loading="lazy"
          className="w-52 absolute top-[9000px] -z-10 right-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[9600px] -z-10 left-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />  
                  <img loading="lazy"
          className="w-52 absolute top-[9900px] -z-10 right-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />
                  <img loading="lazy"
          className="w-52 absolute top-[10200px] -z-10 left-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_4_THAgo2BGDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149354"
          alt=""
        />  
                  <img loading="lazy"
          className="w-52 absolute top-[10400px] -z-10 right-[30px]"
          src="https://ik.imagekit.io/microdegree/homeWebp/background/Ellipse_3_sQ6tpfuUMF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661161149344"
          alt=""
        />

        
        </div>
        </div>

{/* Home section starts here */}
      <div className='  overflow-x-hidden w-full h-full relative '>

         <div className={` ${alertStatus?"block":'hidden'} fixed z-40 w-full h-screen flex justify-center items-end py-20 sm:items-end sm:py-5`}>
          <div class="bg-green-500 rounded-b text-white px-4 py-1 shadow-md" role="alert">
      <div class="flex">
        <div class="py-1"><svg class="fill-current h-6 w-6 text-white mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
        <div className=' flex flex-col justify-center items-start'>
          <p class="font-medium">Submitted Successfully</p>
          <p class="font-light text-xs xl:text-sm">Our Team will contact you shortly</p>
        </div>
      </div>
    </div>
    </div>
      <Router>
      <Navbar setSearchedResults={setSearchedResults}></Navbar>
      <Routes>
        {
          searchedResults.length!==0?<Route exact path="/" element={<SearchedOutput searchedResults={searchedResults} setSearchedResults={setSearchedResults}></SearchedOutput>}/>:<Route exact path="/" element={<Home handleAlert={handleAlert}></Home>}/>
        }
        {/* <Route exact path="/courses" element={<CoursePage></CoursePage>}/> */}
        
      
        <Route exact path='/ebook' element={<Ebook/>} />
        <Route exact path='/survey' element={<Survey/>} />
        <Route exact path='/whatsapp' element={<Whatsapp/>} />
        <Route exact path='/courses' element={<Courses/>} />
        <Route exact path='/kn_blogs' element={<Kn_Blogs/>} />
        <Route exact path='/joindemo' element={<JoinDemo/>} />
        <Route exact path='/joindrive' element={<JoinDrive/>} />
        <Route exact path='/bankdetails' element={<BankDetails/>} />
        <Route exact path='/thankyou' element={<ThankYou/>} />
        <Route exact path='/refund-and-course-rescheduling-policy' element={<Privacy/>} />
        <Route exact path='/hiring' element={<Hiring/>} />
        <Route exact path='/task_steps' element={<Task_Steps/>} />
   </Routes>
   <Footer></Footer>
        </Router>
        
      </div>

    </div>
    
  );
}

export default App;
