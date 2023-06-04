import React from 'react'
import TrainerCard from "./TrainerCard";


const trainers = [
  {
    id:1,
    trainer_name:'Raj',
    trainer_desc:'Raj sir is an industry leading trainer with wide experience teaching students from top companies. He works as a cloud architect  managing the network infrastructure.',
    profession:'Senior System Engineer',
    top_logo:require('../assets/homeWebp/section6/amazon.png'),
    bottom_logo:require('../assets/homeWebp/section6/airbus.webp'),
    propColor:'text-white',
    cardColor:'bg-gray-100',

  },
  {
    id:2,
    trainer_name:'Pallavi',
    trainer_desc:'Pallavi Mam has training experience of students switching from non IT background like mech Civil engg branches & bcom grads. Her expertise is in bridging students with zero knowledge to IT field.',
    profession:'Cloud Architect ',
    top_logo:require('../assets/homeWebp/section6/amazon.png'),
    bottom_logo:require('../assets/homeWebp/section6/adobe.webp'),
    propColor:'text-gray-200',
    cardColor:'bg-white',

  },
  {
    id:3,
    trainer_name:'Manikanta  ',
    trainer_desc:'Manikanta sir is an expert MERN Stack Developer. He has trained 1000s of students in front end technologies. He is known for his javascript training with local examples. He is one of the top React trainer in Karnataka.',
    profession:'MERN Expert',
    top_logo:require('../assets/homeWebp/section6/mern.png'),
    bottom_logo:require('../assets/navbar/MicroDegree Web.png'),
    propColor:'text-white',
    cardColor:'bg-gray-100',

  },
  {
    id:4,
    trainer_name:'Sathya',
    trainer_desc:'Sathya sir is the top architect in his organization. He has expertise in scaling systems to millions of web traffic.',
    profession:'Sr.DevOps Engineer',
    top_logo:require('../assets/homeWebp/section6/amazon.png'),
    bottom_logo:require('../assets/homeWebp/section6/harman.webp'),
    propColor:'text-gray-200',
    cardColor:'bg-white',

  },
  {
    id:5,
    trainer_name:'Mithun',
    trainer_desc:'Mithun sir leads the cloud computing team at his organization. He comes from networking background and later transitioned to cloud computing and has total 12+ years experience. He is known for his DevOps training with expertise in CI CD pipeline.',
    profession:'Cloud Team Manager ',
    top_logo:require('../assets/homeWebp/section6/amazon.png'),
    bottom_logo:require('../assets/homeWebp/section6/walmart.png'),
    propColor:'text-white',
    cardColor:'bg-gray-100',

  },
  {
    id:6,
    trainer_name:'Rakesh ',
    trainer_desc:'Rakesh sir is the CTO at MicroDegree with 12+ years of experience. He has experience designing and building scalable systems in top MNCs. He specializes in getting students with zero knowledge to bring on par with techies working in the IT industry',
    profession:'CTO',
    top_logo:require('../assets/homeWebp/section6/amazon.webp'),
    bottom_logo:require('../assets/navbar/MicroDegree Web.png'),
    propColor:'text-gray-200',
    cardColor:'bg-white',

  },
  {
    id:7,
    trainer_name:'Umesh',
    trainer_desc:'Umesh sir excels in guiding students prepare for technical interviews. His resume building sessions are the most sought in the industry',
    profession:'Cloud Specialist ',
    top_logo:require('../assets/homeWebp/section6/amazon.png'),
    bottom_logo:require('../assets/homeWebp/section6/ey.webp'),
    propColor:'text-gray-200',
    cardColor:'bg-white',

  },
  {
    id:8,
    trainer_name:'Krishna',
    trainer_desc:'Krishna sir is a udemy top AWS trainer. He has speciality experience in training students from US and other countries.',
    profession:'Sr.Security Engineer',
    top_logo:require('../assets/homeWebp/section6/amazon.png'),
    bottom_logo:require('../assets/homeWebp/section6/matchmove.png'),
    propColor:'text-white',
    cardColor:'bg-gray-100',

  },
  {
    id:9,
    trainer_name:'Chetan',
    trainer_desc:'Chetan sir is a DevOps Terraform expert. His Kubernetes training skills are known across tech circles.',
    profession:'Cloud Automation Engineer ',
    top_logo:require('../assets/homeWebp/section6/amazon.png'),
    bottom_logo:require('../assets/homeWebp/section6/airbus.webp'),
    propColor:'text-white',
    cardColor:'bg-gray-100',

  },
]
function HomeSection6() {
  return (
    <div>
    <div className=' hidden  p-9 md:px-14 xl:px-18 2xl:px-20 w-full h-full sm:flex items-start justify-between ' >

  <div className=" w-full sm:basis-2/5 sm:min-w-[500px]  text-left space-y-3 ">

  <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem] h-[0.1rem] w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.3rem] text-xs '>Expert Trainers</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

    <h1 className=' text-4xl xl:text-5xl whitespace-nowrap 2xl:text-6xl text-gray-700 tracking-wide'><span className="font-bold">Industry</span> <span>Trainers.</span></h1>
    <p className="text-sm xl:text-sm xl:w-[440px] 2xl:text-base 2xl:w-[500px] text-gray-700 sm:w-[420px] ">Get an opportunity to learn directly from these industry veterans who work at top companies. They have joined our mission to give back to the Kannada community. Their vision is to empower every Kannadiga to get their dream job.</p>
  </div>
  <div className=' hidden  w-[800px] xl:w-[900px] 2xl:w-[920px] -mr-[120px] md:flex overflow-x-scroll space-x-7'>

{
  trainers.map(item=>(
    <TrainerCard key={item.id} title={item.trainer_name} desc={item.trainer_desc} profession={item.profession} top_logo={item.top_logo} bottom_logo={item.bottom_logo} propColor={item.propColor} cardColor={item.cardColor}></TrainerCard>
  ))
}



{/* added for scroll functionability */}
<div className='min-w-[80px]'>.</div>

  </div>
</div>
<div className='sm:hidden px-8 py-10 space-y-8'>
<div className=" w-full flex flex-col justify-center items-start text-left space-y-3 ">

<div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem] h-[0.1rem] w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.3rem] text-xs '>Expert Trainers</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

  <h1 className=' text-4xl  whitespace-nowrap text-gray-700 tracking-wide'><span className="font-bold">Industry</span> <span>Trainers.</span></h1>
  <p className="text-sm  text-gray-700  ">Get an opportunity to learn directly from these industry veterans who work at top companies. They have joined our mission to give back to the Kannada community. Their vision is to empower every Kannadiga to get their dream job.</p>
</div>
<div className='min-w-{100%} space-x-5 flex overflow-x-scroll'>

{
  trainers.map(item=>(
    <TrainerCard key={item.id} title={item.trainer_name} desc={item.trainer_desc} profession={item.profession} top_logo={item.top_logo} bottom_logo={item.bottom_logo} propColor={item.propColor} cardColor={item.cardColor}></TrainerCard>
  ))
}

{/* added for scroll functionability */}
<div className='min-w-[80px]'>.</div>
</div>
</div>
</div>
  )
}

export default HomeSection6