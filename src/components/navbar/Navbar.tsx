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
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="flex items-center gap-4">
          <img src={im3} alt="Profile" className="w-10 h-10 rounded-full" />
          <h1 className="text-white font-bold text-3xl">Vanessa</h1>
        </div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10" style={{marginLeft: "50%"}}>
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
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
        </div>
      </div>
      {showMenu && (
        <div className="mobile-menu">
          <span onClick={() => setShowMenu(false)} className="close-icon">
            <MdClose />
          </span>
          <div className="menu-content">
            <img
              className="w-32 h-32 rounded-full mb-4"
              src={im3}
              alt="Profile"
            />
            <p className="text-sm text-gray-400 mt-2 mb-4">
              Vanessa is a passionate software developer with expertise in web
              development, graphic design, and database management. With a
              strong background in Python, React, and Django, she excels in
              creating dynamic and user-friendly applications. Vanessa is
              dedicated to leveraging her skills to deliver innovative solutions
              and drive technological advancements. Outside of coding, she
              enjoys exploring new technologies and staying updated with
              industry trends.
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
