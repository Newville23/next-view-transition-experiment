"use client"
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import { Lightformer, Float, AccumulativeShadows, RandomizedLight, Environment } from '@react-three/drei';
import F1Car from './components/f1Car';
import CustomShaderMaterial from 'three-custom-shader-material'
import { useParams } from 'next/navigation';


function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef(null);
  const materialRef = useRef<any>(null!);
  
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.position.z += delta * 10;
    if (group.current.position.z > 20) group.current.position.z = -60;
  });


  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <>
      {/* Ceiling */}
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />

      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>

      {/* Sides */}
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />

      {/* Accent (green) */}
      <Float speed={0.2} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="green" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>

      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <CustomShaderMaterial
        ref={materialRef}
        baseMaterial={THREE.MeshStandardMaterial}
        side={THREE.BackSide}
        vertexShader={/* glsl */ `
          varying vec3 vWorldPosition;

          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPosition;
          }
        `}
        fragmentShader={/* glsl */ `
          uniform vec3 uOrigin;
          uniform float uNear;
          uniform float uFar;
          uniform float uTime;

          varying vec3 vWorldPosition;

          void main() {
            float dist = distance(vWorldPosition, uOrigin);
            float t = smoothstep(uNear, uFar, dist);

            vec3 colorA = vec3(0.0, 1.0, 0.6); // #00ff88
            vec3 colorB = vec3(0.0, 0.1, 0.0); // #001a00

            vec3 color = mix(colorA, colorB, t);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
        uniforms={{
          uTime: { value: 0 },
          uOrigin: { value: new THREE.Vector3(0, 0, 0) },
          uNear: { value: 0 },
          uFar: { value: 200 },
        }}
        toneMapped={false}
      />
      </mesh>
    </>
  );
}


function CameraRig({ v = new THREE.Vector3() }) {
  const params = useParams()
  const hasTeam = !!params?.team

  const frontPos = useMemo(() => new THREE.Vector3(4, 1.5, 10), [])

  return useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (hasTeam) {
      // Snap to front-facing position smoothly
      state.camera.position.lerp(v.copy(frontPos), 0.05)
    } else {
      // Animated orbit around the car
      v.set(Math.sin(t / 5), 1.5, 12 + Math.cos(t / 5) / 2)
      state.camera.position.lerp(v, 0.05)
    }

    state.camera.lookAt(0, 0, 0)
  })
}

type AnimatedCarProps = {
  children: ReactNode
}

export function AnimatedCar({ children }: AnimatedCarProps) {
  const params = useParams()
  const hasTeam = !!params?.team

  const ref = useRef<THREE.Group>(null!)

  const frontPos = useMemo(() => new THREE.Vector3(0, -0.15, -1.5), [])
  const defaultPos = useMemo(() => new THREE.Vector3(-0.01, -0.15, 0), [])
  const v = new THREE.Vector3()

  useFrame(() => {
    if (!ref.current) return
    const target = hasTeam ? frontPos : defaultPos
    // Increase the lerp factor for a faster move
    ref.current.position.lerp(v.copy(target), 0.2) // ← was 0.05
  })

  return <group ref={ref}>{children}</group>
}


export default function F1CarScene(){

  const [degraded, degrade] = useState(false);
  const params = useParams()
  const hasTeam = !!params?.team
  
  return(
    <Canvas
    shadows
    camera={{ position: hasTeam ? [4, 1.5, 10] : [25, 1.5, 15], fov: 15 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <spotLight
      position={[0, 15, 0]}
      angle={0.3}
      penumbra={1}
      castShadow
      intensity={2}
      shadow-bias={-0.0001}
    />
    <ambientLight intensity={0.5} />

    <AnimatedCar>
      <F1Car
        scale={1.2}
        rotation={[0, Math.PI / 5, 0]}
      />
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
      blur={20}
    >
      <Lightformers />
    </Environment>
    <CameraRig />
  </Canvas>
  )
}