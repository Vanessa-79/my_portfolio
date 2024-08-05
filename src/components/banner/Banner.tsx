import React from "react";
import LeftHome from "./LeftHome";
import cartoon from "../../assets/images/profile/cartoon.jpg";
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
          <img src={cartoon} alt="profile-img" className="bannerImage" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
