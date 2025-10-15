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
  span {
    font-size: 1rem;
    margin-top: 8%;
  }
`;
