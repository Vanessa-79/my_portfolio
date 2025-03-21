import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.module.css";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navlinksdata } from "../../constants/index.tsx"; // Ensure correct path
import im3 from "../../assets/images/im3.jpg"; // Import the image
import { useTheme } from "../../context/ThemeContext";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[#ffffff] dark:bg-[#212428] shadow-lg p-4 transition-colors duration-200">
      <div className="navbar-content flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={im3} alt="Profile" className="w-10 h-10 rounded-full border border-designColor shadow-md" /> {/* Border and shadow for the profile image */}
          <h1 className="text-[#1e2024] dark:text-[#c4cfde] font-bold text-3xl">Vanessa</h1>
        </div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navlinksdata.map(({ _id, title, link, icon }) => (
            <li
              className="relative flex items-center gap-2 text-base font-normal text-[#1e2024] dark:text-[#c4cfde] tracking-wide cursor-pointer group"
              key={_id}
            >
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="relative z-10 flex items-center gap-2 hover:text-designColor dark:hover:text-designColor transition-colors"
              >
                {icon}
                {title}
              </Link>
              {/* Lines above and below for hover and active state */}
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-designColor transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100" />
              <span className="absolute left-0 right-0 top-0 h-[2px] bg-designColor transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100" />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-xl cursor-pointer text-[#1e2024] dark:text-[#c4cfde] hover:text-designColor dark:hover:text-designColor transition-colors p-2 rounded-full hover:bg-[#f3f3f3] dark:hover:bg-[#23272b]"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-[#f3f3f3] dark:bg-[#23272b] w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer transition-colors"
          >
            <FiMenu />
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-[#ffffff] dark:bg-[#212428] transition-colors">
          <div className="flex flex-col items-center justify-center h-full relative">
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-2xl text-[#1e2024] dark:text-[#c4cfde] hover:text-designColor dark:hover:text-designColor"
            >
              <MdClose />
            </button>
            <img
              className="w-32 h-32 rounded-full mb-8 border border-designColor shadow-md"
              src={im3}
              alt="Profile"
            />
            <nav className="flex flex-col items-center gap-6">
              {navlinksdata.map(({ _id, title, link, icon }) => (
                <Link
                  key={_id}
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                  className="flex items-center gap-2 text-xl text-[#1e2024] dark:text-[#c4cfde] hover:text-designColor dark:hover:text-designColor transition-colors"
                >
                  {icon}
                  {title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
