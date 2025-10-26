import styled from "styled-components";

export const StyledAboutMe = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  padding: 13% 40px;

  /* Mobile */
  @media (max-width: 767px) {
    padding: 15% 15px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 10% 30px;
  }

  /* Desktop  */
  @media (min-width: 1024px) {
    padding: 13% 40px;
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

    /* Mobile */
    @media (max-width: 767px) {
      width: 100%;
      height: auto;
      min-height: 400px;
      flex-direction: column;
      background: linear-gradient(
        180deg,
        rgba(140, 140, 194, 0.2) 0%,
        rgba(140, 140, 194, 0) 80%
      );
      padding: 20px;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      height: 400px;
      flex-direction: row;
    }

    .IntroPhoto {
      height: 80%;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      object-fit: cover;

      /* Mobile */
      @media (max-width: 767px) {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 100%;
        max-width: 300px;
        height: 250px;
        margin-bottom: 20px;
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        height: 65%;
      }
    }

    .Title {
      position: absolute;
      left: 0;
      top: -16%;
      font-family: var(--HandFont);
      color: #595990;
      font-size: clamp(2.5rem, 6vw, 4.5rem);

      /* Mobile */
      @media (max-width: 767px) {
        top: -8%;
        left: 15%;
        transform: translateX(-50%);
        font-size: clamp(4rem, 8vw, 3rem);
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        top: -9%;
        font-size: clamp(3rem, 5vw, 4rem);
      }
    }

    .IntroText {
      margin-left: -30px;
      font-family: var(--CodingFont);
      font-size: 1.3rem;
      line-height: 1.5em;
      color: var(--ParagraphColor);
      max-width: 60%;

      /* Mobile */
      @media (max-width: 767px) {
        margin-left: 0px;
        margin-top: 0px;
        padding: 0px;
        font-size: clamp(0.9rem, 4vw, 1.1rem);
        max-width: 100%;
        text-align: center;
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        margin-left: -20px;
        font-size: clamp(1.1rem, 2.5vw, 1.2rem);
        max-width: 60%;
      }

      /* Desktop */
      @media (min-width: 1024px) {
        font-size: clamp(1.2rem, 1.5vw, 1.3rem);
      }
    }

    .SocialIcons {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      gap: 3px;

      /* Mobile */
      @media (max-width: 767px) {
        position: relative;
        right: -45%;
        bottom: auto;
        justify-content: center;
        margin-top: 20px;
        gap: 15px;
      }
      

      .Icon {
        color: var(--MainColor2);
        opacity: 0.5;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        font-size: 1.5rem;

        /* Mobile */
        @media (max-width: 767px) {
          font-size: 1.8rem;
        }

        &:hover {
          opacity: 1;
          transform: translateY(-2px);
        }
      }
    }

    .IconHolder {
      position: absolute;
      display: flex;
      left: 0;
      bottom: -20%;
      z-index: 3;

      /* Mobile */
      @media (max-width: 767px) {
        left: 15%;
        right: auto;
        top: auto;
        bottom: -25px;
        transform: translateX(-50%);
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        bottom: -20%;
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

        /* Mobile */
        @media (max-width: 767px) {
          width: 20px;
        }
      }

      .spinText {
        width: 130px;
        height: 130px;

        /* Mobile */
        @media (max-width: 767px) {
          width: 100px;
          height: 100px;
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          width: 120px;
          height: 120px;
        }
      }
    }
  }
`;
