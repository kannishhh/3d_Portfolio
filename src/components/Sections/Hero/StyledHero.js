import styled from "styled-components";

export const StyledHero = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  padding: 10% 25px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0px 10px;
    height: 70vh;
    flex-direction: column;
  }

  .Title {
    display: flex;
    flex-direction: column;
    font-family: var(--font-primary);
    padding: 30px 0px;

    h1 {
      margin: 35px 0px;
      color: #D9E4E0;
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    h2 {
      font-family: var(--CodingFont);
      margin: 0px;
      opacity: 0.6;
    }
  }

  .GetInTouch {
    border-style: none;
    height: 50px;
    background: none;
    font-family: var(--font-primary);
    border: none;
    padding: 0 30px;
    opacity: 0.6;
    outline: none;
    position: relative;
    transition: 0.2s ease-in-out;
    border: 1px solid var(--MainColor2);
    background-color: var(--MainColor2);
    color: var(--MainColor);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: 0.2s ease-in-out;
    .ArrowIcon {
      transition: 0.2s ease-in-out;
    }

    &:hover {
      color: white;
      background: transparent;
      .ArrowIcon {
        color: white;
        transform: translateX(5px);
      }
    }
  }
`;
