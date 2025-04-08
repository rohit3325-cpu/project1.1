import React from "react";
import { Code, Brush, Smartphone, Rocket, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Responsive and high-performance websites that drive results.",
  },
  {
    icon: <Brush size={40} />,
    title: "UI/UX Design",
    description: "Clean and intuitive designs to boost engagement and user experience.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Mobile App Development",
    description: "Seamless mobile apps across iOS and Android platforms.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Digital Marketing",
    description: "Boost your brand’s visibility with SEO, ads, and social strategies.",
  },
  {
    icon: <Globe size={40} />,
    title: "Branding",
    description: "Build a strong identity with our creative branding solutions.",
  },
  {
    icon: <Layers size={40} />,
    title: "Cloud & Hosting",
    description: "Secure, scalable, and lightning-fast hosting solutions.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-black text-white py-20 px-4 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          MegaBlog offers a wide range of tech solutions to help you scale your digital presence.
        </motion.p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
            key={idx}
            className="bg-gray-900 hover:bg-gray-800 transition duration-300 p-8 rounded-2xl shadow-lg hover:shadow-indigo-500/40"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{ transition: { duration: 0.2, ease: "easeInOut" } }}
          >
            <motion.div
              className="text-indigo-500 mb-5"
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


