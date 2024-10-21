import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.module.css";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navlinksdata } from "../../constants/index.tsx"; // Ensure correct path
import im3 from "../../assets/images/im3.jpg"; // Import the image

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 left-0 w-full z-50  shadow-lg p-4"> {/* Updated bg color and shadow */}
      <div className="navbar-content flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={im3} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300 shadow-md" /> {/* Border and shadow for the profile image */}
          <h1 className="text-white font-bold text-3xl">Vanessa</h1>
        </div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navlinksdata.map(({ _id, title, link, icon }) => (
            <li
              className="relative flex items-center gap-2 text-base font-normal text-gray-400 tracking-wide cursor-pointer group"
              key={_id}
            >
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="relative z-10 flex items-center gap-2"
              >
                {icon}
                {title}
              </Link>
              {/* Lines above and below for hover and active state */}
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-red-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100" />
              <span className="absolute left-0 right-0 top-0 h-[2px] bg-red-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100" />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <span
            onClick={handleToggleDarkMode}
            className="text-xl cursor-pointer text-white"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </span>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-gray-900 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer shadow-md"
          >
            <FiMenu />
          </span>
        </div>
      </div>
      {showMenu && (
        <div className="mobile-menu bg-gray-900 p-4 fixed top-0 left-0 w-full h-full z-40 shadow-lg"> {/* Shadow for mobile menu */}
          <span
            onClick={() => setShowMenu(false)}
            className="close-icon text-white"
          >
            <MdClose />
          </span>
          <div className="menu-content">
            <img
              className="w-32 h-32 rounded-full mb-4 border border-gray-300 shadow-md" 
              src={im3}
              alt="Profile"
            />
            <p className="text-sm text-gray-400 mt-2 mb-4">
              Vanessa is a passionate software developer with expertise in web
              development, graphic design, and database management. With a
              strong background in Python, React, and Django, she excels in
              creating dynamic and user-friendly applications.
            </p>
            {navlinksdata.map(({ _id, title, link, icon }) => (
              <Link
                key={_id}
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setShowMenu(false)}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor transition duration-300 flex items-center gap-2"
              >
                {icon}
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
