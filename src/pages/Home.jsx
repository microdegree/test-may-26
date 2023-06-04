import React from "react";
import { useState , useEffect} from "react";
import Modal from "../components/Modal";
import Learners from "../components/Learners";
import Placements from "../components/Placements";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";
import HomeForm2 from "../components/HomeForm2";
import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import JoinMicroDegree from "../components/JoinMicroDegree";
import IndustryTrainers from "../components/IndustryTrainers";
import HomeForm1 from "../components/HomeForm1";
import NewsMedia from "../components/News&Media";
import Recognisation from "../components/RecognisationSection"
import ReactGA from 'react-ga';

function Home({handleAlert}) {
const [videoModal, setvideoModal] = useState(false);
const [viewModal, setViewModal] = useState(false);
const [videoOutput, setVideoOutput]= useState()
const [learnerVideo, setLearnerVideo]= useState('')
const [learnerModal, setLearnerModal]= useState(false)
console.log(learnerVideo)

// useEffect(() => {
//   ReactGA.pageview(Window.location.pathname)
// },{});

  return (
    <div className="relative overflow-x-hidden">
      {/* main hone section starts from here */}


      <div className="main_container relative">
        {
          viewModal && 
          <Modal handleAlert={handleAlert}  viewModal={viewModal} setViewModal={setViewModal} ></Modal>
        }
        {
          videoModal && 

          <VideoModal vidLink={videoOutput.link} vidTitle={videoOutput.title} setvideoModal={setvideoModal} videoModal={videoModal}></VideoModal>
        }
        {
          learnerModal && 

          <VideoModal setvideoModal={setLearnerModal} videoModal={learnerModal} vidLink={learnerVideo}  ></VideoModal>
        }


{/* ************************************* Hero section ********************************  */}
<section id="hero"><Hero viewModal={viewModal} setViewModal={setViewModal} videoModal={videoModal} setvideoModal={setvideoModal} videoOutput={videoOutput} setVideoOutput={setVideoOutput}   ></Hero></section>


<PopularCourses></PopularCourses>
<Recognisation></Recognisation>
<JoinMicroDegree></JoinMicroDegree>
<Placements></Placements>
<IndustryTrainers></IndustryTrainers>
<HomeForm1></HomeForm1>
<Learners learnerVideo={learnerVideo} setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo}></Learners>
<NewsMedia></NewsMedia>
<HomeForm2></HomeForm2>
      </div>
    </div>
  );
}

export default Home;
