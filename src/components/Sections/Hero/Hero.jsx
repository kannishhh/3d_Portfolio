import { forwardRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { StyledHero } from "./StyledHero";

const Hero = forwardRef((props, ref) => {
  const ForwardToLinkedin = () => {
    window.open("https://www.linkedin.com/in/kanishkainth/");
  };
  return (
    <StyledHero ref={ref} {...props}>
      <div>
        <div className="Title">
          <h1>
            Hi, My name is <br /> KANISH KAINTH
          </h1>
          <h2>I love creating beautiful user experiences.</h2>
        </div>

        <button className="GetInTouch" onClick={ForwardToLinkedin}>
          <span>Get In Touch</span>
          <FaArrowRight className="ArrowIcon" />
        </button>
      </div>
    </StyledHero>
  );
});

export default Hero;
