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
      To complicate things, solar cycles often overlap. As one cycle transitions to the next, 
      both old and new sunspots emerge on the Sun at once. Sunspots often appear in groups, which are like magnets, 
      each with a positive and negative end. As the Sun’s magnetic field slowly flips, so does the polarity of sunspot groups. 
      Where one cycle’s sunspots drift across the Sun with their positive end in the lead, the next cycle’s spots walk negative foot first. 
      On top of that, sunspots in the Sun’s two hemispheres also have opposite orientations.
      </p>
      <br/>
      <p>
        <h3>Solar Cycle 25</h3>
        For the past eight months, activity on the sun has steadily increased, indicating we transitioned to Solar Cycle 25. 
        Solar Cycle 25 is forecast to be a fairly weak cycle, 
        the same strength as cycle 24. Solar maximum is expected in July 2025, with a peak of 115 sunspots.
      </p>
      <br/><br/>
      <p>
        <h3><strong>Study of topics that are invited to focus</strong></h3>
        - solar activity, including the active regions that generated the solar flares and CMEs
        - solar wind, IMF, and energetic particle observations near the Sun, at 1 AU, and beyond
        - inner magnetosphere response: radiation belts, plasma populations, and magnetic field at geosynchronous distance
        - ionospheric response: plasma bubble, ionospheric irregularities, and impacts on Global 
      </p>
    </motion.div>
  );
};

export default Future;
