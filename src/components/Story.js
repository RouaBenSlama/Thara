import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
      <motion.div
          initial={{x: -200}}
          animate={{x: 0}}
          transition={{type: "spring", stiffness: 50}}
          className="story"
      >
        <h2>What happened?</h2>
        <p>
          May 2024 has already shown itself to be one of the most stormy months for our Sun.
          Our planet experienced the largest solar storm ever in over 20 years, which swept
          over during the first full week of May as the Sun's activity intensifies towards the peak of its current solar
          cycle.
          Late on May 7, two strong solar flares sparked the first signs of the solar storm.
        </p>
        <p>
          From May 7 – 11, a barrage of large solar flares and coronal mass ejections (CMEs)
          launched clouds of charged particles and magnetic fields toward Earth, creating the
          strongest solar storm to reach Earth in two decades
          — and possibly one of the strongest displays of auroras on record in the past 500 years.
        </p>
        <p>
          At unusually low latitudes, such as those in southern U.S. and northern India, Auroras were visible.
          The most powerful type of flares during this period was the X-class, with eight being the most powerful
          and reaching a peak rating of X5.8. Numerous large flares have been released by the same solar region since
          then,
          including a X8.7 flare, which is the most powerful flare seen this solar cycle, on May 14.
        </p>
      </motion.div>
  );
};

export default Story;
