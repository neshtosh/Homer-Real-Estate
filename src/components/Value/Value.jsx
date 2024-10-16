import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerwidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* Right Side */}
        <div className="v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            Where Your Dreams Find Their Address.
            <br />
            Building More Than Homes, Building Relationships.
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false}>
            {data.map((item, i) => (
              <AccordionItem className="accordionItem" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordionButton">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 2 }}
                      className="accordionContent"
                    >
                      <p className="secondaryText">{item.detail}</p>
                    </motion.div>
                  </AnimatePresence>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
