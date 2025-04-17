'use client';
import { useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

interface F1CarProps {
  color?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function F1Car({ 
  color = '#ffffff', 
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

  // Apply the team color to all meshes in the scene
  clonedScene.traverse((child) => {
    if (child instanceof Mesh && child.material) {
      // Create a new material with the team color
      const newMaterial = new MeshStandardMaterial({
        color: color,
        metalness: 0.8,
        roughness: 0.2,
      });
      //child.material = newMaterial;
    }
  });
  

  return (
      <primitive object={clonedScene} position={position} rotation={rotation} scale={scale}/>
  );
}

// Preload the model
useGLTF.preload('/f1_car.glb'); 