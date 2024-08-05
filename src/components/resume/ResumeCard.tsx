import React from "react";

const ResumeCard = ({ title, institution, year }) => {
  return (
    <div className="relative flex items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform group hover:scale-105 hover:shadow-xl border-l-4 border-gray-600">
      {/* Card Content */}
      <div className="w-full">
        <h3 className="text-2xl font-semibold text-white group-hover:text-gray-400 transition-colors">
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
