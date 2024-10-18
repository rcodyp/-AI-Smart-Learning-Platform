import React from 'react';
import '../style.css'; 
import { motion } from 'framer-motion';

const Page4 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }, 
  };

  const handleButtonClick = () => {
    window.open('http://localhost:8501', '_blank'); 
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id="page4"
    >
      <div className="container">
        <motion.div id="part3" variants={childVariants}>
          <img
            className="image"
            src="https://images.spiceworks.com/wp-content/uploads/2023/10/12122423/mobile-app-development.jpg"
            alt="App Development"
          />
          <div>
            <a href="http://localhost:8501">
              <div className="title">App Development</div>
            </a>
            <div className="about">
              App development focuses on creating software for mobile and desktop platforms. It includes both native and cross-platform development, emphasizing usability and performance.
            </div>
          </div>
        </motion.div>
        <motion.div id="part4" variants={childVariants}>
          <img
            className="image"
            src="https://nietm.in/wp-content/uploads/2022/12/AI3.png"
            alt="Artificial Intelligence"
          />
          <div>
            <a href="http://localhost:8501">
              <div className="title">Artificial Intelligence</div>
            </a>
            <div className="about">
              AI/ML involves creating systems that mimic human intelligence and learn from data. These technologies enable automation, data analysis, and smarter decision-making across various industries.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page4;
