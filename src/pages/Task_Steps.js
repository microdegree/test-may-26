import React, { useState, useRef } from "react";

import "../App.css";

function Task_Steps() {
  return (
     <div>
        <section>
    <div className="sm:mx-5 hidden sm:block" style={{paddingBottom:"20px"}}>
    <center>
    <h1 style={{marginTop:"40px",fontSize:"45px",paddingBottom:"20px"}}><b>TASK STEPS</b></h1>

    </center>
    <div className=" w-full h-full flex flex-wrap space-x-2 items-center justify-around 2xl:justify-center 2xl:space-x-3 align-center px-10 sm:px-24">
      <img style={{width:"400px"}} src="https://ik.imagekit.io/microdegree/hiring/1st_step__3__-_Copy_MCXZF7DH_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671520361597" alt="" loading="lazy"/>
      <img style={{width:"400px"}} src="https://ik.imagekit.io/microdegree/hiring/2nd_step_04Uy86UUM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671520676184" alt="" loading="lazy"/>
      <img style={{width:"400px"}} src="https://ik.imagekit.io/microdegree/hiring/1st_step__5__fsljEJwWq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671536788001" alt="" loading="lazy"/>
    </div>
  </div>
  <div className="sm:mx-5 block sm:hidden" style={{padding:"20px"}}>
  <h1 style={{marginTop:"10px",fontSize:"35px",paddingBottom:"20px"}}><b>TASK STEPS</b></h1>
    <center>
    <img  style={{paddingBottom:"20px"}} src="https://ik.imagekit.io/microdegree/hiring/1st_step__3__-_Copy_MCXZF7DH_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671520361597" alt="" loading="lazy"/>
    <img  style={{paddingBottom:"20px"}} src="https://ik.imagekit.io/microdegree/hiring/2nd_step_04Uy86UUM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671520676184" alt="" loading="lazy"/>
    <img  style={{paddingBottom:"20px"}} src="https://ik.imagekit.io/microdegree/hiring/1st_step__5__W9FYsMWdA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671597013999" alt="" loading="lazy"/>
    </center>
  </div>
  </section>
     </div>
  );
}
export default Task_Steps;
