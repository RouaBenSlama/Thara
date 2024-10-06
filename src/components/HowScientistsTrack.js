import React from 'react';
import { motion } from 'framer-motion';
import drawingImage from './04_drawings.webp';

const HowScientistsTrack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="how-scientists-track-section"
    >
      <h2>How Scientists Track Solar Storms</h2>
      <p>
      Tucked in the San Gabriel Mountains, about an hour’s drive north from Los Angeles, 
      the Mount Wilson Observatory has long been a home for space science — it’s Padilla’s home too, 
      one of the perks to his work as Mount Wilson’s Sun observer. Mount Wilson has several solar system sentinels; 
      the telescope perched at the top of this tower keeps constant watch on the Sun. Observers study the Sun closely, 
      so we can better understand the life and activity of our star.
      </p>
      <p>Space weather is closely observed by several agencies. For space weather forecasts, 
        the U.S. government uses NOAA's Space Weather Prediction Center as an official resource. NOAA, 
        the National Science Foundation, and the United States are all involved in research efforts coordinated by NASA Heliophysics. 
        Geological Survey and the U.S. have collaborated. The Air Force Research Laboratory is responsible for developing 
        the National Space Weather Strategy and Action Plan. A fleet of scientific observatories is maintained by NASA Heliophysics 
        to observe solar eruptions and space weather that is directed towards the Earth.
        </p>
      <img
        src={drawingImage}
        alt="Tracking Solar Storms"
        className="infographic"
      />
    </motion.div>
  );
};

export default HowScientistsTrack;
