import React from "react";

interface ResumeCardProps {
  title: string;
  institution: string;
  year: string;
  onClick: () => void; // Add this prop
  isSelected: boolean; // Add this prop
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  title,
  institution,
  year,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex items-center bg-navy-500 p-6 rounded-lg shadow-lg  group hover:scale-105 border-l-4 ${
        isSelected ? "border-white-500" : "border-gray-200"
      } cursor-pointer`}
    >
      {/* Card Content */}
      <div className="w-full">
        <h3 className="text-2xl font-semibold text-white group-hover:text-red-900 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
          {institution}
        </p>
        <p className="text-sm text-red-400 group-hover:text-red-700 transition-colors">
          {year}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
