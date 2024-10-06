import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="home"
    >
      <h2>Welcome to the May 2024 Solar Storm Event</h2>
      <p>
        In May 2024, a significant solar storm impacted Earth, affecting communications and satellite systems globally. Explore the different aspects of this cosmic event through the sections below.
      </p>
    </motion.div>
  );
};

export default Home;
