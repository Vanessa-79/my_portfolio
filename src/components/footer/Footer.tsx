import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";

const Footer = () => {
  return (
    <div className="w-full h-auto py-20 border-b-[1px] border-b-black grid grid-cols-4 gap-20">
      <div className="w-full h-full flex flex-col gap-8 ">
        <img src={logo} alt="logo" className="w-32" />
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
      <div className="w-full h-full flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Quick Links</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#home" className="text-gray-400 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="text-gray-400 hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-400 hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" className="text-gray-400 hover:text-white">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Resources</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#blog" className="text-gray-400 hover:text-white">
              Blog
            </a>
          </li>
          <li>
            <a href="#faq" className="text-gray-400 hover:text-white">
              FAQ
            </a>
          </li>
          <li>
            <a href="#support" className="text-gray-400 hover:text-white">
              Support
            </a>
          </li>
          <li>
            <a href="#privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Contact</h2>
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
    </div>
  );
};

export default Footer;
