import { useCallback, useContext, useEffect, useRef, useState } from "react";

import { StateContext } from "./context/CameraContext";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Main from "./components/Main/Main";

const App = () => {
  const { setCurrentSection } = useContext(StateContext);
  const [activeSection, setActiveSection] = useState(1);
  const containerRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (containerRef.current !== null) {
      const currentPosition = containerRef.current.scrollTop;
      const sections = containerRef.current.children;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          currentPosition >= sectionTop &&
          currentPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(i + 1);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection, setCurrentSection]);

  return (
    <div className="App">
      <Loader />
      <Main />
    </div>
  );
};

export default App;
