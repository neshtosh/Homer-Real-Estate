import React from 'react';
import './companies.css';
import { motion, useInView } from 'framer-motion';

const Companies = () => {
  const ref = React.useRef(null); // Create a ref for the section
  const inView = useInView(ref, { once: false }); // Track visibility

  return (
    <motion.section 
      ref={ref} // Attach ref to the section
      className="c-wrapper"
      initial={{ opacity: 0, y: 20 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Adjust duration as needed
    >
      <div className="paddings innerWidth flexCenter c-container">
        {/* Animate each image */}
        {['prologis.png', 'tower.png', 'equinix.png', 'realty.png'].map((image, index) => (
          <motion.img
            key={image}
            src={`./${image}`} 
            alt={image.split('.')[0]} 
            initial={{ opacity: 0, y: 20 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered effect
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Companies;
