import React from "react";
import "./Project.css";
import Title from "../layouts/Title";
import projectOne from "../../assets/images/daycare.png";
import projectTwo from "../../assets/images/uplift.png";
import projectThree from "../../assets/images/profile/cartoon.jpg";
import projectFour from "../../assets/images/refactory.png"; 
import projectFive from "../../assets/images/personal.png"; 
import ProjectCard from "../projects/ProjectCard";

const Project: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
      style={{
        width: "100%",
        marginLeft: "0px",
        marginRight: "60px",
        paddingTop: "5px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.50)", // Adding shadow
      }}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Discover My Latest Projects" des="My Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Daystar Daycare Web App"
          description="A comprehensive web application for Daystar Daycare, focusing on record keeping and management."
          src={projectOne}
          status="Completed (Python, Django, JS)"
          githubLink="https://github.com/Vanessa-79/daystar_management_system.git"
        />
        <ProjectCard
          title="Uplift Donation Website"
          description="A platform dedicated to empowering individuals and communities in need by facilitating charitable donations and support initiatives."
          src={projectTwo}
          status="In Progress (Python, Django, JS)"
          githubLink="https://github.com/Vanessa-79/life-changingNew.git"
        />

        <ProjectCard
          title="Refactory Academy Project"
          description="An innovative project focusing on advanced software engineering principles and practices, collaboratively developed during the Refactory Academy bootcamp."
          src={projectFour}
          status="In Progress (React JS, JavaScript, Nest JS, CYPRESS)"
          githubLink="" // Replace with the actual link
        />

        <ProjectCard
          title="Personal Portfolio Website"
          description="A professional personal portfolio website showcasing my skills, projects, and services. Built with React JS, Bootstrap, and Tailwind CSS for a sleek and responsive design."
          src={projectFive}
          status="Completed (React JS, Bootstrap, Tailwind CSS)"
          githubLink="https://github.com/Vanessa-79/my_portfolio.git"
        />

        <ProjectCard
          title="Music App for Artist"
          description="An app tailored for a specific musician, integrating features for music management and interaction."
          src={projectThree}
          status="In Progress (Python, Django, JS)"
          githubLink="#"
        />
      </div>
    </section>
  );
};

export default Project;
