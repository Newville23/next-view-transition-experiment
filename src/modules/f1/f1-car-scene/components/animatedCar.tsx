"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useParams } from "next/navigation";

type AnimatedCarProps = {
  children: React.ReactNode;
};

export default function AnimatedCar({ children }: AnimatedCarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const params = useParams();
  const routeTeam = params?.team as string | undefined;

  const hasTeam =!!routeTeam;

  const frontPos = useMemo(() => new THREE.Vector3(0, -0.15, -1.5), []);
  const defaultPos = useMemo(() => new THREE.Vector3(-0.01, -0.15, 0), []);
  const v = new THREE.Vector3();

  useFrame(() => {
    if (!groupRef.current) return;
    const target = hasTeam ? frontPos : defaultPos;
    groupRef.current.position.lerp(v.copy(target), 0.1);
  });

  return <group ref={groupRef}>{children}</group>;
}
