import React from 'react'
import { LuSearch } from "react-icons/lu";
import NavProfile from './NavProfile';
import Logo from '../Logo';

const MyHeadspaceNav = () => {
  return (
   <>
    <div className='flex justify-between py-6 px-14'>
        <LuSearch size={23}/>
        <Logo/>
        <NavProfile/>
    </div>
   </>
  )
}

export default MyHeadspaceNav