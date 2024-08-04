import React from "react";
import { Link } from "react-scroll";
import { navlinksdata } from "../../constants/index.ts";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <h1 className="text-white font-bold text-3xl">Vanessa</h1>
      </div>
      <ul className="flex items-center gap-10">
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
            {/* Lines for hover effect */}
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-red-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100" />
            <span className="absolute left-0 right-0 top-0 h-[2px] bg-red-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
