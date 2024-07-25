import React, { useState } from 'react'
import SideBar from '../../component/sideBar/SideBar'
import Video from '../../component/Videos/Video'
import Header from '../../component/Header/Header'
const Master = ({barHide,setbarHide}) => {
  const [catog,setcatog]=useState(0)
  
  return (
    <>
    <Header setbarHide={setbarHide}/>
    <SideBar barHide={barHide} catog={catog} setcatog={setcatog}/>
   
    <Video barHide={barHide} catog={catog} setcatog={setcatog}/>
    
    
    </>
  )
}

export default Master