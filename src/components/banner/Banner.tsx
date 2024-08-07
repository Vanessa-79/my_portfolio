// import React from "react";
import LeftHome from "./LeftHome";
import im3 from "../../assets/images/im3.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 flex flex-col lgl:flex-row gap-10 xl:gap-0 items-center border-b-[1px] border-b-black"
      style={{ marginLeft: "70px", marginRight: "60px", paddingTop: "5px" }}
    >
      <LeftHome />
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <div className="bannerImageContainer">
          <div className="bannerImageBackground"></div>
          <img src={im3} alt="profile-img" className="bannerImage" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
