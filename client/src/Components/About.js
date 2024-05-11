import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';

const About = () => {
  const navigate=useNavigate();
  const[userData,SetUserData]=useState({});

  const callAboutPage =async()=>{
    try {
      const res=await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
        },
         credentials:'include'
      });
      const data=await res.json();

      //taking json data and storing to setuser and then can access through user.name etc
      SetUserData(data);
      const code= res.status;
      if(code!==200){
        const error=new Error(res.error);
        throw error;
      }
      
      
    } 
    catch (error) {
      console.log(error);
      navigate('/login');
    }

  }  



 //it works before we load about page and goes control to authenticate in server
  useEffect(()=>{
   callAboutPage();
  },[])

  return (
    <div>
      <h1>This is about</h1>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
      
    </div>
  )
}

export default About
