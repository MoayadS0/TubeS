import React, { useState } from 'react'
import VidSide from './pages/VidSide/VidSide'
import Master from './pages/Master/Master'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [barHide,setbarHide]=useState(true)
  return (
    <>
   

    <Routes>
      <Route path='/' element={<Master barHide={barHide} setbarHide={setbarHide}/>}/>
      <Route path='/video/:categoryId/:videoId' element={ <VidSide/>}/>
    </Routes>

    
    </>
  )
}

export default App