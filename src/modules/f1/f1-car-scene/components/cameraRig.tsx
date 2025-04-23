"use client";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useParams } from "next/navigation";

export default function CameraRig() {
  const v = useRef(new THREE.Vector3());
  const params = useParams();
  const routeTeam = params?.team as string | undefined;

  const hasTeam = !!routeTeam;

  const defaultPosition = useMemo(() => new THREE.Vector3(25, 1.5, 15), []);
  const frontPosition = useMemo(() => new THREE.Vector3(4, 1.5, 10), []);

  return useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const targetPos = hasTeam ? frontPosition : defaultPosition;
    if (hasTeam) {
      // Snap to front-facing position smoothly
      state.camera.position.lerp(v.current.copy(targetPos), 0.08);
    } else {
      // Animated orbit around the car
      v.current.set(Math.sin(t / 5), 1.5, 12 + Math.cos(t / 5) / 2);
      state.camera.position.lerp(v.current, 0.08);
    }

    state.camera.lookAt(0, 0, 0);
  });
}
