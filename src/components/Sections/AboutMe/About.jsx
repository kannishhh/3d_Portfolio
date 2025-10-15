import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { StyledAboutMe } from "./StyledAbout";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = React.forwardRef((props, ref) => {
  const { ref2 } = props;
  const SpinRef = useRef(null);
  const HeaderContainerImg = useRef(null);

  useEffect(() => {
    const el = SpinRef.current;

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        scroller: ref2.current,
      },
      rotation: 360,
      ease: "none",
    });
  }, [ref2]);
  return (
    <StyledAboutMe ref={ref}>
      <div className="Intro">
        <h1 className="Title">About Me</h1>
        <img className="IntroPhoto" src={"Photos/Profile.jpg"} />
        <span className="IntroText">
          Hi there! <br /> I’m a Frontend Developer passionate about building
          sleek, user-friendly web applications. I enjoy working with modern
          technologies to create seamless digital experiences that combine
          functionality with great design.
        </span>

        <div className="SocialIcons">
          <a href="https://github.com/kannishhh" target={"_blank"}>
            <FaGithubSquare className="Icon" size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kanishkainth/" target={"_blank"}>
            <FaLinkedin className="Icon" size={20} />
          </a>
        </div>
        <div className="IconHolder">
          <img
            width="180px"
            height="180px"
            src={"./Photos/SpinText.png"}
            className="spinText"
            ref={SpinRef}
            title="Kanish Kainth logo"
            alt="Kanish Kainth logo"
          />
          <svg
            className="icon"
            viewBox="0 0 24 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 24V0L0 24H8V48L24 24H16Z" />
          </svg>
        </div>
      </div>
    </StyledAboutMe>
  );
});

export default About;
