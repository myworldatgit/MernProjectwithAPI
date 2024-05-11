import React, { createContext, useReducer } from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Logout from './Components/Logout';
import { initialstate,reducer } from './Reducer/useReducer'; //capturing reducer output action.payload and state

//implementing toggle between login and logout in navbar


 //as default can be used only one time so export keyword is used then accessed by{}
export const UserContext=createContext();
const Routing=()=>{
  return (
      <switch>
      <Routes>
        <Route>
          <Route  exact path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          
        </Route>
      </Routes>
    </switch> 
  )
}



const App = () => {
  const[state,dispatch] =useReducer(reducer,initialstate);
  //reducer has two method state,action and initialstate store the stae value
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/> 
    <Routing/>
      
    </UserContext.Provider>
    </>
  )
}

export default App

//included bootstrap js and jquery in index.html
//can also include css

