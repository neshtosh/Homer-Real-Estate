import React from 'react';
import Hero from '../Hero/Hero';
import Companies from '../companies/Companies';
import Residencies from '../Residencies/Residencies';
import Value from '../Value/Value';
import Contact from '../Contact/Contact';
import Getstarted from '../Getstarted/Getstarted';
import './Homepage.css';

const HomePage = () => {
  return (
    <>
      <div className="background-wrapper">
        <div className="overlay-content">
          
        
          <Hero />
        </div>
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Getstarted />
    </>
  );
};

export default HomePage;
