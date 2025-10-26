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
  margin-bottom: 0%;

  /* Mobile First - up to 767px */
  @media (max-width: 767px) {
    margin-top: 30%;
    margin-bottom: -4%;
    padding: 3% 15px 2% 15px;
    height: auto;
    min-height: 70vh;
  }

  /* Tablet - 768px to 1023px */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 25%;
    margin-bottom: 0%;
    padding: 8% 20px 5% 20px;
    height: 90vh;
  }

  /* Desktop - 1024px and up */
  @media (min-width: 1024px) {
    margin-top: 17%;
    margin-bottom: 0%;
    padding: 8% 40px 5% 40px;
    height: 100vh;
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

    /* Mobile */
    @media (max-width: 767px) {
      width: 100%;
      height: auto;
      min-height: 600px;
      background-position: center;
      border-radius: 12px;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 50vw;
      height: 650px;
      background-position: center;
    }

    /* Desktop */
    @media (min-width: 1024px) {
      width: 60.5vw;
      height: 700px;
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

      /* Mobile */
      @media (max-width: 767px) {
        border-radius: 12px;
      }
    }

    .TopFolder {
      width: 100%;
      top: -16%;
      position: absolute;
      transform: translateY(0px);

      /* Mobile */
      @media (max-width: 767px) {
        top: -16.5%;
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        top: -17%;
      }

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
          margin-top: -20px;

          /* Mobile */
          @media (max-width: 767px) {
            font-size: clamp(5rem, 8vw, 3rem);
            left: 20%;
            transform: translateX(-50%);
            margin-top: -10px;
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            font-size: clamp(4rem, 5vw, 4rem);
            left: 15px;
            margin-top: -1%;
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
            margin-top: 5%;
            font-size: clamp(1rem, 3vw, 0.9rem);
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            margin-left: 40%;
            margin-right: 5%;
            margin-top: 20px;
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

      /* Mobile */
      @media (max-width: 767px) {
        flex-direction: column;
        padding: 10px 10px 20px 10px;
        gap: 15px;
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        flex-direction: column;
        padding: 15px 20px;
        gap: 12px;
        align-items: stretch; 
        justify-content: space-evenly;
      }

      /* Desktop */
      @media (min-width: 1024px) {
        flex-direction: row;
        padding: 5px;
        gap: 5px;
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

      /* Mobile */
      @media (max-width: 767px) {
        height: 250px;
        border-radius: 8px;
        border-top: 1px solid rgba(157, 157, 255, 0.3);
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        height: 100px; 
        margin-top: 10px; 
      }

      .SwiperContainer {
        .SwiperEl {
          width: 200px;

          /* Mobile */
          @media (max-width: 767px) {
            width: 150px;
          }

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            width: 180px;
          }

          .Element {
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            border-radius: 4px;

            &:hover {
              transform: scale(1.02);
            }

            /* Mobile */
            @media (max-width: 767px) {
              border-radius: 6px;

              &:hover {
                transform: scale(1.01);
              }
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
