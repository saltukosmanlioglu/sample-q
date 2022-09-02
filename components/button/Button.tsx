import React from "react";

import { ButtonProps } from "./types";
import * as Styled from "./Button.styled";

const Button: React.FunctionComponent<ButtonProps> = ({
  icon,
  onClick,
  text,
  type,
}) => {
  return (
    <Styled.Button onClick={onClick} type={type}>
      <p>{text}</p>
      {icon}
    </Styled.Button>
  );
};

export default Button;
