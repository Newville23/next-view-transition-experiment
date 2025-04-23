import { useRef } from "react";
import { Float, Lightformer } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import CustomShaderMaterial from "three-custom-shader-material";
import * as THREE from "three";

export default function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef<THREE.Group>(null!);

  // Assume it's a ShaderMaterial with a uTime uniform
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  // Move group along z-axis
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.position.z += delta * 10;
    if (group.current.position.z > 20) group.current.position.z = -60;
  });

  // Update shader time
  useFrame((state) => {
    if (materialRef.current?.uniforms?.uTime) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <>
      {/* Ceiling */}
      <Lightformer
        intensity={0.75}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />

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
      <Lightformer
        intensity={40}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer

        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />

      {/* Accent (green) */}
      <Float speed={0.2} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="green"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>

      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <CustomShaderMaterial
        // @ts-expect-error: ShaderMaterial does not have 'update', but works with CustomShaderMaterial
          ref={materialRef}
          baseMaterial={THREE.MeshStandardMaterial}
          side={THREE.BackSide}
          vertexShader={
            /* glsl */ `
          varying vec3 vWorldPosition;

          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPosition;
          }
        `
          }
          fragmentShader={
            /* glsl */ `
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
        `
          }
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