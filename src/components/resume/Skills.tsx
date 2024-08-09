// import React from "react";
import SkillBar from "./SkillBar";
import { CircularProgressbar } from "react-circular-progressbar";


const Skills = () => {
  const designSkills = [
    { skill: "Figma", percentage: 90 },
    { skill: "Adobe Photoshop", percentage: 60 },
    { skill: "Adobe Illustrator", percentage: 70 },
    { skill: "Graphic Design", percentage: 85 },
  ];

  const developmentSkills = [
    { skill: "Python", percentage: 95 },
    { skill: "Django", percentage: 70 },
    { skill: "React", percentage: 60 },
    { skill: "JavaScript", percentage: 30 },
    { skill: "Bootstrap", percentage: 75 },
    { skill: "Tailwind CSS", percentage: 65 },
    { skill: "CSS", percentage: 70 },
    { skill: "SQL", percentage: 50 },
  ];

  const softSkills = [
    { skill: "Version Control (Git)", percentage: 85 },
    { skill: "Problem Solving", percentage: 90 },
    { skill: "Teamwork", percentage: 80 },
    { skill: "Self-Motivation", percentage: 85 },
    { skill: "Effective Communication", percentage: 75 },
    { skill: "Microsoft Office Suite", percentage: 90 },
    { skill: "Team Collaboration Tools (Trello)", percentage: 95 },
  ];

  return (
    <div className="w-full flex flex-row justify-between gap-32 ">
      <div className="w-1/2 ">
        {[
          { title: "Design Skills", skills: designSkills },
          { title: "Development Skills", skills: developmentSkills },
        ].map((category, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.skills.map((skill, idx) => (
                <SkillBar
                  key={idx}
                  skill={skill.skill}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2">
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">Soft skills</h2>

          <div className="flex flex-row flex-wrap">
            {softSkills.map((skill, idx) => (
              <div
                className="flex flex-col justify-between"
                style={{ width: "200px", height: "200px" }}
              >
                <span className="text-nowrap" style={{}}>
                  {skill.skill}
                </span>
                <CircularProgressbar
                  key={idx}
                  value={skill.percentage}
                  className="flex-auto"
                  text={`${skill.percentage}%`} //put varibales inside a whole string and use single quotes and double quotes without escaping(skill.percentage + "%")
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
