import { View } from "@react-three/drei";

const ModelView = ({
  index,
  groupRef,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View index={index}>
      {/* 엠비언트 라이트 */}
      <ambientLight intensity={0.3} />
      {/* 퍼스펙티브 카메라  */}
      makeDefault position={[0, 0, 10]}
      ref={controlRef}
      {/* // controls={controlRef} */}
    </View>
  );
};
export default ModelView;
