import React, { useEffect, useState } from 'react'
import './VideoIn.css'
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { conventer, key } from '../../Api';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const Videoin = () => {
 const {videoId}=useParams()
  const [vidData,setvidData]=useState(null);
  const[channeldata,setchannelData]=useState(null);
  const[comData,setcomData]=useState([]);

  const fetchVideo=async()=>{

   const urlvid= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=150&key=${key}`
   await fetch(urlvid).then(respon=>respon.json()).then(Data=>setvidData(Data.items[0]))
   
   
  }

const fetchChannel=async()=>{
  const link=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${vidData ? vidData.snippet.channelId : "_VB39Jo8mAQ"}&key=${key}`
  await fetch(link).then(respon=>respon.json()).then(Data=>setchannelData(Data.items[0]));
    
  const com_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${key}`;
   await fetch(com_url).then(respon=>respon.json()).then(Data=>setcomData(Data.items))
}

  
  
  useEffect(()=>{
    fetchVideo()
   },[videoId])
   
   useEffect(()=>{
  fetchChannel()
},[vidData])

  return (
    <>
   
    <div className="vid-sec">

     <div className="play-vid">

   { /*<video src={thum} controls autoPlay muted/>*/}
   <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
   
    <p className="video-title">{vidData?vidData.snippet.title:"title here"}</p>

    <div className="details"> 

      <div className="stat"> 
        <p className="vid-views">{vidData?conventer(vidData.statistics.viewCount) :"views"} view . </p>
    <p className="vid-time"> {vidData?moment(vidData.snippet.publishedAt ).fromNow():"views"}</p></div> 

    <div className="support">
      <div className="like-dislike">
      <i><FaThumbsUp /></i>
      <p className="likes">{vidData?conventer(vidData.statistics.likeCount) :"."}</p>
      </div>
      <div className="like-dislike">
      <i><FaThumbsDown /></i>
      
      </div>

      <div className="share">
      <i><FaShare /></i>
      <p>Share</p>
      </div>
       
      <div className="save">
       <i><FaBookmark /></i>
       <p>save</p>
      </div>
    </div>
    

    </div>
     </div>
      <hr className='h'/>
      <div className="chanel">

        <div className="up-info">

            <div className="channel-side">
          <img src={channeldata?channeldata.snippet.thumbnails.default.url :""} />
      <div className='chan-det'>
         <h3 className="channelName">{vidData?vidData.snippet.channelTitle:"Youtuber"}</h3>
      <p className="subs">{channeldata?conventer(channeldata.statistics.subscriberCount):"10K"} Subscrbers</p>
      </div>
        </div>
        <button className="sub-btn">Subscribe</button>

        </div>
      <p className="desc">{vidData?vidData.snippet.description.slice(0,200):"description"}</p>

      </div>
      <hr className='h'/>

      <div className="comments">

        <p className="com">{vidData?conventer(vidData.statistics.commentCount) :"1K"} Comments</p>
        
        {comData.map((item,index)=>{
          const { snippet } = item.snippet.topLevelComment;
          return(
 <div key={index} className="comment">
          <img src={snippet.authorProfileImageUrl} alt=""/>
          <div className="comDetails">
            <h5 className="user">{snippet.authorDisplayName}</h5>
            <p className="user-com"> {snippet.textDisplay}
            </p>
            <div className="like-dislike">  <div className="like">
      <i><FaThumbsUp /></i>
      <p className="likes">{
     conventer(snippet.likeCount) }</p>
      </div>
      <div className="like">
      <i><FaThumbsDown /></i>
      
      </div></div>
          
          </div>
       
        </div>
          )
        })}
       

      </div>
    </div>
    </>
  )
}

export default Videoin