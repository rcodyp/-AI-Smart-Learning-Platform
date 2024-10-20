import React from "react";
import "../style.css"; 
import { motion } from "framer-motion";

const Page5 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }, 
  };

   // Underline animation when the section is visible
   const underlineVariants = {
    hidden: { width: "0" }, // Initial width of 0
    visible: {
      width: "100%", // Expanding width to 50vw
      transition: { duration: 1, ease: "easeInOut" }, // Smooth easing
    },
  };
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants} 
      id="page5"
    >
      <div id="about-section">
        <motion.h1 variants={childVariants}>About Our Platform</motion.h1>
        <motion.div
          className="underline"
          variants={underlineVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
        <motion.div id="about-discription" variants={childVariants}>
          <p>
            At LearnAI, our mission is to empower students of all levels to
            achieve their educational goals through personalized learning
            experiences. We harness the power of AI to create a dynamic testing
            environment that adapts to individual skill levels, ensuring that
            every user receives the support they need.
          </p>
        </motion.div>
        <motion.div id="img-text" variants={childVariants}>
          <div id="about-image">
            <img src="./public/Space.png" alt="" />
          </div>
          <p>
            Our platform offers AI assessments in easy, medium, and hard levels.
            Users are evaluated and assigned skill levels—beginner,
            intermediate, or advanced—allowing us to create personalized
            learning paths for each student.
          </p>
        </motion.div>
        <motion.div id="about-benifits" variants={childVariants}>
          <h2>User Benefits</h2>
          <ul>
            <motion.li variants={childVariants}>
              Customized Learning Paths: Tailored educational content designed
              specifically for you.
            </motion.li>
            <motion.li variants={childVariants}>
              Flexible Learning: Access materials anytime, anywhere to fit your
              schedule.
            </motion.li>
            <motion.li variants={childVariants}>
              Progress Tracking: Monitor your improvement with detailed
              performance analytics.
            </motion.li>
            <motion.li variants={childVariants}>
              Engaging Content: Interactive lessons and resources that make
              learning enjoyable.
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page5;
