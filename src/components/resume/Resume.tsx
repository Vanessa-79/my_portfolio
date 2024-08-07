import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import "./Resume.css";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);

  // Function to handle tab clicks
  const handleTabClick = (tab: string) => {
    setEducationData(tab === "education");
    setSkillData(tab === "skills");
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="MY RESUME" des="" />
      </div>
      <div
        className="flex flex-col items-center"
        style={{ marginRight: "50PX", marginLeft: "50px" }}
      >
        <div className="w-full flex justify-center mb-5">
          <ul className="flex space-x-4 bg-gray-100 rounded-lg p-1">
            <li
              onClick={() => handleTabClick("skills")}
              className={`${
                skillData ? "bg-red-500 text-white" : "bg-white text-gray-800"
              } cursor-pointer py-2 px-6 rounded-lg transition-colors duration-300 border border-gray-300`}
              style={{ flex: "1", width: "400px" }}
            >
              Professional Skills
            </li>
            <li
              onClick={() => handleTabClick("education")}
              className={`${
                educationData
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-800"
              } cursor-pointer py-2 px-6 rounded-lg transition-colors duration-300 border border-gray-300`}
              style={{ flex: "1" }}
            >
              Education
            </li>
          </ul>
        </div>
        <div className="flex justify-center mb-10">
          <a
            href="/path/to/your/resume.pdf"
            download
            className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
        {skillData && (
          <div className="w-full">
            <Skills />
          </div>
        )}
        {educationData && <Education />}
      </div>
    </section>
  );
};

export default Resume;
