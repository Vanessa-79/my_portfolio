import { useState } from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const cardVariants = {
    initial: { opacity: 0.5 },
    selected: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-10 md:gap-20 border-l-4 border-red-500 pl-4 md:pl-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-10 font-titleFont">
        <p className="text-sm text-red-500 tracking-widest">2018-2024</p>
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 text-white">
          Education
        </h2>
      </div>
      <div className="flex flex-col gap-6 md:gap-10 " style={{ width: "90%" }}>
        <motion.div
          className="transition-transform transform hover:scale-105"
          initial="initial"
          animate={selectedCard === 4 ? "selected" : "initial"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
        >
          <ResumeCard
            title="Advanced Certificate in Software Engineering (Apprenticeship)"
            institution="Refactory Academy"
            year="2024"
            onClick={() => handleCardClick(4)}
            isSelected={selectedCard === 4}
          />
        </motion.div>
        <motion.div
          className="transition-transform transform hover:scale-105"
          initial="initial"
          animate={selectedCard === 3 ? "selected" : "initial"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
        >
          <ResumeCard
            title="Certificate in Software Engineering (Python)"
            institution="Refactory Academy"
            year="2024"
            onClick={() => handleCardClick(3)}
            isSelected={selectedCard === 3}
          />
        </motion.div>
        <motion.div
          className="transition-transform transform hover:scale-105"
          initial="initial"
          animate={selectedCard === 2 ? "selected" : "initial"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
        >
          <ResumeCard
            title="Bachelor of Science in Information Technology"
            institution="Uganda Martyrs University Nkozi"
            year="2020-2023"
            onClick={() => handleCardClick(2)}
            isSelected={selectedCard === 2}
          />
        </motion.div>
        <motion.div
          className="transition-transform transform hover:scale-105"
          initial="initial"
          animate={selectedCard === 0 ? "selected" : "initial"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
        >
          <ResumeCard
            title="UACE - Uganda Advanced Certificate of Education"
            institution="K. Garden Groove College Buddo"
            year="2018-2019"
            onClick={() => handleCardClick(0)}
            isSelected={selectedCard === 0}
          />
        </motion.div>
        <motion.div
          className="transition-transform transform hover:scale-105"
          initial="initial"
          animate={selectedCard === 1 ? "selected" : "initial"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
        >
          <ResumeCard
            title="UCE - Uganda Certificate of Education"
            institution="Bright Future Academy"
            year="2014-2017"
            onClick={() => handleCardClick(1)}
            isSelected={selectedCard === 1}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
