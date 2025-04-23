"use client";
import { useParams } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import {
  AccumulativeShadows,
  RandomizedLight,
  Environment,
} from "@react-three/drei";
import Lightformers from "./components/lightFormers";
import F1Car from "./components/f1Car";
import CameraRig from "./components/cameraRig";
import AnimatedCar from "./components/animatedCar";


export default function F1CarScene() {
  const [degraded] = useState(false);
  const params = useParams();
  const hasTeam = !!params?.team;
  return (
    <Canvas
      shadows
      camera={{ position: hasTeam ? [4, 1.5, 10] : [25, 1.5, 15], fov: 15 }}
      style={{
        background: "transparent",
      }}
      gl={{ alpha: true, preserveDrawingBuffer: true }}
    >
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.7} />

      <AnimatedCar>
        <F1Car rotation={[0, Math.PI / 5, 0]} />
      </AnimatedCar>
      <AccumulativeShadows
        position={[0, -0.15, 0]}
        frames={100}
        alphaTest={0.4}
        scale={10}
      >
        <RandomizedLight
          amount={8}
          radius={5}
          ambient={0.5}
          position={[1, -10, -1]}
        />
      </AccumulativeShadows>
      <Environment
        frames={degraded ? 1 : Infinity}
        resolution={256}
        background
        blur={2}
      >
        <Lightformers />
      </Environment>
      <CameraRig />
    </Canvas>
  );
}
