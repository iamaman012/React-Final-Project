import React from 'react'
import logo from "../assets/headspace-logo.svg";
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
    <div onClick={()=>navigate("/")} className='cursor-pointer'>
    <img
              src={logo}
              alt='headspace-logo'
              width='192'
              height='40'
            />
    </div>
    </>
  )
}

export default Logo