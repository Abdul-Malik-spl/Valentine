import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
    {/* <Route path='/' element=/> */}
  </Routes>
  </BrowserRouter>
</div>
   </div>
  )
}

export default App
