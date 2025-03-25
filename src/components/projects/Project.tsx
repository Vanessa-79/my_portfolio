import React from "react";
import "./Project.css";
import Title from "../layouts/Title";
import projectOne from "../../assets/images/daycare.png";
import projectTwo from "../../assets/images/uplift.png";
import projectThree from "../../assets/images/ecommerce.png";
import projectFour from "../../assets/images/refactory.png";
import projectFive from "../../assets/images/personal.png";
import projectBeginner from "../../assets/images/cakes.png"; // Add an image for the beginner project
import ProjectCard from "../projects/ProjectCard";
import projectRideSharing from "../../assets/images/rideshare.webp"; // Add an image for the beginner project


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
        {/* New Beginner Project */}
        <ProjectCard
          title="My First Project (HTML & CSS)"
          description="A simple static website built with HTML and CSS during my early days of learning web development."
          src={projectBeginner}
          status="Completed (HTML, CSS)"
          githubLink="https://github.com/Vanessa-79/Bakery_website.git"
          websiteLink="https://vanessa-79.github.io/Bakery_website/"
        />

        {/* Existing Projects */}
        <ProjectCard
          title="Daystar Daycare Web App"
          description="A comprehensive web application for Daystar Daycare, focusing on record keeping and management."
          src={projectOne}
          status="Completed (Python, Django, JS, Bootstrap)"
          githubLink="https://github.com/Vanessa-79/daystar_management_system.git"
          websiteLink="https://daycare-daystar-management-system.onrender.com/"
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
          status="Completed (React JS, JavaScript, Nest JS, CYPRESS, Jest, CI/CD, Docker)"
          websiteLink="https://rims-portal.onrender.com/"
        />
        <ProjectCard
          title="Personal Portfolio Website"
          description="A professional personal portfolio website showcasing my skills, projects, and services. Built with React JS, Bootstrap, and Tailwind CSS for a sleek and responsive design."
          src={projectFive}
          status="Completed (React JS, Bootstrap, Tailwind CSS)"
          githubLink="https://github.com/Vanessa-79/my_portfolio.git"
          websiteLink="https://vanessa-myportfolio.vercel.app/"
        />
        <ProjectCard
          title="Ecommerce Website"
          description="A modern fashion retail platform featuring women's nightwear, gymwear, and children's clothing with seamless shopping experience and responsive design."
          src={projectThree}
          status="In Progress (React JS, Tailwind CSS, Animations)"
          githubLink="https://github.com/Vanessa-79/ecommerce-website"
          websiteLink="https://dreamwear-ecommerce-website.onrender.com/"
        />

        <ProjectCard
          title="Ride Sharing Backend"
          description="A robust backend service for a ride-sharing application, featuring user authentication, ride management and real-time updates."
          src={projectRideSharing}
          status="Completed (Django, PostgreSQL, Redis, CI/CD, Docker, Postman)"
          githubLink="https://github.com/Vanessa-79/junior-dev-test-true-african.git"
        />
      </div>
    </section>
  );
};

export default Project;
