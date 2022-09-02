import React from "react";

import { FooterProps } from "./types";
import * as Styled from "./Footer.styled";

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <Styled.Footer>
      <div>Footer</div>
    </Styled.Footer>
  );
};

export default Footer;
