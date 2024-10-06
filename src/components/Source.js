import React from 'react';
import { motion } from 'framer-motion';

const Source = () => {
  return (
      <motion.div
          initial={{scale: 0.8}}
          animate={{scale: 1}}
          transition={{duration: 0.5}}
          className="source-details"
      >
        <h2>Sources</h2>
        <a href="https://www.frontiersin.org/research-topics/65596/impacts-of-the-extreme-gannon-geomagnetic-storm-of-may-2024-throughout-the-magnetosphere-ionosphere-thermosphere-system"
           target="_blank" rel="noopener noreferrer">
          Visiter Impacts of the Extreme Gannon Geomagnetic Storm of May 2024
        </a>
        <br/>
        <a href="https://www.nasa.gov/science-research/heliophysics/how-scientists-around-the-world-track-the-solar-cycle/" target="_blank" rel="noopener noreferrer">
          Visiter  How Scientists Around the World Track the Solar Cycle
        </a>
        <br/>
        <a href="https://www.nasa.gov/technology/five-questions-about-space-weather-and-its-effects-on-earth-answered/" target="_blank" rel="noopener noreferrer">
          Visiter  Five Questions About Space Weather and Its Effects on Earth, Answered
        </a>
        <br/>
        <a href="https://science.nasa.gov/science-research/heliophysics/how-nasa-tracked-the-most-intense-solar-storm-in-decades/" target="_blank" rel="noopener noreferrer">
          Visiter How NASA Tracked the Most Intense Solar Storm in Decades
        </a>
        <br/>
        <a href="https://www.esa.int/Space_Safety/Space_weather/The_May_2024_solar_storm_your_questions_answered" target="_blank" rel="noopener noreferrer">
          Visiter ESA (THE EUROPEAN SPACE AGENCY)
        </a>
        <br/>
        <a href="https://science.nasa.gov/sun/solar-storms-and-flares/" target="_blank" rel="noopener noreferrer">
          Visiter Solar Storms and Flares
        </a>
        <a href="https://newherald.news/severe-geomagnetic-storm-watch-p26925-103.htm#gsc.tab=0" target="_blank" rel="noopener noreferrer">
          Visiter Severe Geomagnetic Storm Watch
        </a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
          Visiter Example.com
        </a>

      </motion.div>
  );
};

export default Source;
