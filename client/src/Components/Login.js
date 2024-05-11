import React ,{useContext, useState} from 'react';
import { useNavigate ,NavLink} from 'react-router-dom';
import styled  from 'styled-components';
import {UserContext} from '../App';

const Login = () => {
  const {state,dispatch}=useContext(UserContext);

  const navigate=useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser= async(e)=>{
    e.preventDefault();
    const res= await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
         email,password
      }),

  
    });
    // const data=await res.json();---needed 3-4 to know that res.status return code and res.json return json data
    const data=await res.status;
    if(data===422 || !data){
      window.alert("Invalid Credentials");
    }
    else{
      dispatch({type:"USER" ,payload:true});
      //returning payload as true for login logout toggle functionality
      window.alert("Login Successfull");
      navigate('/home');
      
    }

  }


  return (
    <Wrapper>
     
         
    <div className="main-container">

      <div class="card">
      <div class="card2">
      <form method="POST" class="form">

  

      <div class="field">
      <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      </svg>

        <input type="email" class="input-field" name='email' id='email'  value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required  autocomplete="off"/>
      </div>

      <div class="field">
      <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      </svg>

        <input type="password" class="input-field" name='password' id='password'   
          value={password} onChange={(e)=>setPassword(e.target.value)} required  
          placeholder="Password"  />
      </div>


      <div class="btn">

      <button class="button2" onClick={loginUser}>Login</button>
      t
      </div>
      <div>Don't Have Account? <button><NavLink to='/signup'>SIGN UP</NavLink></button></div>

      </form>
      </div>
      </div>



      </div>
    </Wrapper>
  )
}

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
export default Login
