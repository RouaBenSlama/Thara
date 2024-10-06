import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1.5}}
          className="home"
      >
        <h2>Welcome to the May 2024 Solar Storm Event</h2>
        <h3>What is a solar storm ?</h3>
        <p>A solar storm is a sudden explosion of particles, energy, magnetic fields,
          and material blasted into the solar system by the Sun.</p>
        <h3>classified according to their intensity, or energy output.</h3>
        <p>
          <strong>A</strong> - the weakest flares, barely noticeable above the Sun’s background radiation<br/>
          <strong>B</strong><br/>
          <strong>C</strong><br/>
          <strong>M</strong><br/>
          <strong>X</strong> - the strongest flares<br/><br/>
          Much like the Richter scale for earthquakes, each higher class is a 10-fold increase in energy.
          So an X flare is 10 times stronger than an M flare and 100 times stronger than a C.
        </p>
        <h3></h3>
        <p></p>
      </motion.div>
  );
};

export default Home;
