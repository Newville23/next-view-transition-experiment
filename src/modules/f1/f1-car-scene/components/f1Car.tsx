'use client';
import { useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

interface F1CarProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function F1Car({ 
  scale = 1, 
  position = [0, 0, 0],
  rotation
}: F1CarProps) {
  const { nodes, materials, scene } = useGLTF('/f1_car.glb');

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone();
  
  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => node instanceof Mesh && (node.receiveShadow = node.castShadow = true))
  },[nodes, materials])

  return (
      <primitive object={clonedScene} position={position} rotation={rotation} scale={scale}/>
  );
}

// Preload the model
useGLTF.preload('/f1_car.glb'); 