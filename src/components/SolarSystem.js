import React from 'react';
import { Sphere, MeshWobbleMaterial } from '@react-three/drei';

const Sun = ({ showStorm }) => {
  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
      <MeshWobbleMaterial 
        attach="material" 
        color={showStorm ? '#FF4500' : '#FFD700'}
        emissive={showStorm ? '#FF6347' : '#FFA500'} 
        factor={showStorm ? 1 : 0}
        speed={showStorm ? 3 : 0} 
      />
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

const SolarSystem = ({ showStorm }) => {
  return (
    <>
      <Sun showStorm={showStorm} />
      <Earth />
    </>
  );
};

export default SolarSystem;
