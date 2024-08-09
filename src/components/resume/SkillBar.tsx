import React from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="w-full mb-4">
      <p className="text-sm font-medium text-gray-400">{skill}</p>
      <div className="relative mt-2">
        <div className="w-full h-2 bg-gray-300 rounded-md">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: `${percentage}%`, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-md"
          />
        </div>
        <span className="absolute right-0 top-0 text-xs text-gray-400 pr-2">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default SkillBar;
