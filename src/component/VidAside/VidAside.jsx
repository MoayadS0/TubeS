import React, { useEffect, useState } from 'react'
import './VidAside.css'
import { conventer, key } from '../../Api'
import moment from 'moment'
import { Link } from 'react-router-dom'

const VidAside = ({categoryId}) => {

  const[side,setside]=useState([])

  const fetchSide=async()=>{
    const sideLink=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=US&videoCategoryId=${categoryId}&key=${key}`
    await fetch(sideLink).then(res=>res.json()).then(data=>setside(data.items))
  }
  useEffect(()=>{
    fetchSide();
  },[])
  return (

    <div className="side-vid">
      
      {side.map((item,index)=>{
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="videDetail">
        <img src={item.snippet.thumbnails.medium.url} />

        <div className="side-details">
        <h5 className="side-title">{item.snippet.title}</h5>
      <p className="name">{item.snippet.channelTitle}</p>
      <div className="static">
        <p className="views">{conventer(item.statistics.viewCount)} . </p>
        <p className="time"> {moment(item.snippet.publishedAt).fromNow()}</p>
      </div>
        </div>
      </Link>
        )
      })}
      
    </div>
  )
}

export default VidAside