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

        <h3>What is a solar storm?</h3>
        <p>A solar storm is a sudden explosion of particles, energy, magnetic fields, and material blasted into the solar system by the Sun. These storms can cause beautiful auroras and disrupt satellites, GPS, and power grids on Earth.</p>

        <h3>How are solar flares classified?</h3>
        <p>
          Solar flares are classified according to their intensity, or energy output:
          <br/>
          <strong>A</strong> - the weakest flares, barely noticeable above the Sun’s background radiation<br/>
          <strong>B</strong> - relatively minor, with little impact<br/>
          <strong>C</strong> - small, with few noticeable effects on Earth<br/>
          <strong>M</strong> - moderate, can cause brief radio blackouts<br/>
          <strong>X</strong> - the strongest flares, capable of causing global disruptions<br/>
          <br/>
          Much like the Richter scale for earthquakes, each higher class is a 10-fold increase in energy. So an X flare is 10 times stronger than an M flare and 100 times stronger than a C flare.
        </p>

        <h3>What causes a solar storm?</h3>
        <p>The Sun creates a tangled mess of magnetic fields — kind of like a disheveled head of hair after a fitful night of sleep. These magnetic fields get twisted up as the Sun rotates — with its equator rotating faster than its poles. 
          <br/><br/>
          Solar storms typically begin when these twisted magnetic fields on the Sun get contorted and stretched so much that they snap and reconnect (in a process called <strong>magnetic reconnection</strong>), releasing vast amounts of energy.</p>

        <h3>Why is May 2024 significant?</h3>
        <p>May 2024 marked one of the most intense periods of solar activity in recent history. The Earth experienced the strongest solar storm in two decades, sparking incredible auroras visible in unusual locations like southern U.S. and India, while also posing serious threats to modern technology.</p>

      </motion.div>
  );
};

export default Home;
