import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs"; // Import both icons in one line

interface ProjectCardProps {
  title: string;
  description: string;
  src: string;
  status?: string; // Optional prop for project status
  githubLink?: string; // Optional prop for GitHub link
  websiteLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  src,
  status,
  githubLink,
  websiteLink,
}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
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
          <p className="text-gray-400">{description}</p>
          {status && <p className="text-sm text-gray-500 mt-2">{status}</p>}
          <div className="mt-4 flex gap-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-cursor-pointer"
              >
                <BsGithub size={24} />
              </a>
            )}
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-cursor-pointer"
              >
                <BsGlobe size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
