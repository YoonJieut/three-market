import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";

const ModelView = ({ index }) => {
  return (
    <View
      index={index}
      className={`border-2 border-blue-500 ${index === 2} ? 'border-red-500`}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => {
          setRotationState(controlRef.current.getAzimuthalAngle());
        }}
      />
      {/* group 자리 */}
    </View>
  );
};
export default ModelView;
