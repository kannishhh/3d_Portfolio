import styled from "styled-components";
import Data from "../../../data/SkillsData";

import useSound from "use-sound";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const WorkCard = ({ text, Cover, techs, Repo, demo, lightbg }) => {
  const [HoverSound] = useSound("/Sounds/Hover.mp3", { volume: 1.5 });
  return (
    <StyledCard
      onMouseEnter={() => {
        HoverSound();
      }}
      $Bg={Cover}
      $LightBg={lightbg}
      $TechCount={techs.length}
    >
      <div className="LeftCard"></div>

      <div className="RightCard">
        <div className="TitleHolder">
          <h1>{text}</h1>
        </div>

        <div className="TechsList">
          {techs.map((Tech, key) => {
            return (
              <img
                key={key}
                alt={Tech}
                title={Tech}
                className="ItemIcon"
                src={`/Photos/Icons/${
                  Data.find((item) => item.name === Tech).url
                }`}
              />
            );
          })}
        </div>

        <div className="SrcIcons">
          {/* <a className="ALink" href={demo ? demo : ""} target={"_blank"}>
            <FaExternalLinkAlt className="Icon" size={18} />
          </a> */}
          <a className="ALink" href={Repo ? Repo : ""} target={"_blank"}>
            <FaGithubSquare className="Icon" size={19} />
          </a>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  flex: 1;
  height: 80%;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(16, 16, 26, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.2s ease-in-out;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    height: 230px;
  }

  &:hover {
    box-shadow: 0 2px 22px 0 rgba(129, 132, 210, 0.17);
  }
  .LeftCard {
    width: 40%;
    height: 100%;
    background-color: white;
    background-image: ${(props) =>
      `url("/Photos/Portfolio/Preview/Edit${props.$Bg}.webp")`};
    background-position: center;
    background-size: cover;
    z-index: 1;
    position: relative;

    @media (max-width: 768px) {
      height: auto;
    }

    ${(props) =>
      props.$LightBg &&
      `
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--MainColor2);
        mix-blend-mode: color;
      }
    `}
  }
  .RightCard {
    height: 100%;
    width: 60%;
    font-family: var(--font-primary);
    display: flex;
    flex-direction: column;
    z-index: 2;

    @media (max-width: 768px) {
      padding-top: 25px;
    }

    display: flex;
    color: var(--MainColor2);
    .TitleHolder {
      height: 79%;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        transform: translateX(-20px);
        font-size: 2.5rem;
        @media (max-width: 768px) {
          font-size: 1.8rem;
        }
      }
    }

    .TechsList {
      width: ${(props) => {
        const iconWidth = 40;
        const gap = 2;
        const padding = 10;
        const totalWidth =
          props.$TechCount * iconWidth + (props.$TechCount - 2) * gap + padding;
        return `${Math.min(totalWidth, 250)}px`;
      }};
      min-width: 80px;
      height: 50px;
      z-index: 3;
      transform: translate(-15px, -10px);
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 0.03);
      background: rgba(16, 16, 26, 0.25);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;
      @media (max-width: 768px) {
        transform: translate(-10px, 0px);
      }
      .ItemIcon {
        height: 70%;
        width: auto;
        cursor: pointer;
        opacity: 0.7;
        transition: 0.2s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .SrcIcons {
    position: absolute;
    top: 6px;
    right: 6px;
    display: flex;
    gap: 2px;
    .ALink {
      color: var(--MainColor2);
    }
    .Icon {
      opacity: 0.5;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default WorkCard;
