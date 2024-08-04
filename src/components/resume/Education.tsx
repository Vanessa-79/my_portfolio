import React, { useState } from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const cardVariants = {
    initial: { opacity: 0.5 },
    selected: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-10 font-titleFont">
        <p className="text-sm text-red-500 tracking-[4px]">2018-2024</p>
        <h2 className="text-4xl font-bold text-red-500">Education Quality</h2>
      </div>
      <div className="flex justify-center">
        <div
          className={`w-full max-w-4xl border-l-4 ${
            selectedCard !== null ? "border-red-500" : "border-gray-600"
          } flex flex-col gap-10 pl-6 md:pl-12`}
        >
          <ResumeCard
            title="Currently Doing Bootcamp"
            institution="Refactory Academy"
            year="2024-Present"
            onClick={() => handleCardClick(4)}
            isSelected={selectedCard === 4}
          />

          <ResumeCard
            title="Certificate in Software Engineering (Python)"
            institution="Refactory Academy"
            year="2024"
            onClick={() => handleCardClick(3)}
            isSelected={selectedCard === 3}
          />

          <ResumeCard
            title="Bachelor of Science in Information Technology"
            institution="Uganda Martyrs University Nkozi"
            year="2020-2023"
            onClick={() => handleCardClick(2)}
            isSelected={selectedCard === 2}
          />

          <ResumeCard
            title="UACE - Uganda Advanced Certificate of Education"
            institution="K. Garden Groove College Buddo"
            year="2018-2019"
            onClick={() => handleCardClick(0)}
            isSelected={selectedCard === 0}
          />
          <ResumeCard
            title="UCE - Uganda Certificate of Education"
            institution="Bright Future Academy"
            year="2014-2017"
            onClick={() => handleCardClick(1)}
            isSelected={selectedCard === 1}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
