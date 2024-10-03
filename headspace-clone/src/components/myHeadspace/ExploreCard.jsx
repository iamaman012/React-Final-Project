import React from "react";
import { useLocation } from 'react-router-dom';

export default function ExploreCard() {
    const location = useLocation();
    const lastPart = location.pathname.split("/").pop();

  return (
    <div className="explore-cont">
      <p className="explore-txt">Explore {lastPart==="meditate"?"Meditation":"Focus"}</p>
      <div className="explore-card-tot-cont">
        <div className="explore-card-cont">
            <div className="explore-card-txt-cont">
                
            </div>
            <div className="explore-card-img-cont">

            </div>

        </div>

      </div>
    </div>
  );
}
