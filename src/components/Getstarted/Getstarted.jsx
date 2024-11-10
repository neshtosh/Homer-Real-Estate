import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Getstarted.css';

const Getstarted = () => {
  const ref = useRef(null); // Create a ref using useRef
  const inView = useInView(ref, { once: false }); // Track visibility

  return (
    <motion.section
      ref={ref}
      className="g-wrapper"
      initial={{ opacity: 0, y: 20 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 1.5, ease: 'easeInOut' }} // Adjust duration as needed
    >
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homer</span>
          <span className="secondary">Join us to find your dream home.</span>
          <motion.button
            className="button"
            initial={{ scale: 0.9 }} // Initial scale
            animate={inView ? { scale: 1 } : {}} // Scale-up effect when in view
            transition={{ duration: 0.3 }} // Animation duration
          >
            <a href="mailto:alexgitonga221@gmail.com">Get Started</a>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default Getstarted;
