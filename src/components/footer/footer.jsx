import React from 'react';
import { motion } from 'framer-motion';
import './footer.css'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
 
  const footerVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' } 
    },
  };

  return (
    <div id="bottom">
      <motion.footer 
        id="footer"
        initial="hidden" 
        animate="visible" 
        variants={footerVariants} 
      >
        <div className="footer-container">
          <div className="logo">LearnAI</div>
          <div className="las">
            <div className="links">
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Information</a>
            </div>
            <div className="social-icons">
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaTwitter /></a>
              <a href="#" className="icon"><FaLinkedinIn /></a>
              <a href="#" className="icon"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LearnAI. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
