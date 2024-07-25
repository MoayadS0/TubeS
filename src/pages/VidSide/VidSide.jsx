
import './VidSide.css'
import Header from '../../component/Header/Header'
import Videoin from '../../component/VideoIn/Videoin'
import VidAside from '../../component/VidAside/VidAside'
import { useParams } from 'react-router-dom'
const Master = () => {

  const {videoId,categoryId}=useParams();
  return (
    <>
    <Header/>
    <div className="taker">
     <Videoin videoId={videoId}/> 
     <VidAside categoryId={categoryId}/>
    </div>
   
    </>
  )
}

export default Master