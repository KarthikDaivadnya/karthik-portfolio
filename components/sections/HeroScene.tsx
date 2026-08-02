"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 340;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02 + state.mouse.x * 0.3;
    ref.current.rotation.x = state.mouse.y * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#6C63FF" size={0.035} transparent opacity={0.75} />
    </points>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = t * 0.08;
  });
  return (
    <mesh ref={ref} position={[1.4, 0, 0]}>
      <icosahedronGeometry args={[1.1, 2]} />
      <meshBasicMaterial color="#00F5D4" wireframe transparent opacity={0.4} />
    </mesh>
  );
}

/**
 * Interactive 3D hero scene — a drifting particle field plus a wireframe
 * icosahedron "core", both reacting to cursor position. Kept intentionally
 * lightweight (no textures/lighting) to protect Lighthouse performance scores.
 */
export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <Particles />
      <Core />
    </Canvas>
  );
}
