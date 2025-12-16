import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

function AnimatedSphere() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
            meshRef.current.rotation.x += 0.001;
        }
    });

    return (
        <Sphere args={[2.5, 32, 32]} ref={meshRef}>
            <meshStandardMaterial
                color="white"
                wireframe
                transparent
                opacity={0.15}
            />
        </Sphere>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 5] }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
}
