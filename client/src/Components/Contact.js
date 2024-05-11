import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Contact = () => {
const navigate=useNavigate();
  const[userData,SetUserData]=useState({name:" ",email:" ",message:" "});

  const callContactPage =async()=>{
    try {
      const res=await fetch('/contact',{
        method:"GET",
        headers:{
          //Accept:"application/json",
          "Content-Type":"application/json",
        }
         //credentials:'include'
      });
      const data=await res.json();

      //taking json data and storing to setuser and then can access through user.name etc
      // SetUserData(data);
      SetUserData({...userData, name:data.name, email:data.email});
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
   callContactPage();
  },[])

//handling form
  const handleinputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    SetUserData({...userData, [name]:value});
  }
  //send data  specially message to backend
  const contactform=async(e)=>{
    e.preventDefault();
    const {name,email,message}=userData;
    const res= await fetch('/contactdata',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name,email,message
      })


    });
    const data =await res.json();
    if(!data){
      console.log("cannot send message");
    }
    else{
      alert("Message sent");
      SetUserData({...userData, message:""});
    }

  }



  return (
    <div>
         <h1>This is contact </h1>
         <p>{userData.name}</p>
         <p>{userData.email}</p>

         <form method="POST">
          
            <input type="text" className='formdata' name='name' value={userData.name}
             onChange={handleinputs} />
            <input type="email"className='formdata'  name='email' value={userData.email}
            onChange={handleinputs}/>
      
            <textarea name="message" className='formdata' id="message" cols="30" rows="10" 
            value={userData.message} onChange={handleinputs}></textarea>
       
           <button type="submit" value="submit" onClick={contactform}>Send Message
           </button>
      
          
         </form>
    </div>
  )
}

export default Contact
