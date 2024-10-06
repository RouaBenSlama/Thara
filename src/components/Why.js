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
      <h2>What cause a soloar storm ?</h2>
      <p>The Sun creates a tangled mess of magnetic fields — kind of like a disheveled head of hair after a fitful night of sleep. These magnetic fields get twisted up as the Sun rotates — with its equator rotating faster than its poles.
        <strong>Solar storms typically begin when these twisted magnetic fields on the Sun get contorted and stretched so much that they snap and reconnect (in a process called magnetic reconnection), releasing large amounts of energy.</strong> </p>
    </motion.div>
  );
};

export default Why;
