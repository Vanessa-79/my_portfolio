// import React from "react";
import LeftHome from "./LeftHome";
import im3 from "../../assets/images/im3.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 flex flex-col lgl:flex-row gap-10 xl:gap-0 items-center bg-[#ffffff] dark:bg-[#212428] transition-colors duration-200"
      style={{
        width: "100%",
        marginLeft: "0px",
        marginRight: "60px",
        paddingTop: "5px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.50)", // Adding shadow
      }}
    >
      <LeftHome />
      <div
        className="w-full lgl:w-1/2 flex justify-center items-center relative"
        
      >
        <div className="bannerImageContainer" >
          <div className="bannerImageBackground"></div>
          <img src={im3} alt="profile-img" className="bannerImage"></img>
        </div>
      </div>
    </section>
  );
};

export default Banner;
