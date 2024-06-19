"use client";

import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Cube from "./cube";

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <directionalLight position={[-5, -5, -5]} intensity={2} />
      <Suspense fallback={null}>
        <Center>
          {/* <Model /> 이렇게 모델을 넣어줌*/}
          <Cube />
        </Center>
      </Suspense>
    </Canvas>
  );
}
