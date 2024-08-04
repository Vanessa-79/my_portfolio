import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto py-20 border-t-[1px] border-t-black grid grid-cols-1 md:grid-cols-4 gap-20 text-center md:text-left">
      <div
        className="flex flex-col gap-4"
        style={{ marginLeft: "100px", marginRight: "60px", paddingTop: "5px" }}
      >
        <h2 className="text-base font-bold text-orange-500 mb-4">
          Quick Links
        </h2>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#home" className="text-gray-400 hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="text-gray-400 hover:text-orange-500">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-400 hover:text-orange-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" className="text-gray-400 hover:text-orange-500">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-bold text-orange-500 mb-4">Contact</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <span className="text-gray-400">Mukono, Seeta, Uganda</span>
          </li>
          <li>
            <span className="text-gray-400">
              Email: nassangavanessa2@gmail.com
            </span>
          </li>
          <li>
            <span className="text-gray-400">
              Phone: (+256) 785507825 or <br />
              (+256) 750468584
            </span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-bold text-orange-500 mb-4">Thanks</h2>
        <p className="text-gray-400">
          Thank you for visiting my portfolio. I hope you found it informative
          and engaging.
        </p>
      </div>
    </div>
  );
};

export default Footer;
