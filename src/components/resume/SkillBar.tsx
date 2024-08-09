import React from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-gray-400">{skill}</p>
        <span className="text-xs font-medium text-gray-400">{percentage}%</span>
      </div>
      <div className="relative mt-2">
        <div className="w-full h-2 bg-gray-300 rounded-md">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: `${percentage}%`, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
