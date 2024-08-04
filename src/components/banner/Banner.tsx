import React from "react";
import LeftHome from "./LeftHome";
import cartoon from "../../assets/images/profile/cartoon.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-[800px] pt-10 flex items-center border-b-[1px] border-b-black"
      style={{ marginLeft: "70px", marginRight: "60px", paddingTop: "5px" }} // Adjusted paddingTop to 5px
    >
      <LeftHome />
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="bannerImageContainer">
          <div className="bannerImageBackground"></div>
          <img src={cartoon} alt="profile-img" className="bannerImage" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
