"use client";

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { AnimationAction, MathUtils, Group } from "three";

export default function Kitten() {
  const motionVal = useMotionValue(0);
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/autumn-kitten/scene.gltf");
  const { camera, gl } = useThree(); // 카메라와 renderer의 domElement에 접근

  // const spring = useSpring(motionVal, { stiffness: 20, damping: 1 });
  // const { actions } = useAnimations(scene.animations, scene);

  useFrame(() => {
    group.current?.rotateY(MathUtils.degToRad(0.2));

    // action 파일이 있을때 활용할 것
    // Object.keys(actions).forEach((key) => {
    //   const action = actions[key] as AnimationAction;
    //   action.play();
    //   action.paused = true;
    //   action.time = spring.get();
    // });
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
    </>
  );
}
