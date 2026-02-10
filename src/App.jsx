import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Auth/Signup.jsx'
import Login from './Components/Auth/Login.jsx'
import './App.css'

function App() {


  return (
   <div className='app'>
<video autoPlay loop muted height="100%" width="100%">
  <source src="../src/assets/valentine.mp4" type="video/mp4" />
  not support
</video>
<div className='content'>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  </BrowserRouter>
</div>
   </div>
  )
}

export default App
