import React, { useState } from "react";
import Title from "../layouts/Title";
import "./Resume.css";
import Education from "../resume/Education";
import Skills from "../resume/Skills";
// import Achievements from "../resume/Achievements";
// import Experience from "../resume/Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achieveData, setAchievementsData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="MY EXPERIENCE" des="My Resume" />
      </div>
      <div className="mt-10 flex flex-col items-center">
        <ul className="w-full flex justify-center items-center space-x-4 border-b-2 border-gray-600 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            className={`transition-colors duration-300 ${
              educationData ? "active-tab" : "inactive-tab"
            }`}
            onClick={() => {
              setEducationData(true);
              setSkillsData(false);
              setExperienceData(false);
              setAchievementsData(false);
            }}
          >
            Education
          </li>
          <li
            className={`transition-colors duration-300 ${
              skillData ? "active-tab" : "inactive-tab"
            }`}
            onClick={() => {
              setEducationData(false);
              setSkillsData(true);
              setExperienceData(false);
              setAchievementsData(false);
            }}
          >
            Professional Skills
          </li>
          <li
            className={`transition-colors duration-300 ${
              experienceData ? "active-tab" : "inactive-tab"
            }`}
            onClick={() => {
              setEducationData(false);
              setSkillsData(false);
              setExperienceData(true);
              setAchievementsData(false);
            }}
          >
            Experience
          </li>
          <li
            className={`transition-colors duration-300 ${
              achieveData ? "active-tab" : "inactive-tab"
            }`}
            onClick={() => {
              setEducationData(false);
              setSkillsData(false);
              setExperienceData(false);
              setAchievementsData(true);
            }}
          >
            Achievements
          </li>
        </ul>
        <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700">
          Download CV
        </button>
      </div>

      <div className="mt-10 px-4">
        {educationData && <Education />}
        {skillData && <Skills />}
        {/* {experienceData && <Experience />} */}
        {/* {achieveData && <Achievements />} */}
      </div>
    </section>
  );
};

export default Resume;
