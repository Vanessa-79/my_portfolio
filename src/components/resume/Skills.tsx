import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex gap-12">
      {/* First Section */}
      <div className="w-1/2">
        <div className="py-10 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className="text-4xl font-bold">Design Skills</h2>
        </div>

        <div className="mt-14 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
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

          <div className="relative">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "20%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  20%
                </span>
              </motion.span>
            </span>
          </div>

          <div className="relative">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "10%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  10%
                </span>
              </motion.span>
            </span>
          </div>

          <div className="relative">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "45%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  45%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-1/2">
        <div className="py-10 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className="text-4xl font-bold">Development Skills</h2>
        </div>

        <div className="mt-14 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
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

          <div className="relative">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "20%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  20%
                </span>
              </motion.span>
            </span>
          </div>

          <div className="relative">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "10%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  10%
                </span>
              </motion.span>
            </span>
          </div>

          <div className="relative">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bg-opacity-20 inline-flex rounded-md mt-2 bg-gray-300">
              <motion.span
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "45%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-sm font-semibold text-white">
                  45%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
