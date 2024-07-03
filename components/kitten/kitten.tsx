"use client";

import { useAnimations, useGLTF } from "@react-three/drei";

export default function Kitten() {
  const { nodes, animations, scene } = useGLTF("/autumn-kitten/scene.gltf");
  const { actions } = useAnimations(animations, scene);
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
}
