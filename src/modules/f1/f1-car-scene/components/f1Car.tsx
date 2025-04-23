'use client';
import { Mesh } from 'three';
import { useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useTeamStore } from "@/shared/stores/teams";
import { F1_TEAMS } from "@/shared/utils/f1-teams";
interface F1CarProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function F1Car({ 
  position = [0, 0, 0],
  rotation
}: F1CarProps) {
  const hoveredTeam = useTeamStore((state) => state.hoveredTeam);
  const modelURL= `/models/${hoveredTeam}.glb`;
    const modelScale = F1_TEAMS.find((team) => team.slug === hoveredTeam)?.scale || 1;
  const { nodes, materials, scene } = useGLTF(modelURL);

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone();
  
  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => node instanceof Mesh && (node.receiveShadow = node.castShadow = true))
  },[nodes, materials])

  return (
      <primitive object={clonedScene} position={position} rotation={rotation} scale={modelScale}/>
  );
}

// Preload the model
useGLTF.preload('/models/ferrari.glb'); 
useGLTF.preload('/models/red-bull-racing.glb'); 
useGLTF.preload('/models/mercedes.glb'); 