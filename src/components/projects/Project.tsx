import React from "react";
import "./Project.css";
import Title from "../layouts/Title";
import projectOne from "../../assets/images/daycare.png";
import projectTwo from "../../assets/images/uplift.png";
import projectThree from "../../assets/images/profile/cartoon.jpg";
import ProjectCard from "../projects/ProjectCard";

const Project: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
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
          title="Music App for Artist"
          description="An app tailored for a specific musician, integrating features for music management and interaction."
          src={projectThree}
          status="In Progress (Python, Django, JS)"
          githubLink="#"
        />
        {/* <ProjectCard
          title="Student Attendance Management System"
          description="A system using QR codes for efficient student attendance tracking."
          src={projectThree}
          status="Completed (HTML, CSS, PHP, JS)"
          githubLink="https://github.com/yourusername/student-attendance-management-system" // Replace with actual link
        /> */}
      </div>
    </section>
  );
};

export default Project;
