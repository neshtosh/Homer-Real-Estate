import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // Create a ref using useRef
  const inView = useInView(ref, { once: false }); // Track visibility

  useEffect(() => {
    // Update visibility state based on inView
    setIsVisible(inView); // Set visibility to true or false based on inView
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      className="f-wrapper"
      initial={{ opacity: 0, y: 20 }} 
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 1.5, ease: 'easeInOut' }} // Adjust duration as needed
    >
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Homes that feel like havens. <br />
            Finding your perfect place.
          </span>
        </div>

        {/* Right Side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">123 Nairobi, 45 NYRI, KRT</span>
          <div className="flexCenter f-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
