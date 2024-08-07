import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.module.css";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navlinksdata } from "../../constants/index.ts";
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
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center gap-4">
        <img src={im3} alt="Profile" className="w-10 h-10 rounded-full" />
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

      {showMenu && (
        <div className="w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4 flex flex-col items-start">
          <span
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
          >
            <MdClose />
          </span>
          <div className="flex flex-col items-start mt-16 gap-8">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
