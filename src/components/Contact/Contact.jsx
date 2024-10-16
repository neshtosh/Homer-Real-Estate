import React, { useEffect, useRef, useState } from 'react'; // Import useRef and useState
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { motion, useInView } from 'framer-motion'; // Import motion and useInView

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // Create a ref using useRef
  const inView = useInView(ref, { once: false }); // Track visibility

  useEffect(() => {
    // Update visibility state based on inView
    setIsVisible(inView); // Set visibility to true or false based on inView
  }, [inView]);

  return (
    <motion.section 
      ref={ref} // Attach ref to the section
      className="c-wrapper"
      initial={{ opacity: 0, y: 20 }} 
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate when in view
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 1.5, ease: 'easeInOut' }} // Adjust duration as needed
    >
      <div className="padding innerWidth flexCenter c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We’re here to welcome you home with care and quality,
            <br />
            making your journey to the perfect place as warm and comfortable as the home itself.
          </span>

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">07xx xxx xxx</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Text</span>
                    <span className="secondaryText">07xx xxx xxx</span>
                  </div>
                </div>
                <div className="flexCenter button">Text Now</div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">07xx xxx xxx</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/* Fourth Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Whatsapp</span>
                    <span className="secondaryText">07xx xxx xxx</span>
                  </div>
                </div>
                <div className="flexCenter button">Whatsapp Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
