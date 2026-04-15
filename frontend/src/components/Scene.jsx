import { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { Html } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const count = 400;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

    const scale = 1 + Math.sin(time * 0.5) * 0.05;
    pointsRef.current.scale.setScalar(scale);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#50C878"
        transparent
        opacity={0.2}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-6">
        <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <p className="text-white/20 font-sans text-[10px] uppercase tracking-[0.5em]">
          Loading...
        </p>
      </div>
    </Html>
  );
}

export default function Scene({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          shadows
          gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
        >
          {isLoading && <Loader />}
          <Suspense fallback={null}>
            <Particles />
          </Suspense>
        </Canvas>
      </div>
      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
