import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import SolarStormGraph from './SolarStormGraph';
import SolarSystem from './SolarSystem';

const InteractiveSolarStorm = () => {
  const [showStorm, setShowStorm] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '20px', background: '#181818', color: 'white' }}>
      <h2>Explore the May 2024 Solar Storm</h2>
      <button 
        onClick={() => setShowStorm(!showStorm)} 
        style={{ 
          margin: '20px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          borderRadius: '5px', 
          border: 'none', 
          background: '#61dafb', 
          color: 'white', 
          cursor: 'pointer',
          transition: 'background 0.3s'
        }}
      >
        {showStorm ? 'Stop Solar Storm' : 'Trigger Solar Storm'}
      </button>

      {showStorm && <SolarStormGraph />}

      <p style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'justify' }}>
        May 2024 marked one of the most intense periods of solar activity in recent history. The Earth experienced the largest solar storm in over two decades, affecting satellites and creating stunning auroras in unusual locations. Use the controls to rotate and zoom in to explore how solar storms impact our planet!
      </p>

      <div style={{ marginTop: '20px' }}>
        <Canvas style={{ height: '500px', width: '100%' }} camera={{ fov: 50, position: [5, 2, 5] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <Stars />
          <SolarSystem showStorm={showStorm} />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default InteractiveSolarStorm;
