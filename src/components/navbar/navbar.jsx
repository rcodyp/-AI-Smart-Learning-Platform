import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "./navbar.css"; // Make sure to include your custom CSS file or embedded style

const Navbar = () => {
  // Define animation variants for the navbar
  const navVariants = {
    hidden: { opacity: 0, y: -20 }, // Initial state (invisible and slightly moved up)
    visible: {
      opacity: 1, // Fully visible
      y: 0, // Normal position
      transition: { duration: 1, ease: "easeInOut" }, // Animation details
    },
  };

  return (
    <motion.div
      id="nav"
      initial="hidden" // Set initial state
      animate="visible" // Animate to the visible state
      variants={navVariants} // Apply the defined variants
    >
      <div className="nav-con"></div>
      <div>
        <motion.button id="gs" whileTap={{ scale: 0.85 }}>
          <a className="nav-link" href="#">Get Started</a></motion.button>
        <a id="ab" href="/about" className="nav-link">
          About
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
