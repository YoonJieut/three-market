import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const TestModel = () => {
  // 카메라 컨트롤
  const cameraControl = useRef();
  // 모델
  const group = useRef(new THREE.Group());
  // rotation 값
  const [rotation, setRotation] = useState(0);
  return (
    <section>
      <h1>test 모델입니다.</h1>

      <Canvas
        className="w-full h-full"
        // eventSource={document.getElementById("root")}
      >
        <View.Port />
      </Canvas>
    </section>
  );
};
