import React from "react";
import "./Project.css";
import Title from "../layouts/Title";
import projectOne from "../../assets/images/profile/cartoon.jpg";
import projectTwo from "../../assets/images/profile/cartoon.jpg";
import projectThree from "../../assets/images/profile/cartoon.jpg";
import ProjectCard from "../projects/ProjectCard";

const Project: React.FC = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Project"
        />
      </div>

      <div className="grid grid-cols-3 gap-14">
        <div>
          <ProjectCard
            title="Daystar Project 1"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sem vitae enim laoreet, sed posuere ligula semper."
            src={projectOne}
          />
        </div>

        <div>
          <ProjectCard
            title="Daystar Project 2"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sem vitae enim laoreet, sed posuere ligula semper."
            src={projectTwo}
          />
        </div>

        <div>
          <ProjectCard
            title="Daystar Project 3"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sem vitae enim laoreet, sed posuere ligula semper."
            src={projectThree}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
