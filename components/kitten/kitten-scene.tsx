"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Kitten from "@/components/kitten/kitten";
import { Center } from "@react-three/drei";

export default function KittenScene() {
  return (
    // * antialias: 부드럽게 렌더링
    // * dpr: 렌더링 해상도
    <div className="w-1/2 h-full outline outline-red-100">
      <Canvas
        gl={{
          antialias: true, // 부드럽게 렌더링
          alpha: true, // 배경 투명 설정
        }}
        dpr={[1, 1.5]}
      >
        {/* <directionalLight position={[-5, -5, -5]} intensity={2} /> */}
        <Suspense fallback={null}>
          <Center>
            <Kitten />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}
