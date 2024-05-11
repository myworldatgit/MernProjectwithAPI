import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

//using promises not aync and await to go to server logout route
const Logout = () => {
  const{state,dispatch}=useContext(UserContext);

  const navigate=useNavigate();
  useEffect(()=>{
    fetch('/logout',{
      methood:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      credentials:"include"

    }).then((res)=>{

      dispatch({type:"USER",payload:false});
      navigate('/'); //here / means login page
      //history.push('/login',{replace:true});--replace true as anyway you have to go to login only after click
      if(res.status!=200){
        const error=new Error('res.error');
        throw error;
      }
    }).catch((error)=>{
     console.log(error);
    })
  })
  return (
    <div>
      This is logout
    </div>
  )
}

export default Logout
