import React from "react";
import { IoIosLock } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";


export default function FeaturedCard() {
    const location = useLocation();
    const lastPart = location.pathname.split("/").pop();
    const navigate =  useNavigate();
    
  return (
    <div>
      <div className="featured-card-cont">
        <div className="featured-img-cont">
          <img
            className="featured-img"
            src={lastPart==="meditate"?"https://hs-prod-content.imgix.net/illus-course-basics_1-header-20200211-rc__1582570740307.pdf?fm=png32&w=320.90625&fs=png&ixlib=js-1.4.1&s=d4cda88238bd5c939ff81a64a9f921cc"
                :"https://hs-prod-content.imgix.net/illus-focus_for_study-breathing_thru_exams-20211109-kh.png?fm=png32&w=307.875&fs=png&ixlib=js-1.4.1&s=4ffce5bf3d04369897aad4aa411dc99d"
            }
            alt=""
          />
        </div>
        <div className="feature-arrow-cont">
          <div className="featured-txt-cont">
            <div className="feature-txt-cont" onClick={()=>navigate("/modes/meditate/music")}>
              <IoIosLock />
              <p className="feature-txt">{lastPart==="meditate"?"Basic":"Breathig through exams"}</p>
            </div>
            <div className="feature-info-cont">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                width="1.3em"
                height="1.3em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="css-lnnzhi"
              >
                <path
                  d="M12.53 12.97c-.12 0-.25-.03-.36-.09l-1.78-.99a.753.753 0 01-.29-1.02c.2-.36.66-.49 1.02-.29l1.77.98a.753.753 0 01-.36 1.41zM10.76 5.62a.753.753 0 01-.42-1.38l1.71-1.12c.35-.23.81-.13 1.04.22.23.35.13.81-.22 1.04l-1.7 1.12c-.13.08-.27.12-.41.12zM7.51 12.9a4.84 4.84 0 01-4.12-2.28H1.75c-.41 0-.75-.33-.75-.75V6.49c0-.41.34-.75.75-.75h1.44c.84-1.6 2.48-2.61 4.32-2.61.42 0 .75.34.75.75v8.26c0 .42-.34.76-.75.76zM2.5 9.12h1.32c.28 0 .54.16.67.41.46.92 1.29 1.56 2.27 1.78V4.72c-1.07.24-1.97.99-2.39 2.05-.11.29-.39.47-.7.47H2.5v1.88zM13.58 8.83h-2.83c-.42 0-.75-.33-.75-.75s.34-.75.75-.75h2.83c.41 0 .75.34.75.75s-.34.75-.75.75z"
                  fill="#3A3938"
                ></path>
              </svg>
              <p className="feature-txt">{lastPart==="meditate"?"Course 5-10 min":"Meditation 10 min"}</p>
            </div>
          </div>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
}
