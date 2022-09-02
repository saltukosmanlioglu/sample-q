import React from "react";

import { HeaderProps } from "./types";
import * as Styled from "./Header.styled";

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <Styled.Header>
      <div>Header</div>
    </Styled.Header>
  );
};

export default Header;
