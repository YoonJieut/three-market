"use client";

import { useGLTF, useAnimations } from "@react-three/drei";

// 왜 위에다가 선언해주는 걸까?, 그리고 왜 작동되지 않을까
useGLTF("/cube-explosion.glb");

export default function Cube() {
  const { nodes, animations, scene } = useGLTF("/cube-explosion.glb");
  // actions는 트리거다.
  const { actions } = useAnimations(animations, scene);
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
}
