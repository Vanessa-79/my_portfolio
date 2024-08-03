import React from "react";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
  title: string;
  des: string;
  src: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, des, src }) => {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-36 overflow-hidden rounded-lg">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
      <div className="w-full mt-5">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{des}</p>
          <div>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-cursor-pointer">
              <BsGithub size={24} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
