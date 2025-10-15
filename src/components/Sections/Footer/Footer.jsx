import { forwardRef } from "react";
import { StyledFooter } from "./StyledFooter";

const Footer = forwardRef((props, ref) => {
  return (
    <StyledFooter ref={ref}>
      <span>© 2025 Kanish Kainth</span>
    </StyledFooter>
  );
});

export default Footer;
