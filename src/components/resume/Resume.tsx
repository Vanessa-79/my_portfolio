import React, { useState } from "react";
import Title from "../layouts/Title";
import "./Resume.css";
import Education from "../resume/Education";
import Skills from "../resume/Skills";
import Achievements from "../resume/Achievements";
import Experience from "../resume/Experience";

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
      <div>
        <ul className="w-full grid grid-cols-4">
          <li
            className={`${educationData ? "active" : ""} resumeli`}
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
            className={`${skillData ? "active" : ""} resumeli`}
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
            className={`${experienceData ? "active" : ""} resumeli`}
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
            className={`${achieveData ? "active" : ""} resumeli`}
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
      </div>

      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achieveData && <Achievements />}
    </section>
  );
};

export default Resume;
