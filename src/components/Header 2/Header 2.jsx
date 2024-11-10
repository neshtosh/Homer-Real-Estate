import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion, useInView } from 'framer-motion'; // Import motion and useInView

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const ref = useRef(null); // Create a ref using useRef
  const inView = useInView(ref, { once: false }); // Track visibility

  useEffect(() => {
    setIsVisible(inView); // Set visibility to true or false based on inView
  }, [inView]);

  

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" }; // Menu opens or closes based on state
    }
    return {}; // Return an empty object for larger screens
  };

  return (
    <motion.section
      ref={ref}
      className="h-wrapper"
      initial={{ opacity: 0, y: 20 }} 
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate when in view
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 1.5, ease: 'easeInOut' }} // Adjust duration as needed
    >
      <div className="flexColStart paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={150} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="">Home</a>
            
            <a href="">contact</a>
            <a href="">get started</a>
            
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.section>
  );
};

export default Header;