import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Import an icon for links
import dropdown_img from "../assets/dropdown-img.svg";

const DropdownMenu = () => {
  return (
    <>
      {/* Dropdown Container */}
      <ul className="absolute w-full left-0 top-32 h-auto z-10">
        <div className="flex px-16 pb-8 bg-white  border-gray-200  border-t-2 border-b-4 rounded-b-3xl justify-between">
          <div className="left-dropdown flex gap-32 mt-10">
                <div className="sec-1">
                <ul className="space-y-4">
                    <li className="font-bold">What we offer</li>
                    <li>Meditation</li>
                    <li>Mindfulness</li>
                    <li>Sleep</li>
                    <li>Mental health Coaching</li>
                </ul>
                </div>
                <div className="sec-2">
                <ul className="space-y-4">
                    <li className="font-bold">How we Help</li>
                    <li>Stress and everyday anxiety</li>
                    <li>Sleep better</li>
                    <li>Mental Health</li>
                </ul>
                </div>
                <div className="sec-3">
                <ul className="space-y-4">
                    <li className="font-bold">Explore our Library</li>
                    <li>New and popular</li>
                    <li>Begining meditation</li>
                    <li>Mindful Parenting</li>
                    <li>Sleep Music</li>
                    <li>View All</li>
                </ul>
                </div>
          </div>
           <div className="right-dropdown mt-10">
                <img src={dropdown_img} />
                {/* <button className="bg-red-400 w-full flex">try for free <FiArrowRight/></button>
                 */}
                 <a href='www.headspace.com' className='my-2 py-3 px-4 text-md underline flex items-center text-black '> try for free <FiArrowRight /> </a>
            </div>
        </div>
      </ul>
    </>
  );
};

export default DropdownMenu;
