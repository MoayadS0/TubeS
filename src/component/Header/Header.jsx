import React from 'react'
import './Header.css'
import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = ({setbarHide}) => {
  return (
    <header className="head">
      <div className="top-left">
        <i className='menu' ><FaBars onClick={()=>setbarHide(prev=>prev===false?true:false)}/></i>
        <Link to={'/'}><p className="logo">TubeS</p></Link>
      </div>
      <div className="top-middle">
        <input className='search' type='text' placeholder='Search'/>
        <i className='glass'><FaMagnifyingGlass /></i>
      </div>
      <div className="top-right">
      <i><FaArrowUpFromBracket /></i>
      <div className="nat">
      <i className='bell'><FaBell /></i>
      <p>0</p>
      </div>
      
      <i className='user'><FaCircleUser /></i>
      </div>
    </header>
  )
}

export default Header