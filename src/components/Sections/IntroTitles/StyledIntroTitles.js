import styled from "styled-components";

export const StyledSkillsTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 20px;
  overflow: hidden;
  margin: 0;
  .marqueeTrack {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-shrink: 0;

    .marqueeItem {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      font-size: clamp(2.5rem, 6vw, 4rem); 
      font-family: var(--font-primary);
      text-transform: uppercase;
      p {
        color: var(--MainColor2);
        font-size: inherit; 
        margin: 0; 
        line-height: 1; 
      }

      @media (max-width: 768px) {
        font-size: clamp(2rem, 8vw, 3rem); 
      }
      
      @media (min-width: 769px) and (max-width: 1023px) {
        font-size: clamp(2.8rem, 6vw, 3.5rem);
      }
      
      @media (min-width: 1024px) {
        font-size: clamp(3rem, 3vw, 3rem);
      }

      .marqueeDot {
        width: 1vw;
        height: 1vw;
        margin-bottom: 0.5vw;
        background-color: var(--MainColor2);
        border-radius: 1vw;
        margin: 0 4vw 0.5vw 4vw;
        
        /* Responsive dot sizing */
        @media (max-width: 768px) {
          width: 3vw;
          height: 3vw;
          margin: 0 6vw 1vw 6vw;
        }
        
        @media (min-width: 769px) and (max-width: 1023px) {
          width: 2vw;
          height: 2vw;
          margin: 0 5vw 0.8vw 5vw;
        }
      }
    }
  }
`;
