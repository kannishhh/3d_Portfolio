import styled from "styled-components";

export const StyledSkills = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  padding: 0 30px;

  @media (max-width: 767px) {
    height: auto;
    padding: 0px 15px;
    min-height: 1vh;
    margin-top: 0%;
  }

  
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 85vh;
    padding: 0 25px;
    margin-top: 8%;
  }

  
  @media (min-width: 1024px) {
    height: 100%;
    padding: 0 30px;
  }

  .Container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    /* Mobile */
    @media (max-width: 767px) {
      padding: 0px;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 5% 10px;
    }

    /* Desktop */
    @media (min-width: 1024px) {
      padding: 0px;
    }

    .TopFolder {
      width: 100%;
      position: relative;
      transform: translateY(0px);

      .SvgTopFolder {
        transform: translate(-1px, 25px);
        width: 100%;
        mask-image: linear-gradient(to top, transparent 30%, black);
        mask-repeat: no-repeat;
        mask-position: right;

        /* Mobile */
        @media (max-width: 767px) {
          transform: translate(-1px, 30px);
        }
      }

      .FolderPath {
        width: 45%;
        height: 30px;
        position: absolute;
        border-radius: 0px 15px 0px 0px;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        /* Mobile */
        @media (max-width: 767px) {
          width: 70%;
          height: 35px;
          justify-content: center;
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          width: 70%;
          height: 32px;
        }

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

        h1 {
          font-family: var(--HandFont);
          color: #595990;
          font-size: clamp(2.5rem, 6vw, 5rem);
          position: absolute;
          left: 4px;
          margin-bottom: 1px;

          /* Mobile */
          @media (max-width: 767px) {
            font-size: clamp(5rem, 8vw, 3rem);
            left: 20%;
            transform: translateX(-50%);
            margin-bottom: 0px;
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            font-size: clamp(4rem, 5vw, 4rem);
            left: 15px;
          }
        }

        span {
          font-family: var(--CodingFont);
          color: #595990;
          opacity: 0.4;
          margin-top: 5%;
          margin-left: 25%;
          font-size: clamp(0.8rem, 2vw, 1rem);

          /* Mobile */
          @media (max-width: 767px) {
            margin-left: 30%;
            margin-right: 0%;
            margin-top: 6%;
            font-size: clamp(1rem, 3vw, 0.9rem);
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            margin-left: 40%;
            margin-right: 5%;
          }
        }
      }
    }

    .Content {
      width: 100%;
      height: 100%;
      position: relative;
      border: 1px solid rgba(89, 89, 144, 0.4);
      border-radius: 0px 15px 15px 15px;
      transition: 0.2s ease-in-out;
      background: linear-gradient(
        180deg,
        rgba(157, 157, 255, 0.03) 0%,
        rgba(157, 157, 255, 0) 100%
      );
      padding: 0px;

      &:hover {
        background: linear-gradient(
          180deg,
          rgba(157, 157, 255, 0.05) 0%,
          rgba(157, 157, 255, 0) 100%
        );
      }

      .SkillsContent {
        width: 100%;
        height: 100%;
        top: 90px;
        transition: 0.2s ease-in-out;
        z-index: 99;

        .SkillsGrid {
          position: relative;
          height: 70vh;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          grid-row-gap: 50px;
          justify-items: center;
          align-items: center;
          overflow: auto;
          padding: 30px 10px;

          /* Mobile */
          @media (max-width: 767px) {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-row-gap: 50px;
            padding: 20px 10px;
            height: 30vh;
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            grid-row-gap: 40px;
            padding: 25px 10px;
            height: 60vh;
          }

          /* Desktop */
          @media (min-width: 1024px) {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            grid-row-gap: 50px;
            padding: 30px 10px;
            height: 70vh;
          }

          ::-webkit-scrollbar {
            width: 3px;

            /* Mobile */
            @media (max-width: 767px) {
              width: 2px;
            }
          }

          ::-webkit-scrollbar-thumb {
            background: #232338;
            border-radius: 1px;
            transition: 0.1s ease-in-out;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #3a3a5c;
          }
        }
      }
    }
  }
`;

export const StyledSkillBox = styled.div`
  margin: 0px;
  padding: 0px;
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-image: linear-gradient(
      0deg,
      rgba(157, 157, 255, 0) 0%,
      rgba(157, 157, 255, 0.1) 50%,
      rgba(157, 157, 255, 0.4) 100%
    )
    1;
  border-bottom: 0;

  /* Mobile */
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 130px;
    height: 130px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: translateY(-2px);

    /* Mobile  */
    @media (max-width: 767px) {
      transform: translateY(-1px);
      box-shadow: rgba(50, 50, 93, 0.15) 0px 8px 20px -3px,
        rgba(0, 0, 0, 0.2) 0px 5px 12px -5px;
    }
  }

  .SkillIcon {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
      transition: transform 0.5s ease-in-out;

      /* Mobile */
      @media (max-width: 767px) {
        width: 60%;
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        width: 65%;
      }

      &:hover {
        transform: ${(props) =>
          props.animation == 1 ? "scale(1.1)" : "rotate(20deg)"};

        /* Mobile */
        @media (max-width: 767px) {
          transform: ${(props) =>
            props.animation == 1 ? "scale(1.05)" : "rotate(10deg)"};
        }
      }
    }
  }

  .SkillName {
    width: 100%;
    height: 30%;
    background-image: linear-gradient(
      0deg,
      rgba(157, 157, 255, 0.4) 0%,
      rgba(157, 157, 255, 0) 140%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-primary);
    color: var(--MainColor2);
    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(
        90deg,
        transparent 20%,
        rgba(157, 157, 255, 1) 50%,
        transparent 80%
      )
      1;
    text-align: center;
    font-size: clamp(0.6rem, 2vw, 0.9rem);
    line-height: 1.2;
    padding: 2px;

    /* Mobile */
    @media (max-width: 767px) {
      font-size: clamp(0.5rem, 3vw, 0.7rem);
      line-height: 0.8rem;
      padding: 1px;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: clamp(0.6rem, 2.5vw, 0.8rem);
      line-height: 0.9rem;
    }
  }

  .WatchIcon {
    position: absolute;
    top: 5px;
    right: 5px;
    animation: slowPulse 1s infinite ease-in-out;

    /* Mobile */
    @media (max-width: 767px) {
      top: 3px;
      right: 3px;
      font-size: 0.8rem;
    }
  }

  @keyframes slowPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;
