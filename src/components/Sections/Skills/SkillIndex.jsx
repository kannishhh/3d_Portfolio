import React, { useContext } from "react";
import { StyledSkills } from "./StyledSkills";
import { StateContext } from "../../../context/CameraContext";
import SkillCard from "./SkillCard";

import Data from "../../../data/SkillsData";

const SkillIndex = React.forwardRef((props, ref) => {
  const { setCurrentSection } = useContext(StateContext);

    const PlayPrev = () => {
      setCurrentSection(5);
    };
  return (
    <StyledSkills ref={ref}>
      <div className="Container">
        <div className="TopFolder">
          <div className="FolderPath">
            <h1>Skills</h1>
            <span>/Portfolio/Skills</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="183.5px"
            height="108.5px"
            className="SvgTopFolder"
          >
            <path
              className="Path"
              fillRule="evenodd"
              stroke="rgba(89, 89, 144, 0.5)"
              strokeWidth="1px"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="rgba(89, 89, 144, 0.1)"
              d="M1.500,105.500 C1.500,105.500 1.500,29.741 1.500,7.543 C1.500,3.732 2.500,2.500 2.500,2.500 C2.500,2.500 3.591,1.500 7.449,1.500 C53.588,1.500 124.500,1.500 124.500,1.500 L181.500,106.500 "
            />
          </svg>
        </div>

        <div className="Content">
          <div className="SkillsContent">
            <div className="SkillsGrid">
              {Data.map((Item, key) => {
                return (
                  <SkillCard
                    key={key}
                    url={Item.url}
                    title={Item.name}
                    $animation={Item.animation}
                    is_special={Item.is_special}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </StyledSkills>
  );
});

export default SkillIndex;
