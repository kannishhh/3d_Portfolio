import { useContext, useEffect, useRef, useState } from "react";
import { StateContext } from "../../context/CameraContext";
import { StyledMain } from "./StyledMain";
import Hero from "../Sections/Hero/Hero";
import About from "../Sections/AboutMe/About";
import Projects from "../Sections/Projects/Project";
import SkillIndex from "../Sections/Skills/SkillIndex";
import Footer from "../Sections/Footer/Footer";
import Experiance from "../Experiance/Experiance";
import SkillsTitles from "../Sections/IntroTitles/Intro";

const Main = () => {
  const { setCurrentSection } = useContext(StateContext);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionNames = ["Hero", "AboutMe", "Skills", "Projects"];

  const MainContainer = useRef(null);
  const sectionRefs = {
    Hero: useRef(undefined),
    AboutMe: useRef(undefined),
    Skills: useRef(undefined),
    Projects: useRef(undefined),
  };

  const handleIntersection = (index, entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentSectionIndex(index);
        setCurrentSection(index + 1);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: MainContainer.current,
      threshold: 0.3,
    };

    const observers = [];

    for (let index = 0; index < sectionNames.length; index++) {
      const sectionName = sectionNames[index];
      const sectionRef = sectionRefs[sectionName].current;

      const observer = new IntersectionObserver((entries) => {
        handleIntersection(index, entries);
      }, observerOptions);

      if (sectionRef) {
        observer.observe(sectionRef);
        observers.push(observer);
      }
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  return (
    <StyledMain>
      <div className="Experiance_container">
        <div className="Experiance">
          <div className="SvgMask">
            <div className="TopMask"></div>
          </div>
          <Experiance />
        </div>
      </div>

      <div className="Content" ref={MainContainer}>
        <Hero ref={sectionRefs.Hero} />
        <SkillsTitles ref={MainContainer} />
        <About ref={sectionRefs.AboutMe} ref2={MainContainer} />
        <SkillIndex ref={sectionRefs.Skills} />
        <Projects ref={sectionRefs.Projects} />

        <Footer />
      </div>
    </StyledMain>
  );
};

export default Main;
