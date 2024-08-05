import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { navlinksdata } from "../../constants/index.ts";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <h1 className="text-white font-bold text-3xl">Vanessa</h1>
      </div>
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
        {navlinksdata.map(({ _id, title, link }) => (
          <li
            className="relative text-base font-normal text-gray-400 tracking-wide cursor-pointer group"
            key={_id}
          >
            <Link
              to={link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="relative z-10"
            >
              {title}
            </Link>
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-red-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100" />
            <span className="absolute left-0 right-0 top-0 h-[2px] bg-red-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100" />
          </li>
        ))}
      </ul>
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        <FiMenu />
      </span>

      {showMenu && (
        <div className="w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4 flex flex-col items-start">
          <span
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
          >
            <MdClose />
          </span>
          <div className="flex flex-col items-start mt-16 gap-8">
            <img className="w-32 mb-4" src="logo" alt="Logo" />
            <p className="text-sm text-gray-400 mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel nisi non neque finibus faucibus. Sed euismod, ligula in semper
              congue, velit mi consectetur nunc, at scelerisque velit nunc non
              est.
            </p>
            {navlinksdata.map(({ _id, title, link }) => (
              <Link
                key={_id}
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setShowMenu(false)}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor transition duration-300"
              >
                {title}
              </Link>
            ))}
            {/* <div className="flex gap-4 mt-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
