import React from "react";
import { motion } from "framer-motion";

// Define the props type for the SkillBar component
interface SkillBarProps {
  skill: string;
  percentage: number;
}

// Define the SkillBar component
const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium text-gray-500">{skill}</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
          style={{ width: `${percentage}%` }}
        >
          <span className="absolute -top-7 right-0 text-gray-500">
            {percentage}%
          </span>
        </motion.span>
      </span>
    </div>
  );
};

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontSize: "30px" }}
          >
            Design Skills
          </h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          {designSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontSize: "30px" }}
          >
            Development Skills
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {developmentSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontSize: "30px" }}
          >
            Soft Skills
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {softSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
