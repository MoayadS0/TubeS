import React, { useEffect, useState } from 'react'
import './Video.css'
import { Link } from 'react-router-dom'
import { conventer, key } from '../../Api'
import moment from 'moment/moment'

const Video = ({barHide,catog,setcatog}) => {
  const[data,setdata]=useState([])
  const fitchinfovid=async()=>{
    const video_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=US&videoCategoryId=${catog}&key=${key}`
    await fetch(video_url).then(response=>response.json()).then(data=>setdata(data.items))
  }
  useEffect(()=>{
    fitchinfovid();
  },[catog])
  return (
    <div className={`vid-container ${barHide?"":'Large-container'}`}>
      {data.map((item,index)=>{
        return(
           <Link key={item.id}  to={`video/${item.snippet.categoryId}/${item.id}`} className="vid">
      <img src={item.snippet.thumbnails.medium.url}/>
      <p className="title">{item.snippet.title}</p>
      <p className="chanel-name">{item.snippet.channelTitle}</p>
      <div className="static">
        <p className="views">{conventer(item.statistics.viewCount)} &bull; </p>
        <p className="time"> {moment(item.snippet.publishedAt).fromNow() }o</p>
      </div>
    </Link>
        )
      })}
   

    </div>
  )
}

export default Video