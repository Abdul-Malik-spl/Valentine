import { useState,createContext } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Auth/Signup.jsx'
import Login from './Components/Auth/Login.jsx'
import  {Dashboard}  from './Components/Dashboard/Dashboard.jsx'
import './App.css'

export let MyContext=createContext() 

function App() {
let [questionCreateActive,setQuestCreateActive]=useState(false)

  return (
   <div className='app'>
<video autoPlay loop muted height="100%" width="100%">
  <source src="../src/assets/valentine.mp4" type="video/mp4" />
  not support
</video>
<div className='content'>
  <MyContext.Provider value={{questionCreateActive,setQuestCreateActive}}>
  <BrowserRouter >
  <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    {/* <Route path='/Dashboard' element={<Dashboard/>}/> */}
    <Route path='/Dashboard' element={<Dashboard/>}/>

  </Routes>
  </BrowserRouter>
  </MyContext.Provider>
</div>
   </div>
  )
}

export default App
