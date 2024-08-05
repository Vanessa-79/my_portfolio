import React, { useEffect } from "react";
import "./Banner.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaInstagram, FaReact } from "react-icons/fa";
import { SiDjango, SiFigma, SiBootstrap } from "react-icons/si";

const LeftHome = () => {
  const [text] = useTypewriter({
    words: [
      "Software developer",
      "Database manager",
      "Web designer",
      "Graphics designer",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const icons = document.querySelectorAll(".bannerIcon");
    icons.forEach((icon) => {
      icon.addEventListener("mouseover", () => {
        icon.classList.add("hovered");
      });
      icon.addEventListener("mouseout", () => {
        icon.classList.remove("hovered");
      });
    });

    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("mouseover", () => {});
        icon.removeEventListener("mouseout", () => {});
      });
    };
  }, []);

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div
        className="flex flex-col gap-5"
        style={{ marginLeft: "20px", marginRight: "60px", paddingTop: "5px" }}
      >
        <h4 className="text-lg font-normal text-white">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm
          <span className="text-red-500 capitalize"> Vanessa </span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          a <span className="text-orange-400">{text}</span>{" "}
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="red" />
        </h2>
        <p className="text-lg font-normal text-gray-400 mb-2">
          I'm a passionate and dedicated software developer with a strong
          foundation in programming languages such as Python and React, as well
          as experience with frameworks like Django. I also have expertise in
          front-end technologies including Bootstrap, Tailwind CSS, and graphic
          design using Figma. I have a proven track record of building
          high-quality, scalable, and user-friendly applications. I am always
          eager to learn new skills and contribute to the community. Feel free
          to reach out if you have any questions or need assistance with your
          projects.
          <span className="text">|</span>{" "}
          <a href="#contact" className="text-red-500 hover:underline">
            Contact me
          </a>{" "}
          <span className="text">|</span>{" "}
          <a
            href="https://github.com/Vanessa-79"
            className="text-red-500 hover:underline"
          >
            View my GitHub
          </a>{" "}
          <span className="text">|</span>{" "}
          <a
            href="https://www.linkedin.com/in/vanessa-nassanga-6807222a4/"
            className="text-red-500 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-6 lgl:gap-0">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">
            Find me In
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100051636019516"
              rel="noopener noreferrer"
              className="bannerIcon text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/Vanie779"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/vanessa_nassanga/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon text-blue-700"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">
            Best skill on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon text-blue-500">
              <FaReact />
            </span>
            <span className="bannerIcon text-purple-600">
              <SiBootstrap />
            </span>
            <span className="bannerIcon text-green-500">
              <SiDjango />
            </span>
            <span className="bannerIcon text-pink-600">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
