import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false); // State to manage dropdown visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu
  const navigate = useNavigate();

  // Handlers for showing and hiding the dropdown on hover
  const onMouseEnter = () => {
    if (window.innerWidth >= 1250) setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="nav-container bg-white px-3">
        <div className="flex nav-header justify-between items-center p-5">
          {/* Left Section: Logo and Navigation Links */}
          <div className="flex nav-items gap-14 items-center">
            <Logo />
            {/* Desktop Navigation */}
            <div className="hidden lg:flex nav-item nav-links gap-12">
              <div
                className="nav-category nav-link cursor-pointer"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <p className="hover:font-bold">For You</p>
                {dropdown && <DropdownMenu />}
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                For Business
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                Our Plans
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                Articles
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                Resources
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                About
              </div>
            </div>
          </div>

          {/* Right Section: Help, My Headspace, and CTA */}
          <div className="hidden lg:flex nav-items gap-14 items-center">
            <div className="flex nav-item nav-links gap-12">
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                Help
              </div>
              <div
                className="nav-category nav-link cursor-pointer hover:font-bold"
                onClick={() => navigate('/modes/meditate')}
              >
                My Headspace
              </div>
            </div>
            <button className="bg-blue-700 text-white rounded-full py-2 px-5 cursor-pointer hover:bg-blue-800">
              Try for free
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col bg-white p-5 space-y-4">
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                For You
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                For Business
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                Our Plans
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                Articles
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                Resources
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                About
              </div>
              <div className="nav-category nav-link cursor-pointer hover:font-bold">
                Help
              </div>
              <div
                className="nav-category nav-link cursor-pointer hover:font-bold"
                onClick={() => navigate('/modes/meditate')}
              >
                My Headspace
              </div>
              <button className="bg-blue-700 text-white rounded-full py-2 px-5 cursor-pointer hover:bg-blue-800">
                Try for free
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
