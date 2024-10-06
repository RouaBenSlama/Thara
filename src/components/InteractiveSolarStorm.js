import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Sun = () => {
  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial attach="material" color="#FFD700" emissive="#FFA500" />
    </Sphere>
  );
};

const Earth = () => {
  return (
    <Sphere args={[0.3, 32, 32]} position={[3, 0, 0]}>
      <meshStandardMaterial attach="material" color="#1E90FF" />
    </Sphere>
  );
};

const SolarSystem = () => {
  return (
    <Canvas style={{ height: '500px', width: '100%' }} camera={{ fov: 50, position: [5, 2, 5] }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Sun />
      <Earth />
      <OrbitControls />
    </Canvas>
  );
};

const InteractiveSolarStorm = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Explore the May 2024 Solar Storm</h2>
      <SolarSystem />
      <p style={{ maxWidth: '800px', margin: '20px auto' }}>
        May 2024 has already shown itself to be one of the most stormy months for our Sun.
        Our planet experienced the largest solar storm in over 20 years, impacting satellites and creating stunning auroras.
        Use the mouse to rotate the view and learn about the relationship between the Sun and Earth!
      </p>
    </div>
  );
};

export default InteractiveSolarStorm;
