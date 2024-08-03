import React from 'react'
import cartoon from "../../assets/images/profile/cartoon.jpg";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flexflex-col gap-8 justify-center">
      <img
        src={cartoon}
        alt="Profile"
        className="w-full h-64 object-cover rounded-lg mb-2"
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white mb-2">Vanessa</h3>
        <p className="text-lg font-normal text-gray-400 mb-2">
          Lorem ipsum dolor
        </p>
        <p className="text-base text-gray-400 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error in
          unde sit fugit ipsa, maxime impedit necessitatibus
        </p>
        <p className="text-base text-gray-400 flex items-center justify-center gap-2">
          Phone: <span className="text-lightText"> +256 785507825</span>
        </p>
        <p className="text-base text-gray-400 flex items-center justify-center gap-2">
          Email:{" "}
          <span className="text-lightText"> nassangavanessa2@gmail.com</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>

        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
