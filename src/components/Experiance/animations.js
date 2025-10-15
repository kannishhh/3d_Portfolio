import { gsap } from "gsap";

export const CameraAnimate = (CameraRef, EndPos, EndRot) => {
  const cameraAnimation = gsap.timeline();
  cameraAnimation
    .to(CameraRef.current.position, {
      duration: 2.5,
      x: EndPos.x,
      y: EndPos.y,
      z: EndPos.z,
      ease: "power4.inOut",
    })  
    .to(
      CameraRef.current.rotation,
      {
        duration: 2.5,
        y: EndRot.y,
        ease: "power4.inOut",
      },
      0
    );

  cameraAnimation.play();
};

export const FullScreenAnimation = () => {};
