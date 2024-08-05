import React, { useState } from "react";
import Title from "../layouts/Title";
import { motion } from "framer-motion";

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  initial: {
    scale: 1,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

const Features = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "I offer comprehensive web development services, including front-end and back-end development. I use modern technologies and frameworks to create responsive and user-friendly websites.",
      moreInfo:
        "Whether you need a new website or an update to an existing one, I can help. I work with technologies such as HTML, CSS, JavaScript, React, and more to ensure your site is functional and visually appealing.",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Graphic Design",
      description:
        "Expert in creating visually stunning designs for various media. From logos and branding materials to web graphics and social media visuals, I craft designs that make an impact.",
      moreInfo:
        "My graphic design services include creating high-quality graphics, illustrations, and layouts. I use tools like Adobe Illustrator, Photoshop, and Figma to bring your vision to life and enhance your brand's visual identity.",
    },
    {
      icon: "fas fa-database",
      title: "Database Management",
      description:
        "Offering database design, implementation, and management services to ensure your data is well-organized, secure, and accessible. Expertise in both relational and NoSQL databases.",
      moreInfo:
        "I handle tasks such as database schema design, performance optimization, data migration, and backup solutions. My goal is to provide robust database solutions that support your business's needs and ensure data integrity.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full h-auto pt-10 pb-10 py-20 border-b border-black"
    >
      <div className="flex justify-start items-start">
        <Title
          title="SERVICES"
          des="What I Do"
          titleStyle={{ fontSize: "1.5rem", marginLeft: "4rem" }} 
          descriptionStyle={{ fontSize: "3rem", marginLeft: "4rem" }} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 px-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#202327] p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:bg-[#1e2024]"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <div className="text-4xl text-pink-500 mb-4">
              <i className={service.icon}></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            {expanded === index && (
              <p className="text-gray-300 mb-4">{service.moreInfo}</p>
            )}
            <button
              className="text-pink-500 hover:underline"
              onClick={() => toggleExpand(index)}
            >
              {expanded === index ? "Read Less" : "Read More->"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
