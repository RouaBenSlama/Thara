import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="story"
    >
      <h2>What happened?</h2>
      <p>
        The solar storm of May 2024 was caused by a series of Coronal Mass Ejections (CMEs) from the Sun's surface, leading to widespread disruption of communication systems on Earth.
      </p>
    </motion.div>
  );
};

export default Story;
