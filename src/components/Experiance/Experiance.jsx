import { Suspense, useRef } from "react";
import { StyledExperiance } from "./ExperianceStyled";
import { Canvas } from "@react-three/fiber";
import { useResponsive } from "../../utils/IsMobile";
import Camera from "./Camera";
import Room from "./Room";

const Experiance = () => {
  const CanvasRef = useRef(undefined);
  const { isMobile, isTablet } = useResponsive();

  const getCanvasSettings = () => {
    if (isMobile) {
      return {
        dpr: [1, 1.5],
        performance: { min: 0.5 },
        gl: {
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        },
      };
    } else if (isTablet) {
      return {
        dpr: [1, 2],
        performance: { min: 0.7 },
        gl: {
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        },
      };
    } else {
      return {
        dpr: [1, 2],
        performance: { min: 0.8 },
        gl: {
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        },
      };
    }
  };

  const canvasSettings = getCanvasSettings();

  return (
    <StyledExperiance>
      <Canvas
        className="Canvas"
        flat
        ref={CanvasRef}
        dpr={canvasSettings.dpr}
        performance={canvasSettings.performance}
        gl={canvasSettings.gl}
        camera={false} 
      >
        <Suspense fallback={null}>
          {isMobile ? (
            <>
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 10]} intensity={0.8} />
            </>
          ) : (
            <>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <directionalLight position={[-10, -10, -10]} intensity={0.3} />
            </>
          )}
          <Camera />
          <Room />
        </Suspense>
      </Canvas>
    </StyledExperiance>
  );
};

export default Experiance;
