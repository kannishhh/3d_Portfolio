import { Suspense, useRef } from "react";
import { StyledExperiance } from "./ExperianceStyled";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Room from "./Room";

const Experiance = () => {
  const CanvasRef = useRef(undefined);

  return (
    <StyledExperiance>
      <Canvas className="Canvas" flat ref={CanvasRef}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Camera />
          <Room />
        </Suspense>
      </Canvas>
    </StyledExperiance>
  );
};

export default Experiance;
