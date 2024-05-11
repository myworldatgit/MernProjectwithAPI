import React,{useContext} from 'react';
import { useProductContext } from '../Context/ProductContext';
import Product from './Product';
import 'ldrs/ring'
import Typed from 'typed.js';
import { useEffect,useRef } from 'react';
import styled from 'styled-components';
import {UserContext} from '../App';



const Home = () => {
  const {state,dispatch}=useContext(UserContext);
 //typed js part
  const el=useRef(null);

  useEffect(()=>{

    if(el.current){
        const typed = new Typed(el.current, {
        strings: ['Explore', 'Shop','Style','trend','Enjoy'],
        typeSpeed: 50,
      });
    }
    dispatch({type:"USER" ,payload:true});
  })


  const{isLoading,products}=useProductContext();
  if(isLoading){
    return <div><l-ring
      size="40"
      stroke="5"
      bg-opacity="0"
      speed="2" 
      color="black" 
    ></l-ring></div>
  }
  
  


  return (
    <Wrapper>

<div className="container">
      <div className="main-container">

        <div className="first">
        <div>Let's <span ref={el}></span></div>
        </div>

         <div className='second'>
         <iframe src='https://my.spline.design/bunnycopy-926d595071ad05f3d398964d32c542dd/' frameborder='0' width='100%' height='100%'></iframe>
         </div>
       
        
          <div className="grid-container grid-three-columns"> 
           {products.map((currelem)=>{
            return <Product key={currelem.id} {...currelem}/>
           })}
        </div>
        </div>
      </div>
      





         
    </Wrapper>
  )

    
  
}
const Wrapper=styled.section`

.second{
margin-top:0.2vh;
width:100vw;
  
}


.grid-container{
  display:grid;
  gap:5rem;
  margin-top:5vh;
  width:100vw;
  

  
}
.grid-two-columns{
  grid-template-columns:repeat(2,1fr);
  width:100vw;
}
.grid-three-columns{
  grid-template-columns:repeat(3,1fr);
  width:100vw;
}
 

.container{
  width:100vw;
  height:100vh;
  margin-left:0px;
}
.first{
  background-color: antiquewhite;
    width: 100vw;
    height: 13vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 44px;
}


`;

export default Home
