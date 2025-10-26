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

  /* Mobile First - up to 767px */
  @media (max-width: 767px) {
    padding: 5% 15px;
    height: 40vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* Tablet - 768px to 1023px */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 8% 20px;
    height: 75vh;
    flex-direction: row;
    align-items: center;
  }

  /* Desktop - 1024px and up */
  @media (min-width: 1024px) {
    padding: 10% 25px;
    height: 80vh;
  }

  .Title {
    display: flex;
    flex-direction: column;
    font-family: var(--font-primary);
    padding: 30px 0px;

    /* Mobile */
    @media (max-width: 767px) {
      padding: 20px 0px;
      align-items: center;
      text-align: center;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 25px 0px;
    }

    h1 {
      margin: 35px 0px;
      color: #D9E4E0;
      font-size: clamp(2rem, 5vw, 4rem);
      line-height: 1.2;

      /* Mobile */
      @media (max-width: 767px) {
        margin: 15px 0px;
        font-size: clamp(1.8rem, 8vw, 2.5rem);
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        margin: 25px 0px;
        font-size: clamp(2.5rem, 6vw, 3.5rem);
      }

      /* Desktop */
      @media (min-width: 1024px) {
        margin: 35px 0px;
        font-size: clamp(3rem, 4vw, 4rem);
      }
    }

    h2 {
      font-family: var(--CodingFont);
      margin: 0px;
      opacity: 0.6;
      font-size: clamp(0.9rem, 2.5vw, 1.2rem);

      /* Mobile */
      @media (max-width: 767px) {
        font-size: clamp(0.8rem, 4vw, 1rem);
        margin-bottom: 2px;
      }

      /* Tablet */
      @media (min-width: 768px) and (max-width: 1023px) {
        font-size: clamp(1rem, 3vw, 1.1rem);
      }
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
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;

    /* Mobile */
    @media (max-width: 767px) {
      height: 45px;
      padding: 0 30px;
      font-size: 0.9rem;
      width: 100%;
      max-width: 350px;
      margin-top: 10px;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      height: 48px;
      padding: 0 25px;
      font-size: 0.95rem;
    }

    /* Desktop */
    @media (min-width: 1024px) {
      height: 50px;
      padding: 0 30px;
      font-size: 1rem;
    }
    
    .ArrowIcon {
      transition: 0.2s ease-in-out;
      font-size: 1.2em;
    }

    &:hover {
      color: white;
      background: transparent;
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      
      .ArrowIcon {
        color: white;
        transform: translateX(5px);
      }
    }

    &:active {
      transform: translateY(0px);
    }
  }
`;
