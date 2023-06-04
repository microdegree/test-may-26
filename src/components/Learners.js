import LearnerCard from './LearnerCard'

function CmnSection1({setLearnerVideo, setLearnerModal, learnerModal,learnerVideo}) {



  return (
    <div className='space-y-5 2xl:space-y-0 py-14 flex flex-col items-center'> 

              <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.3em] text-xs '>Testimonials</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>


        <div className="">
  <h1 className='text-4xl xl:text-6xl 2xl:text-6xl text-gray-700'> <span className="font-bold">Learner's</span> Talk</h1>
</div>
<div  className="p-1 w-full row flex items-center overflow-x-scroll h-[280px] xl:h-[400px]  2xl:h-[450px] scrollbar-hide  space-x-10">
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} learnerVideo={learnerVideo} setLearnerVideo={setLearnerVideo} bottomImg="https://ik.imagekit.io/microdegree/homeWebp/section8/akshay_Hj5QBjduP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661332674101" thumbnail="https://ik.imagekit.io/microdegree/homeWebp/section8/akshay2_9bP-OX_Bhi.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161393055" name='Akshay Prabhu' course_name='Python Course Student'  vidSrc='https://www.youtube.com/embed/sK-psHYOe1A' loading="lazy"></LearnerCard>
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo} bottomImg="https://ik.imagekit.io/microdegree/homeWebp/section8/keshav_vj7-Tkt87h.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161393259" thumbnail="https://ik.imagekit.io/microdegree/homeWebp/section8/keshavimg_Ypl6CzgWFr.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161393150" name='Keshav ' course_name='Python Course Student ' vidSrc='https://www.youtube.com/embed/snR2qTea6Fo' loading="lazy"></LearnerCard>
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo} bottomImg="https://ik.imagekit.io/microdegree/homeWebp/section8/sakshya__1__h5Fsr7jGX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661332674099"  thumbnail="https://ik.imagekit.io/microdegree/homeWebp/section8/sakshya2_TF5klIv3tN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161393150" name='Sakshya Shetty' course_name='Automation Testing Course Student' vidSrc='https://www.youtube.com/embed/ltirsj1pTj4' loading="lazy"></LearnerCard>
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo} bottomImg="https://ik.imagekit.io/microdegree/homeWebp/section8/Thousif_K9qCjdPxr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661332674119" thumbnail="https://ik.imagekit.io/microdegree/homeWebp/section8/Thousif2_b4LcjE_Dz2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161393158" name='Thousif N M' course_name='Job Mela Candidate' vidSrc='https://www.youtube.com/embed/LaQRNri5zSo' loading="lazy"></LearnerCard>
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo} bottomImg="https://ik.imagekit.io/microdegree/homeWebp/section8/samanth_fXZVa-DhMM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161393134" thumbnail="https://ik.imagekit.io/microdegree/homeWebp/section8/samanth2_nMczZIQ2R.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1661161393130" name='Samanth Kumar ' course_name='Fullstack Developer Course ' vidSrc="https://www.youtube.com/embed/zhbGbE6N77I" loading="lazy"></LearnerCard>
</div>
    </div>
  )
}


export default CmnSection1