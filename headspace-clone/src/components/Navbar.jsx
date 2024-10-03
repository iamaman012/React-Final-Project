import React, { useState } from 'react';
import logo from "../assets/headspace-logo.svg";
// import DropdownMegamenu from './DropdownMegamenu'; // Import DropdownMegamenu
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false); // State to manage dropdown visibility

  // Handlers for showing and hiding the dropdown on hover
  const onMouseEnter = (e) => {
    if(window.innerWidth < 1250){
        setDropdown(false);
    } else {
        setDropdown(true);  
    }
}

const onMouseLeave = (e) => {
    if(window.innerWidth < 1250){
        setDropdown(false);
    } 
    else {     
        setDropdown(false);
    }
}

  return (
    <>
      <div className='nav-container bg-white px-3'>
        <div className='flex nav-header justify-between items-center p-5'>
          <div className='flex nav-items gap-14 items-center'>
            {/* <img
              src={logo}
              alt='headspace-logo'
              width='192'
              height='40'
            /> */}
            <Logo/>
            <div className='flex nav-item nav-links gap-12'>
              <div className='nav-category nav-link'  onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>For You  {dropdown && <DropdownMenu />} </div>
              <div className='nav-category nav-link'>For Business</div>
              <div className='nav-category nav-link'>Our Plans</div>

              {/* Add Dropdown for Articles */}
              <div
                className='nav-category nav-link'
                
              >
                Articles
               {/* Show dropdown if dropdown state is true */}
              </div>

              <div className='nav-category nav-link'>Resources</div>
              <div className='nav-category nav-link'>About</div>
            </div>
          </div>

          <div className='flex nav-items gap-14 items-center'>
            <div className='flex nav-item nav-links gap-12'>
              <div className='nav-category nav-link'>Help</div>
              <div className='nav-category nav-link'>My Headspace</div>
            </div>
            <button className='bg-blue-700 text-white rounded-full py-2 px-5'>
              Try for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
