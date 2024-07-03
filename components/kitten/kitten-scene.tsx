"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Kitten from "@/components/kitten/kitten";
import { Center } from "@react-three/drei";

export default function KittenScene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      {/* <directionalLight position={[-5, -5, -5]} intensity={2} /> */}
      <Suspense fallback={null}>
        <Center>
          <Kitten />
        </Center>
      </Suspense>
    </Canvas>
  );
}
