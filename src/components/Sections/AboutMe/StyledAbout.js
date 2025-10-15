import styled from "styled-components";

export const StyledAboutMe = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  padding: 13% 40px;

  @media (max-width: 768px) {
    padding: 0px 10px;
  }

  .Intro {
    width: 100%;
    height: 450px;
    border-radius: 10px;
    display: flex;
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(140, 140, 194, 0.1) 0%,
      rgba(140, 140, 194, 0) 80%
    );

    justify-content: center;
    align-items: center;
    .IntroPhoto {
      height: 80%;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      @media (max-width: 768px) {
        border-bottom-right-radius: 0px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0px;
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      flex-direction: column;
      background: linear-gradient(
        180deg,
        rgba(140, 140, 194, 0.2) 0%,
        rgba(140, 140, 194, 0) 80%
      );
      .IntroPhoto {
      }
    }

    .Title {
      position: absolute;
      left: 0;
      top: -16%;
      font-family: var(--HandFont);
      color: #595990;
      font-size: 4.5rem;

      @media (max-width: 768px) {
        /* display: none; */
        top: -14%;
        font-size: 4rem;
      }
    }

    .IntroText {
      margin-left: -30px;
      font-family: var(--CodingFont);
      font-size: 1.3rem;
      line-height: 1.5em;
      color: var(--ParagraphColor);

      @media (max-width: 768px) {
        /* display: none; */
        margin-left: 0px;
        margin-top: -30%;
        padding: 10px;
        font-size: 1.1rem;
      }
    }

    .SocialIcons {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      gap: 3px;
      .Icon {
        color: var(--MainColor2);
        opacity: 0.5;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }

    .IconHolder {
      position: absolute;
      display: flex;
      left: 0;
      bottom: -20%;
      z-index: 3;

      @media (max-width: 768px) {
        left: auto;
        right: 0;
        top: -7%;
        bottom: auto;
      }

      .icon {
        width: 25px;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 50%;
        transform: translateY(-50%);
        fill: white;
      }

      .spinText {
        width: 130px;
        height: 130px;
      }
    }
  }
`;
