import React from 'react';
import { motion } from 'framer-motion';

const Source = () => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="why"
    >
      <h2>Source</h2>
      <p>
        URL
      </p>
    </motion.div>
  );
};

export default Source;
