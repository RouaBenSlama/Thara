import React from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="impact"
    >
      <h2>Impact</h2>
      <p>
        The solar storm disrupted communication systems, GPS satellites, and power grids in many regions. It also caused spectacular auroras, visible even at lower latitudes.
      </p>
    </motion.div>
  );
};

export default Impact;
