import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components';
import { UserContext } from '../App';

const Navbar = () => {
  const {state,dispatch}=useContext(UserContext);
  const RenderMenu=()=>{
    if(state){
      return(
        <>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
        < a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
        
        <a class="nav-link active" aria-current="page" href="/logout">Logout</a>
        </li>
        </>

      )
    }
    else{
      return(
        <>

          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
          < a class="nav-link active" aria-current="page" href="/about">About</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contact">Contact</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Login</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/signup">Signup</a>
          </li>

        </>
      )
    }
  }
  return (
    <Wrapper>
  <nav  class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <buthrefn class="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span class="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auhref mb-2 mb-lg-0 ml-auto ">
        <RenderMenu/>
        
      </ul>
      
    </div>
  </div>
</nav>
    </Wrapper>
  )
}

const Wrapper=styled.section`
nav{
 margin: 0px 0px;
 width:100vw;
}


`;

export default Navbar







/* <li class="nav-item">
<a class="nav-link active" aria-current="page" href="/">Home</a>
</li>
<li class="nav-item">
< a class="nav-link active" aria-current="page" href="/about">About</a>
</li>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/contact">Contact</a>
</li>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/login">Login</a>
</li>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/signup">Signup</a>
</li>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/logout">Logout</a>
</li> */