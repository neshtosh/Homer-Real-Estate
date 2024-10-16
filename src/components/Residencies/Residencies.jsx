import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'; // For default styles
import 'swiper/css/navigation'; // If you're using navigation module
import 'swiper/css/pagination'; // If you're using pagination module
import { motion } from 'framer-motion'; // Import motion
import './Residencies.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="padding innerwidth r-container">
        <div className="r-head felColStart">
          <span>Best Choices</span>
          <span>Popular Residencies</span>
        </div>

        {/* Swiper with navigation enabled */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          {...sliderSettings}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <motion.div
              
                className="flexColStart r-card"
                initial={{ opacity: 0, scale: 0.9 }} // Initial state
                animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale
                exit={{ opacity: 0, scale: 0.9 }} // Animate out
                transition={{ duration: 1.5 }} // Adjust duration as needed
              >
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;
