import { useContext } from "react";
import { StyledSkillBox } from "./StyledSkills";
import useSound from "use-sound";
import { CameraAnimate } from "../../Experiance/animations";
import { StateContext } from "../../../context/CameraContext";
import { FaRegPlayCircle } from "react-icons/fa";

function SkillCard({ url, title, animation, is_special }) {
  const { CameraRef, setFocusedSkill } = useContext(StateContext);

  const [HoverSound] = useSound("/Sounds/Hover.mp3", {
    volume: 1.5,
    interrupt: true,
  });

  const HandleSkillFocuse = (skill_name) => {
    if (
      CameraRef &&
      (skill_name === "React js" ||
        skill_name === "Python" ||
        skill_name === "JavaScript" ||
        skill_name === "Firebase" ||
        skill_name === "GSAP" ||
        skill_name === "Gemini" ||
        skill_name === "Styled Components" ||
        skill_name === "TailwindCSS" ||
        skill_name === "Three js" ||
        skill_name === "Redux")
    ) {
      CameraAnimate(
        CameraRef,
        { x: -0.04, y: -0.4, z: 1.5 },
        { x: 0, y: 0, z: 0 }
      );
      setFocusedSkill(title);
    }
  };

  return (
    <StyledSkillBox
      onMouseEnter={() => {
        HoverSound();
      }}
      $animation={animation}
      onClick={() => HandleSkillFocuse(title)}
    >
      {is_special && <FaRegPlayCircle color="white" className="WatchIcon" />}
      <div className="SkillIcon">
        <img src={`./Photos/Icons/${url}`} alt={title} />
      </div>
      <div className="SkillName">
        <span>{title}</span>
      </div>
    </StyledSkillBox>
  );
}

export default SkillCard;
