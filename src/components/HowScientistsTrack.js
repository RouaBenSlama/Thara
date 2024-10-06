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
        Scientists use space weather satellites, such as NASA's Solar Dynamics Observatory, to monitor solar flares and CMEs.
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
