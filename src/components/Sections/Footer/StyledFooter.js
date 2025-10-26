import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 30px;
  font-family: var(--font-tertiary);
  scroll-snap-align: end;
  min-height: 60px;
  margin-top: 0%; 

  /* Mobile First - up to 767px */
  @media (max-width: 767px) {
    padding: 10px 15px; 
    justify-content: center;
    height: auto;
    min-height: 50px;
    margin-top: 0%; 
  }

  /* Tablet - 768px to 1023px */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 10px 25px;
    justify-content: center;
    height: auto;
    min-height: 55px;
    margin-top: 0%;
  }

  /* Desktop - 1024px and up */
  @media (min-width: 1024px) {
    padding: 0 30px;
    justify-content: right;
    height: 5%;
    min-height: 60px;
  }

  span {
    font-size: clamp(0.8rem, 2vw, 1rem);
    margin-top: 8%;
    color: var(--ParagraphColor);
    opacity: 0.8;
    text-align: center;

    /* Mobile */
    @media (max-width: 767px) {
      font-size: clamp(0.7rem, 3vw, 0.9rem);
      margin-top: 4%;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: clamp(0.8rem, 2.5vw, 0.95rem);
      margin-top: 6%;
    }

    /* Desktop */
    @media (min-width: 1024px) {
      font-size: clamp(0.9rem, 1.5vw, 1rem);
      margin-top: 8%;
    }
  }
`;
