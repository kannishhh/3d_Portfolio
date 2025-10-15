import { createContext, useState } from "react";

export const StateContext = createContext({
  CameraPos: null,
  CameraRef: null,
  CanvasRef: null,
  isCameraAnimating: false,
  Start: false,
  CurrentSection: 0,
  LoadingStatus: false,
  FocusedSkill: null,
  setCurrentSection: () => {},
  setCameraRef: () => {},
  SetStart: () => {},
  setCameraPos: () => {},
  setCanvasRef: () => {},
  setCameraAnimating: () => {},
  setLoadingStatus: () => {},
  setFocusedSkill: () => {},
});

export const StateProvider = ({ children }) => {
  const [CurrentSection, setCurrentSection] = useState(1);
  const [Start, SetStart] = useState(false);
  const [CanvasRef, setCanvasRef] = useState();
  const [CameraPos, setCameraPos] = useState();
  const [CameraRef, setCameraRef] = useState();
  const [isCameraAnimating, setCameraAnimating] = useState(false);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [FocusedSkill, setFocusedSkill] = useState(null);

  return (
    <StateContext.Provider
      value={{
        CameraPos,
        CameraRef,
        CanvasRef,
        isCameraAnimating,
        CurrentSection,
        LoadingStatus,
        Start,
        FocusedSkill,
        SetStart,
        setCurrentSection,
        setCameraRef,
        setCameraPos,
        setCanvasRef,
        setCameraAnimating,
        setLoadingStatus,
        setFocusedSkill,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
