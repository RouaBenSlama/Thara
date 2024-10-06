import React from 'react';
import { motion } from 'framer-motion';

const Why = () => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="why"
    >
      <h2>Why did it happen?</h2>
      <p>
        Solar storms occur due to the Sun's magnetic activity, where magnetic fields release energy in the form of solar flares and coronal mass ejections (CMEs). These events are particularly intense during periods of high solar activity.
      </p>
    </motion.div>
  );
};

export default Why;
