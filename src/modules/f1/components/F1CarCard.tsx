'use client';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { F1Team } from '@/shared/utils/f1-teams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import F1Car from '../f1-car-scene/components/f1Car';

interface F1CarCardProps {
  team: F1Team;
}

export default function F1CarCard({ team }: F1CarCardProps) {
  return (
    <Link href={`/3d/f1/${team.slug}`} className="block">
      <ViewTransition name={`car-${team.id}`}>
        <div className="bg-black rounded-none overflow-hidden shadow-lg transition-transform hover:scale-105 border-t-4" 
             style={{ borderTopColor: team.color }}>
          <div className="h-64 relative">
            <Canvas camera={{ position: [0, 0.5, 2.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <F1Car color={team.color} position={[0, 0, 0]} />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
          <div className="p-4">
            <ViewTransition name={`title-${team.id}`}>
              <h3 className="text-xl font-bold uppercase tracking-wider" 
                  style={{ color: team.color }}>{team.name}</h3>
            </ViewTransition>
            <div className="mt-2 flex items-center">
              <span className="text-xs text-gray-400 uppercase tracking-widest">Founded: {team.founded}</span>
              <span className="mx-2 text-gray-600">|</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Championships: {team.championships}</span>
            </div>
          </div>
        </div>
      </ViewTransition>
    </Link>
  );
} 