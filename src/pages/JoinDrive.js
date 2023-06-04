import React, { useEffect, useState } from "react";

const JoinDrive = () => {
  const [joindrive, setJoindrive] = useState({});
  useEffect(() => {
        fetch("https://api.airtable.com/v0/appWI7MspPTOtNsm2/joindrive?api_key=keyAywRlrwgScQVhY")
          .then((res) => res.json())
          .then((data) => {
            setJoindrive(data.records);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
  return (
    <div>
      {joindrive.length > 0 ? (
      joindrive.map((record) => (
       
          <div>
          <section>
        <div className="sm:mx-5 hidden sm:block">
        <center>
        <h2 style={{marginTop:"60px"}}>Here's the details to join</h2>
        <h2>MicroDegree Cloud Drive</h2>
        <h1 style={{marginTop:"10px",fontSize:"20px",paddingBottom:"10px"}}><a href={record.fields.url}><u>{record.fields.url}</u></a></h1>
        <h1 style={{paddingBottom:"10px",color:"#FF1F5F"}}><b>MEETING ID : {record.fields.MeetingID}</b></h1>
        <h1 style={{paddingBottom:"10px",color:"#FF1F5F"}}><b>PASSCODE : {record.fields.Passcode}</b></h1>
        <h1 style={{paddingBottom:"10px",color:"#000"}}><b>TIME : {record.fields.Time}</b></h1>
        <div  style={{paddingBottom:"50px"}}>
        <a href={record.fields.url}><button className=" p-[0.9rem] px-9 bg-[#FF0049] text-white text-base 2xl:text-lg rounded-md">Join Cloud Drive</button></a>
        </div>
        </center>
        </div>
        <div className="sm:mx-5 block sm:hidden" style={{padding:"20px"}}>
        <h2 style={{marginTop:"60px",fontSize:"20px"}}><b>Here's the details to join</b></h2>
        <h2 style={{fontSize:"20px"}}><b>MicroDegree Cloud Drive</b></h2>
        <center><h1 style={{marginTop:"10px",fontSize:"15px",paddingBottom:"10px"}}><a href={record.fields.url}><u>{record.fields.url}</u></a></h1>
        <h1 style={{paddingBottom:"10px",color:"#FF1F5F"}}><b>MEETING ID : {record.fields.MeetingID}</b></h1>
        <h1 style={{paddingBottom:"10px",color:"#FF1F5F"}}><b>PASSCODE : {record.fields.Passcode}</b></h1>
        <h1 style={{paddingBottom:"10px",color:"#000"}}><b>TIME : {record.fields.Time}</b></h1>
        <div  style={{paddingBottom:"30px"}}>
        <a href={record.fields.url}><button className=" p-[0.9rem] px-9 bg-[#FF0049] text-white text-base 2xl:text-lg rounded-md">Join Cloud Drive</button></a>
        </div>
        </center>
        </div>
        </section>
        </div>
       
      ))
    ) : (
      <p>Fetching Data...</p>
    )}
    </div>
  );
}

export default JoinDrive;