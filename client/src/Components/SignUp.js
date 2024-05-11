import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
const SignUp = () => {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    name:" ",email:" ",password:" ",cpassword:" "
  })

  
  let name,value;
  const handleinput=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
    
  };
  
  const Postdata = async (e)=>{
    e.preventDefault();
    const {name,email,password,cpassword}=user;
    
    const res= await fetch("/register",{
       method:"POST",
       headers:{
        "Content-Type":"application/json",
        
       },
       body:JSON.stringify({
        name,email,password,cpassword
       })

    });


      const data=await res.status;
     
      
   
   
    if(data===422|| !data){
      
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert(" Registration Successfull");
      console.log("Registration Successfull");
      // history.push('/login');
      navigate('/login');
    }
    
    }

  


  return (
    <Wrapper>


      <div className="main-container">

      <div class="card">
      <div class="card2">
      <form  method="POST" class="form">
      
      <div class="field">
      <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
      </svg>
    
        <input type="text" class="input-field" name='name' id='name'  
        onChange={handleinput} placeholder="Name"  value={user.name} autoComplete='off' required/>
      </div>

      <div class="field">
      <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      </svg>

        <input type="email" class="input-field" name='email' id='email' 
         onChange={handleinput}  placeholder="Email"   value={user.email} autoComplete="off" required/>
      </div>

      <div class="field">
      <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      </svg>

        <input type="password" class="input-field" name='password' id='password'   placeholder="Password" 
        onChange={handleinput} value={user.password}  autoComplete='off' required/>
      </div>

      <div class="field">
      <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      </svg>

        <input type="password" class="input-field" name='cpassword' value={user.cpassword} onChange={handleinput} id='cpassword'  placeholder="ConfirmPassword" autoComplete='off' required />
      </div>

      <div class="btn">
      
      <button class="button2" onClick={Postdata}>Sign Up</button>
      </div>
      
  </form>
  </div>
  </div>
    


      </div>
    </Wrapper>
  )
}
//it means user.name ,user.email concept is data destructuring
//'/register' is not present on client side hence add proxy on package.json after scrpit
//  required after autocomplete bcoz ten it does not show placeholder 
const Wrapper=styled.section`
.main-container{
  position:absolute;
  background-image: linear-gradient(216deg, rgba(77, 77, 77,0.05) 0%, rgba(77, 77, 77,0.05) 25%,rgba(42, 42, 42,0.05) 25%, rgba(42, 42, 42,0.05) 38%,rgba(223, 223, 223,0.05) 38%, rgba(223, 223, 223,0.05) 75%,rgba(28,26,26, 0.05) 75%, rgba(28,26,26, 0.05) 100%),linear-gradient(44deg, rgba(128, 128, 128,0.05) 0%, rgba(128, 128, 128,0.05) 34%,rgba(212, 212, 212,0.05) 34%, rgba(212, 212, 212,0.05) 57%,rgba(25, 25, 25,0.05) 57%, rgba(25, 25, 25,0.05) 89%,rgba(135, 135, 135,0.05) 89%, rgba(135, 135, 135,0.05) 100%),linear-gradient(241deg, rgba(55, 55, 55,0.05) 0%, rgba(55, 55, 55,0.05) 14%,rgba(209, 209, 209,0.05) 14%, rgba(209, 209, 209,0.05) 60%,rgba(245, 245, 245,0.05) 60%, rgba(245, 245, 245,0.05) 69%,rgba(164, 164, 164,0.05) 69%, rgba(164, 164, 164,0.05) 100%),linear-gradient(249deg, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 32%,rgba(148, 148, 148,0.05) 32%, rgba(148, 148, 148,0.05) 35%,rgba(202, 202, 202,0.05) 35%, rgba(202, 202, 202,0.05) 51%,rgba(181, 181, 181,0.05) 51%, rgba(181, 181, 181,0.05) 100%),linear-gradient(92deg, hsl(214,0%,11%),hsl(214,0%,11%));
  height:100vh;
  width:100vw;
  padding:0;
  margin:0;
  scrollbar-width: 100vh;
  
}

.form {
  padding-top:3em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.1em;
  background-color: #171717;
  border-radius: 20px;
}

#heading {
  text-align: center;
  margin: 2em;
  color: rgb(0, 255, 200);
  font-size: 1.2em;
}

.field {
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
  border-radius: 25px;
  padding: 0.4em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: rgb(0, 255, 200);
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: rgb(0, 255, 200);
}

.form .btn {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5em;
}

.button1 {
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 5px;
  margin-right: 0.5em;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button1:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.button2 {
  padding: 0.5em;
  padding-left: 2.3em;
  padding-right: 2.3em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button2:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.button3 {
  margin-bottom: 3em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button3:hover {
  background-image: linear-gradient(163deg, #a00000fa 0%, #d10050 100%);
  color: rgb(255, 255, 255);
}

.card {
 
  top:15%;
  margin:auto;
  width:max-content;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 22px;
  transition: all .3s;
}

.card2 {

  border-radius: 0;
  transition: all .2s;
}

.card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}




`;

export default SignUp
