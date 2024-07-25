import React, { useEffect, useState } from 'react'
import './SideBar.css'
import { FaHouse } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { FaVolleyball } from "react-icons/fa6";
import { GiConsoleController } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa";
import { key } from '../../Api';

const SideBar = ({barHide,setcatog,catog}) => {
  const[data,setdata]=useState([])
  const fitchinfovid=async()=>{
    const video_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=US&videoCategoryId=${catog}&key=${key}`
    await fetch(video_url).then(response=>response.json()).then(data=>setdata(data.items))
  }
  useEffect(()=>{
    fitchinfovid();
  },[catog])

  return (
    <div className={`side-container  ${barHide?"":"smaller-bar"}`}>

      <div className="top-high">
        <div className={`section ${catog===0?"Active":""}`} onClick={()=>setcatog(0)}>
        <i className="icon"><FaHouse /></i>
        <p className="title">Home</p>
        </div>
        <div className={`section ${catog===23?"Active":""}`} onClick={()=>setcatog(23)}>
        <i className="icon"><FaChartSimple /></i>
        <p className="title">Trending</p>
        </div>
        <div className={`section ${catog===10?"Active":""}`} onClick={()=>setcatog(10)}>
        <i className="icon"><FaMusic /></i>
        <p className="title">Music</p>
        </div>
        <div className={`section ${catog===17?"Active":""}`} onClick={()=>setcatog(17)}>
        <i className="icon"><FaVolleyball /></i>
        <p className="title">Sport</p>
        </div>
        <div className={`section ${catog===20?"Active":""}`} onClick={()=>setcatog(20)}>
        <i className="icon"><GiConsoleController /></i>
        <p className="title">Gaming</p>
        </div>
        <div className={`section ${catog===24?"Active":""}`} onClick={()=>setcatog(24)}>
        <i className="icon"><FaNewspaper /></i>
        <p className="title">News</p>
        </div>
      </div>
      <hr className='line'/>
      <div className="Subscriptions">
        <p>Subscribed</p>
        {data.map((item,index)=>{
          return(
             <div key={item.id}  className="youtuber">
          <img src={item.snippet.thumbnails.medium.url}/>
          <p className="name">{item.snippet.channelTitle}</p> 
        </div>
          )
        })}
       
      </div>
    </div>
  )
}

export default SideBar