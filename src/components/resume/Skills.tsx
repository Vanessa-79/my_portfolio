import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex gap-12">
      {/* Design Skills Section */}
      <div
        className="w-1/3"
        style={{ marginLeft: "auto" }}
      >
        <div className="py-10 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className="text-4xl font-bold text-white">Design Skills</h2>
        </div>

        <div className="mt-14 w-full flex flex-col gap-6">
          {/* Photoshop */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">Photoshop</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  100%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Figma */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "90%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  90%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Add more design skills as needed */}
        </div>
      </div>

      {/* Development Skills Section */}
      <div className="w-1/3">
        <div className="py-10 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className="text-4xl font-bold text-white">Development Skills</h2>
        </div>

        <div className="mt-14 w-full flex flex-col gap-6">
          {/* JavaScript */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">JavaScript</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "85%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  85%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Python */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">Python</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "80%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  80%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Django */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">Django</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "70%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  70%
                </span>
              </motion.span>
            </span>
          </div>

          {/* React */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">React</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "75%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  75%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Add more development skills as needed */}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="w-1/3">
        <div className="py-10 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className="text-4xl font-bold text-white">Soft Skills</h2>
        </div>

        <div className="mt-14 w-full flex flex-col gap-6">
          {/* Problem Solving */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">Problem Solving</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "90%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  90%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Teamwork */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">Teamwork</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "85%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  85%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Self-Motivation */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">Self-Motivation</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "80%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  80%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Time Management */}
          <div className="relative">
            <p className="text-sm uppercase font-medium">Time Management</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "75%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  75%
                </span>
              </motion.span>
            </span>
          </div>

          {/* Add more soft skills as needed */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
