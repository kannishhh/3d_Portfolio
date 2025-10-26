import { useRef, useEffect, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledSkillsTitles } from "./StyledIntroTitles";

gsap.registerPlugin(ScrollTrigger);

const SkillsTitles = forwardRef((props, scrollContainerRef) => {
  const SkillsTexts = useRef(null);

  useEffect(() => {
    const el = SkillsTexts.current;
    const container = scrollContainerRef?.current;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
          scroller: container || window,
        },
        x: "-25%",
        ease: "none",
      });
    }, SkillsTexts);
    return () => ctx.revert();
  }, [scrollContainerRef]);

  return (
    <StyledSkillsTitles>
      <div className="marqueeTrack" ref={SkillsTexts}>
        <div className="marqueeItem">
          <p>Frontend Explorer</p>
          <div className="marqueeDot"></div>
        </div>
        <div className="marqueeItem">
          <p>UI/UX Learner</p>
          <div className="marqueeDot"></div>
        </div>
        <div className="marqueeItem">
          <p>AI & Web Enthusiast</p>
        </div>
      </div>
    </StyledSkillsTitles>
  );
});

export default SkillsTitles;
