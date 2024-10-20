import React from 'react';
import '../style.css'; 
import { motion } from 'framer-motion';

const Page2 = () => {
  return (
    <div id='page2'>
      <video autoPlay muted loop>
        <source src="/earthBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div id="center">
        <motion.div
          id='joinDiv'
          initial={{ opacity: 0, x: -200 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
        >
          Join Us
        </motion.div>
        <motion.div
          className="text-item"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          viewport={{ once: true }} 
        >
          Revolutionize
        </motion.div>
        <motion.div
          className="text-item"
          initial={{ opacity: 0, x: -200 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }} 
          viewport={{ once: true }} 
        >
          Education
        </motion.div>
        <motion.div
          className="text-item"
          initial={{ opacity: 0, x: -200 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }} 
          viewport={{ once: true }} 
        >
          With AI
        </motion.div>
      </div>
    </div>
  );
};

export default Page2;
