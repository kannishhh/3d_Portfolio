import { useContext, useEffect, useRef } from "react";
import { StateContext } from "../../context/CameraContext";
import { PerspectiveCamera } from "@react-three/drei";
import IsMobile from "../../utils/IsMobile";

const Camera = () => {
  const { setCameraRef } = useContext(StateContext);
  const cameraRef = useRef(null);
  const isMobileDevie = IsMobile();

  useEffect(() => {
    setCameraRef(cameraRef);
  }, []);
  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      far={200}
      near={0.1}
      fov={50}
      position={[0, 0, isMobileDevie ? 3.9 : 5.9]}
    />
  );
};

export default Camera;
