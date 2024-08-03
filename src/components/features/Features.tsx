import React from "react";
import Title from "../layouts/Title";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-auto pt-10 pb-10 py-20 border-b border-black"
    >
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <div className="bg-[#202327] p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:translate-y-[-10px] hover:bg-[#1e2024]">
          <div className="text-4xl text-pink-500 mb-4">
            <i className="fas fa-layer-group"></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Business Strategy
          </h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur sem vitae enim laoreet, sed posuere ligula semper.
          </p>
        </div>
        <div className="bg-[#202327] p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:translate-y-[-10px] hover:bg-[#1e2024]">
          <div className="text-4xl text-pink-500 mb-4">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            App Development
          </h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur sem vitae enim laoreet, sed posuere ligula semper.
          </p>
        </div>
        <div className="bg-[#202327] p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:translate-y-[-10px] hover:bg-[#1e2024]">
          <div className="text-4xl text-pink-500 mb-4">
            <i className="fas fa-search"></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            SEO Optimisation
          </h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur sem vitae enim laoreet, sed posuere ligula semper.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
