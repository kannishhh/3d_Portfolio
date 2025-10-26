import styled from "styled-components";

export const StyledExperiance = styled.div`
  position: absolute;
  background-color: transparent;
  position: relative;
  height: 100%;
  top: 0;
  background-color: var(--MainColor2);
  overflow: hidden;
  touch-action: manipulation;
  user-select: none;

  .Canvas {
    will-change: transform;

    @media (max-width: 767px) {
      image-rendering: optimizeSpeed;
      image-rendering: -webkit-optimize-contrast;
    }
  }

  .htmlScreen iframe {
    height: 700px;
    border: none;
    background: #000;
    overflow-y: scroll;
    touch-action: touch;

    @media (max-width: 767px) {
      height: 400px;
      width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      height: 500px;
    }
  }

  .wrapper {
    padding: 10px;
    width: 100%;
    height: 100%;
    transform: scale(0.5);
    border: none;
    border-radius: 5px;
    transform-origin: top left;

    @media (max-width: 767px) {
      padding: 5px;
      transform: scale(0.4);
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 8px;
      transform: scale(0.45);
    }
  }
`;
