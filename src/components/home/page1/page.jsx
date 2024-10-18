import React from "react";
import "../style.css";
import { motion } from "framer-motion";

const Page1 = () => {
  
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1, 
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="page1">
      <div id="content"></div>
        <div id="overlay">
          <motion.div 
            id="over1"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={overlayVariants} 
          >
            <div>
              <h1>Personalized Education</h1>
              <h2>Powered by AI</h2>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default Page1;
