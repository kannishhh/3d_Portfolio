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
      font-size: 3rem;
      font-family: var(--font-primary);
      text-transform: uppercase;
      p {
        color: var(--MainColor2);
      }

      @media (max-width: 768px) {
        font-size: 2rem;
      }
      .marqueeDot {
        width: 1vw;
        height: 1vw;
        margin-bottom: 0.5vw;
        background-color: var(--MainColor2);
        border-radius: 1vw;
        margin: 0 4vw 0.5vw 4vw;
      }
    }
  }
`;
