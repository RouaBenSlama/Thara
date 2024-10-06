import React from 'react';
import { motion } from 'framer-motion';

const Future = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="future"
    >
      <h2>Future</h2>
      <p>
        As we approach the solar maximum, more solar storms are expected. These events will likely become more frequent and intense, posing challenges for global communications and technology.
      </p>
    </motion.div>
  );
};

export default Future;
