import React from "react";
import "../styles/Landing.css";
import left_img from "../assets/Hero_Image_left.webp";
import right_img from "../assets/Hero_Right_Image_Default-2022.webp";

const Landing = () => {
  return (
    <>
      <div className="main-component flex justify-between pt-20 min-h-screen">
        <div className="left-image flex">
          <img src={left_img} alt="left-image" />
        </div>
        <div className="main-content flex-col text-center">
          <h2 className="text-6xl">Make it your year</h2>
          <h2 className="text-6xl">with Headspace</h2>
          <div className="flex bg-yellow-400 rounded-xl px-28 py-4 mt-10 text-center">
            <div className="flex-col">
              <h1 className="text-2xl">Free for 14 days, then 1499/year</h1>
              <p className=" ">124.92 per month,billed annually</p>
            </div>
          </div>
          <div className="text-xs font-light text-gray-500 mt-5">
            <p>After your free trial, the annual subscription is ₹1499 INR and automatically renews each year.</p>
            <p>Are you a post-secondary or university student? Save 85%, with valid SheerID student verification, for our</p>
            <p>Student plan</p>
          </div>

          <button className="bg-blue-700 text-white text-lg rounded-full py-3 px-7 mt-9">Try for free</button>

        </div>
        <div className="right-image flex">
          <img src={right_img} alt="left-image" />
        </div>
      </div>
    </>
  );
};

export default Landing;
