"use client";

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MathUtils, Group, MeshStandardMaterial } from "three";

export default function Kitten() {
  const motionVal = useMotionValue(0);
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/autumn-kitten/scene.gltf");
  const { camera, gl } = useThree(); // 카메라와 renderer의 domElement에 접근

  const [color, setColor] = useState("#ff0000"); // 초기 색상은 빨간색

  // 재질 변경 함수
  // const changeColor = (color: string) => {
  //   scene.traverse((child) => {
  //     if (child.isMesh) {
  //       const mesh = child as THREE.Mesh;
  //       if (mesh.material) {
  //         (mesh.material as MeshStandardMaterial).color.set(color);
  //       }
  //     }
  //   });
  // };

  // useEffect를 사용하여 색상 변경을 반영
  // useEffect(() => {
  //   changeColor(color);
  // }, [color, scene]);

  useFrame(() => {
    group.current?.rotateY(MathUtils.degToRad(0.2));
  });

  return (
    <>
      <group
        onPointerUp={() => {
          motionVal.set(0);
        }}
        onPointerDown={() => motionVal.set(1)}
        ref={group}
      >
        <primitive object={scene} />
      </group>
      <OrbitControls args={[camera, gl.domElement]} />
      {/* 사용자 인터페이스 - 색상 선택 */}
      <div className="absolute top-5 left-5">
        인풋 태그 들어올 곳
        {/* <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        /> */}
      </div>
    </>
  );
}
