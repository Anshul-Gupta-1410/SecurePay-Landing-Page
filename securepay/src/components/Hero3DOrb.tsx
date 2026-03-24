"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function Orb() {
  return (
    <Sphere visible args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial 
        color="#111111" 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Hero3DOrb() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center">
      <Suspense fallback={
        <div className="w-48 h-48 rounded-full bg-primary/20 animate-pulse blur-xl" />
      }>
        <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full pointer-events-none">
          <ambientLight intensity={0.5} />
          {/* Internal Radiance Effect */}
          <pointLight position={[0, 0, 2]} color="#00D1FF" intensity={50} distance={10} decay={2} />
          <pointLight position={[-3, 3, -3]} color="#7000FF" intensity={30} distance={15} decay={2} />
          <Orb />
        </Canvas>
      </Suspense>
    </div>
  );
}
