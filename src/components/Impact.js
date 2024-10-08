import React from 'react';
import { motion } from 'framer-motion';
import captureImage from './Capture.PNG';
import captureImage2 from './80331043-0-image-a-56_1705963981914.avif';
const Impact = () => {
  return (
      <motion.div
          initial={{x: 300}}
          animate={{x: 0}}
          transition={{type: "spring", stiffness: 70}}
          className="impact"
      >
        <br/><br/><br/><br/>
        <img
            src={captureImage} alt="Capture"
            className="impactImage"
        />
        <div style={{marginLeft: '20px'}}>
          <h2>Impact</h2>
          <p style={{textAlign: 'left'}}>
            The solar region that caused the recent stormy weather is now rotating around the backside of the Sun,
            preventing its effects from reaching Earth. However, that doesn’t mean the storm is over.
            NASA’s Solar TErrestrial RElations Observatory (STEREO), currently located at about 12 degrees ahead of
            Earth
            in its orbit,
            will continue watching the active region an additional day after it is no longer visible from Earth.
          </p>
        </div>
        <br/><br/><br/><br/><br/>
        <div className="radio-storm-section">
        <div className="impactP2">
          <h3 style={{textAlign: 'left'}}>
            The Sun's surface explosion can affect the Earth in three main ways
          </h3>
            <h3>Radio blackout storm</h3>
            <p>
            <p>This type of storm, generated by electromagnetic energy
              – light, mostly in wavelengths that are invisible to human eyes
              – is most likely to occur following a solar flare.The effects of this type of event are almost
              immediate because the sun only takes eight minutes to reach Earth.</p>

            <p>The disruption of Earth's upper atmosphere, where communication signals travel, is caused by the
              electromagnetic energy
              released in flares and can lead to signal blackouts. Emergency communications, such as directing
              people during an earthquake or hurricane, are often used during a radio blackout, making it a risk.
              In the event that a solar storm coincides with a natural disaster, radio communication is crucial to
              keeping
              people safe.</p>

            <p>In September 2017, Hurricane Irma caused this to happen. Halford asserts that prompt notification of
              operators
              can allow them to switch radio frequencies and avoid an outage.</p>
          </p>
        </div>
        <img
            src={captureImage2} alt="Capture"
            className="impactImage3"
        />
        </div>

        <div className="impactP3">
            <h3>Solar radiation storm</h3>
          <p>
            Small and fast-moving charged particles are emitted by a solar storm. Due to their fast speed,
            these particles have a lot of energy and can break through the magnetosphere, which puts astronauts
            and spacecraft in the Earth's orbit at risk. The radiation impact may be avoided by turning off sensitive
            systems in satellites and instructing astronauts to build shelters or move to better shielded sections
            within
            their spacecraft.
            Halford makes a comparison between it and hiding in a basement during a tornado.
          </p>
        </div>
        <br/><br/><br/><br/>

        <div className="geomagnetic-storm-section">
        <div className="impactP4">
          <h3>Geomagnetic storm</h3>
          <p>
            Giant clouds of plasma called CMEs can reach Earth's orbit and compress the magnetosphere in one to
            three days after a solar eruption. Several significant electrical systems on Earth's surface, including
            power grids, can be influenced by the influx of charged particles and electromagnetic fields rippling
            through
            Earth's magnetosphere. The occurrence of major blackouts caused by geomagnetic storms happened in 1989 and
            2003.
            In many countries, including the United States,
            Halford and Pulkkinen stated that there are measures in place to reduce the chances of this happening again.
          </p>
        </div>
        <img
            src="https://windy.app//storage/posts/June2022/geomagnetic-storm-windyapp.jpg" alt="Capture"
            className="impactImage3"
        />
        </div>
      </motion.div>
  );
};

export default Impact;
