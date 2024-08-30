import { useEffect } from "react";
import Title from "../layouts/Title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "I offer comprehensive web development services, including front-end and back-end development. I use modern technologies and frameworks to create responsive and user-friendly websites.",
    },
    {
      icon: "fas fa-database",
      title: "Database Management",
      description:
        "Offering database design, implementation, and management services to ensure your data is well-organized, secure, and accessible. Expertise in both relational and NoSQL databases.",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Graphics Design",
      description:
        "Expert in creating visually stunning designs for various media. From logos and branding materials to business cards, flyers, and banners, I craft designs that make an impact.",
    },
    {
      icon: "fas fa-pencil-ruler",
      title: "Human-Centered Design & Wireframing",
      description:
        "Experienced in applying Human-Centered Design (HCD) principles to create intuitive and user-focused interfaces. I use Figma to develop detailed wireframes and interactive prototypes.",
    },
    {
      icon: "fas fa-project-diagram",
      title: "UML Diagramming",
      description:
        "Proficient in creating detailed UML diagrams to visually represent system architecture, design processes, and interactions.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description:
        "Skilled in creating responsive designs that adapt to various screen sizes and devices. Proficient in using CSS frameworks and media queries.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full h-auto pt-10 pb-10 py-20 border-b border-black"
      ref={ref}
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
            className="bg-[#202327] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:bg-[#1e2024] hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="text-4xl text-pink-500 mb-4">
              <i className={service.icon}></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
