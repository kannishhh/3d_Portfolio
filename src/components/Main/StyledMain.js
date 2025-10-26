import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: var(--MainColor);
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  height: auto;
  width: 100%;
  position: relative;

  /* Mobile First - up to 767px */
  @media (max-width: 767px) {
    min-width: 100%;
    flex-direction: column;
    height: auto;
    justify-content: center;
  }

  /* Tablet - 768px to 1023px */
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    padding: 10px;
    gap: 10px;
  }

  /* Desktop - 1024px and up */
  @media (min-width: 1024px) {
    padding: 5px;
    gap: 5px;
  }

  .Experiance_container {
    width: 34%;
    height: 100vh;
    padding: 5px;

    /* Mobile */
    @media (max-width: 767px) {
      background-color: var(--MainColor2);
      height: 30vh;
      width: 100%;
      padding: 0px 10px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      z-index: 998;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 40%;
      height: 100vh;
      padding: 8px;
    }

    /* Desktop */
    @media (min-width: 1024px) {
      width: 34%;
      height: 100vh;
      padding: 5px;
    }
  }

  .Experiance {
    height: 100%;
    width: 100%;
    z-index: 99;
    cursor: grab;
    border-radius: 0px 10px 10px 10px;
    transition: 0.5s ease-in-out;
    overflow: hidden;

    &:after {
      position: absolute;
      top: 0;
      width: 130%;
      content: "";
      z-index: 9999;
    }

    .SvgMask {
      width: 40%;
      position: absolute;
      top: 0;
      z-index: 99;
      padding: 0px;

      .TopMask {
        position: absolute;
        width: 44%;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0px;
        background-image: url("/Photos/Utils/TopMask.svg");
        top: 0;
        transform: translateY(-1px);
        padding-bottom: calc(100% * 3 / 4);
      }

      .CurrentSec {
        position: absolute;
        width: 100%;
        margin: 10px 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .Logo {
          width: 30px;

          /* Tablet */
          @media (min-width: 768px) and (max-width: 1023px) {
            width: 25px;
          }
        }
      }

      @media (max-width: 767px) {
        display: none;
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        width: 45%;
      }
    }

    /* Mobile styles */
    @media (max-width: 767px) {
      height: 30vh;
      top: 0%;
      border-radius: 0px 0px 5px 5px;
      border: 2px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    /* Tablet styles */
    @media (min-width: 768px) and (max-width: 1023px) {
      border-radius: 5px 10px 10px 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px;
    }
  }

  .Content {
    padding: 5px;
    width: 66%;
    height: 100vh;
    color: white;
    background-color: black;
    overflow-y: scroll;

    /* Mobile */
    @media (max-width: 767px) {
      width: 100%;
      height: 70vh;
      padding: 10px;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 60%;
      height: 100vh;
      padding: 8px;
    }

    /* Desktop */
    @media (min-width: 1024px) {
      width: 66%;
      height: 100vh;
      padding: 5px;
    }
  }
`;
