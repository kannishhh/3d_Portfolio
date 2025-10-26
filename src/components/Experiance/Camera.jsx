import { useContext, useEffect, useRef } from "react";
import { StateContext } from "../../context/CameraContext";
import { PerspectiveCamera } from "@react-three/drei";
import { useResponsive } from "../../utils/IsMobile";

const Camera = () => {
  const { setCameraRef } = useContext(StateContext);
  const cameraRef = useRef(null);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    setCameraRef(cameraRef);
  }, []);

  const getCameraSettings = () => {
    if (isMobile) {
      return {
        position: [0, 0, 3.5],
        fov: 60,
        far: 150,
        near: 0.1
      };
    } else if (isTablet) {
      return {
        position: [0, 0, 4.5],
        fov: 55,
        far: 175,
        near: 0.1
      };
    } else {
      return {
        position: [0, 0, 5.9],
        fov: 50,
        far: 200,
        near: 0.1
      };
    }
  };

  const settings = getCameraSettings();

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      far={settings.far}
      near={settings.near}
      fov={settings.fov}
      position={settings.position}
    />
  );
};

export default Camera;
