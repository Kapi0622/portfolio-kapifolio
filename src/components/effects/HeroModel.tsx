"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import type * as THREE from 'three';
import { useTheme } from '../../contexts/ThemeContext';

function RotatingIcosa({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += dt * 0.25;
      meshRef.current.rotation.y += dt * 0.35;
    }
    if (glowRef.current) {
      glowRef.current.rotation.x -= dt * 0.12;
      glowRef.current.rotation.y -= dt * 0.18;
    }
  });

  return (
    <>
      {/* Wireframe core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color={color} wireframe />
      </mesh>
      {/* Outer translucent shell */}
      <mesh ref={glowRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.2} />
      </mesh>
    </>
  );
}

export default function HeroModel() {
  const { isDark, isClient } = useTheme();
  const [reduced, setReduced] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setSmallScreen(window.innerWidth < 640);
    const on = () => setSmallScreen(window.innerWidth < 640);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

  const color = useMemo(() => (isDark ? '#22D3EE' : '#0369A1'), [isDark]);

  if (!isClient) return null;

  if (reduced || smallScreen) {
    // CSS fallback
    return (
      <div className="relative w-full aspect-square flex items-center justify-center">
        <div
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 opacity-60"
          style={{ borderColor: color, boxShadow: `0 0 40px ${color}66` }}
        />
        <div
          className="absolute w-28 h-28 sm:w-36 sm:h-36 rotate-12 border-2 opacity-70"
          style={{ borderColor: color }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <RotatingIcosa color={color} />
      </Canvas>
    </div>
  );
}
