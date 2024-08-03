import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-10 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2000-2045</p>
        <h2 className="text-4xl font-bold">Achievements</h2>
      </div>
      <div className="mt-14 w-1/2 border-l-4 border-gray-600 flex flex-col gap-12 pl-12">
        <ResumeCard
          title="Bachelor of Science in Computer Science"
          institution="University of California, Berkeley"
          year="2000-2033"
        />
        <ResumeCard
          title="Master of Science in Computer Science"
          institution="University of California, Berkeley"
          year="2034-2039"
        />
        <ResumeCard
          title="Ph.D. in Computer Science"
          institution="University of California, Berkeley"
          year="2040-2045"
        />
      </div>
    </motion.div>
  );
};

export default Education;
