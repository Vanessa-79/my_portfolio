import SkillBar from "./SkillBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the default styles

const Skills = () => {
  const designSkills = [
    { skill: "Figma", percentage: 90 },
    { skill: "Canva", percentage: 90 },
    { skill: "Adobe Photoshop", percentage: 60 },
    { skill: "Adobe Illustrator", percentage: 85 },
  ];

  const developmentSkills = [
    { skill: "Python", percentage: 80 },
    { skill: "Django", percentage: 90 },
    { skill: "React", percentage: 70 },
    { skill: "JavaScript", percentage: 30 },
    { skill: "Bootstrap", percentage: 75 },
    { skill: "Version Control (Git)", percentage: 80 },
    { skill: "Containerization in Docker", percentage: 80 },
    { skill: "CI/CD Pipeline", percentage: 80 },
    { skill: "Cloud Infrastructure: AWS", percentage: 50 },
    { skill: "Tailwind CSS", percentage: 60 },
    { skill: "UI/UX Design", percentage: 70 },
    { skill: "SQL", percentage: 70 },
  ];

  const softSkills = [
    { skill: "Problem Solving", percentage: 95 },
    { skill: "Teamwork", percentage: 100 },
    { skill: "Self-Motivation", percentage: 100 },
    { skill: "Effective Communication", percentage: 75 },
    { skill: "Microsoft Office Suite", percentage: 95 },
    { skill: "Team Collaboration Tools (Trello)", percentage: 100 },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-32">
      {/* Design Skills and Soft Skills with Bars */}
      <div className="w-full lg:w-1/2">
        {[
          { title: "Design Skills", skills: designSkills },
          { title: "Soft Skills", skills: softSkills },
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

      {/* Development Skills with Circular Progress Bars */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Development Skills
        </h2>
        <div className="grid grid-cols-4 gap-8">
          {" "}
          {/* 4 columns per row */}
          {developmentSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-[100px] h-[100px] mb-8 transition-transform transform hover:scale-110 hover:shadow-lg"
            >
              <div className="relative w-full h-full">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    pathColor: "#ff6347", // Red color
                    textColor: "#fff",
                    trailColor: "#ddd",
                  })}
                />
              </div>
              <span className="text-sm font-medium text-gray-400 mt-2">
                {skill.skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
