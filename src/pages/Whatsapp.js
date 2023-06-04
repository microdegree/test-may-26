import React, { useState, useEffect } from "react";
import "../App.css";

function Whatsapp() {
	const [whatsapp, setGroupLink] = useState([]);

  useEffect(() => {
    fetch("https://api.airtable.com/v0/app4ChZMkFts54rma/whatsapp?api_key=keyAywRlrwgScQVhY")
      .then((res) => res.json())
      .then((data) => {
        setGroupLink(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

	return (
		<div>
<section>
    <div className="sm:mx-5 hidden sm:block">
    <center><h1 style={{marginTop:"60px",fontSize:"40px",}}>Redirecting to WhatsApp Group....</h1>
    <h1 style={{paddingBottom:"50px",color:"#FF1F5F"}}><b>Happy Learning</b></h1>
    </center>
  </div>
  <div className="sm:mx-5 block sm:hidden">
    <center><h1 style={{marginTop:"60px",fontSize:"20px",}}>Redirecting to WhatsApp Group....</h1>
    <h1 style={{paddingBottom:"50px",color:"#FF1F5F"}}><b>Happy Learning</b></h1>
    </center>
  </div>
  </section>

		  <div>
        {whatsapp.length > 0 ? (
      whatsapp.map((record) => (
        <a href={record.fields.url} key={record.id}>
          <a onLoad={window.location.href=record.fields.url}></a>
        </a>
      ))
    ) : (
      <p>Loading...</p>
    )}  

      </div>
    </div>
  );
}

export default Whatsapp;