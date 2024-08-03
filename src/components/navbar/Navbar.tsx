import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.jpg";
import { navlinksdata, NavLink } from "../../constants/index.ts";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <h1 className="text-white font-bold text-3xl">Vanessa</h1>
      </div>
      <ul className="flex items-center gap-10">
        {navlinksdata.map(({ _id, title, link }) => (
          <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            key={_id}
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
