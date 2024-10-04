import React, { useState } from 'react';
import logo from "../assets/headspace-logo.svg";
// import DropdownMegamenu from './DropdownMegamenu'; // Import DropdownMegamenu
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false); // State to manage dropdown visibility
  const navigate = useNavigate();

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
           
            <Logo/>
            <div className='flex nav-item nav-links gap-12'>
              <div className='nav-category nav-link cursor-pointer'  onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}><p className='hover:font-bold'> For You</p> {dropdown && <DropdownMenu />} </div>
              <div className='nav-category nav-link cursor-pointer hover:font-bold'>For Business</div>
              <div className='nav-category nav-link cursor-pointer hover:font-bold'>Our Plans</div>

              {/* Add Dropdown for Articles */}
              <div
                className='nav-category nav-link cursor-pointer hover:font-bold'
                
              >
                Articles
               {/* Show dropdown if dropdown state is true */}
              </div>

              <div className='nav-category nav-link cursor-pointer hover:font-bold'>Resources</div>
              <div className='nav-category nav-link cursor-pointer hover:font-bold'>About</div>
            </div>
          </div>

          <div className='flex nav-items gap-14 items-center'>
            <div className='flex nav-item nav-links gap-12'>
              <div className='nav-category nav-link cursor-pointer hover:font-bold'>Help</div>
              <div className='nav-category nav-link cursor-pointer hover:font-bold' onClick={()=>navigate("/modes/meditate")}>My Headspace</div>
            </div>
            <button className='bg-blue-700 text-white rounded-full py-2 px-5 cursor-pointer hover:bg-blue-800'>
              Try for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
