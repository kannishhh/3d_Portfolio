import styled from "styled-components";

export const StyledProjects = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  scroll-snap-align: center;
  padding: 10% 40px;
  position: relative;
  margin-top: 17%;

  @media (max-width: 768px) {
    margin-top: 40%;
    padding: 10px 2%;
    height: auto;
  }

  .ProjectsContainer {
    width: 60.5vw;
    height: 700px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 0px;
    background-image: url("/Photos/Utils/ProjectsBg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: overlay;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      background-position: -200px 0px;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(157, 157, 255, 0.3);
      border-radius: 8px;

      mask-image: linear-gradient(to top, transparent 10%, black);
      mask-repeat: no-repeat;
      mask-position: right;
    }

    .TopFolder {
      width: 100%;
      top: -16%;
      position: absolute;
      transform: translateY(0px);
      @media (max-width: 768px) {
        top: -16%;
      }

      .SvgTopFolder {
        transform: translate(-1px, 25px);
        width: 100%;
        mask-image: linear-gradient(to top, transparent 30%, black);
        mask-repeat: no-repeat;
        mask-position: right;
      }
      .FolderPath {
        width: 45%;
        height: 30px;
        position: absolute;
        border-radius: 0px 15px 0px 0px;
        bottom: 0;

        &:after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          border: 1px solid rgba(89, 89, 144, 0.4);
          border-bottom: none;
          mask-image: linear-gradient(to right, transparent 30%, black);
          mask-repeat: no-repeat;
          mask-position: right;
          border-top-right-radius: 10px;
          background: linear-gradient(
            90deg,
            rgba(89, 89, 144, 0) 0%,
            rgba(89, 89, 144, 0.1) 100%
          );
        }

        @media (max-width: 768px) {
          width: 85%;
          justify-content: flex-end;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          font-family: var(--HandFont);
          color: #595990;
          font-size: 5rem;
          position: absolute;
          left: 4px;
          margin-top: 10px;
        }
        span {
          font-family: var(--CodingFont);
          color: #595990;
          opacity: 0.4;
          margin-top: 5%;
          margin-left: 25%;
          @media (max-width: 768px) {
            margin-right: 10%;
          }
        }
      }
    }

    .FeauturedWoksList {
      width: 100%;
      flex-grow: 1;
      background: linear-gradient(
        180deg,
        rgba(89, 89, 144, 0) 0%,
        rgba(89, 89, 144, 0.05) 100%
      );
      z-index: 4;  
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 5px;

      @media (max-width: 768px) {
        flex-direction: column;
        padding: 5px 5px 15px 5px;
      }
    }
    .AllWorksSlide {
      height: 200px;
      width: 100%;
      display: flex;
      position: relative;
      overflow: hidden;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top: 1px solid rgba(157, 157, 255, 0.3);
      @media (max-width: 768px) {
      }

      .SwiperContainer {
        .SwiperEl {
          width: 200px;

          .Element {
            height: 100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            &:hover {
              transform: scale(1.02);
            }
          }
        }
      }
    }
  }

  @keyframes Slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
