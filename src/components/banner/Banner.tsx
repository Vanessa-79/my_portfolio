import React from "react";
import LeftHome from "./LeftHome";
import cartoon from "../../assets/images/profile/cartoon.jpg";
import "./Banner.css";



const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-[800px] pt-10 py-20 pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <LeftHome />
      <div className="w-1/2 flex justify-center items-center relative ">
        <img
          src={cartoon}
          alt="profile-img"
          className="w-[500px] h-[450px] z-10"
        />

        <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">
        </div>
      </div>
    </section>
  );
};

export default Banner;
