import React from "react";

import { ButtonProps } from "./types";
import * as Styled from "./Button.styled";

const Button: React.FunctionComponent<ButtonProps> = () => {
  return (
    <Styled.Button>
      <div>Button</div>
    </Styled.Button>
  );
};

export default Button;
