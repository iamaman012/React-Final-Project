import React from "react";
import focusAds from "../../assets/focus-ads.svg";
import meditateAds from "../../assets/meditate-ads.svg";
import { useLocation } from "react-router-dom";

export default function AdvertiseCard() {
  const location = useLocation();
  const lastPart = location.pathname.split("/").pop();

  return (
    <div className="advertise-cont">
      <img
        src={lastPart === "meditate" ? meditateAds : focusAds}
        alt="Focus Ads"
      />

      <p className="add-orange">
        {lastPart === "meditate"
          ? "Discover more mindfulness"
          : "Get in the Zone"}
      </p>
      <p className="add-txt">
        Try Headspace for free and unlock <br /> meditations for any mood.
      </p>
      <button className="advertise-btn">Start your free trial</button>
    </div>
  );
}
