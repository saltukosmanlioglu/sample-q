import React from "react";

import { MainProps } from "./types";
import * as Styled from "./Main.styled";

const Main: React.FunctionComponent<MainProps> = () => {
  return (
    <Styled.Main>
      <div>Main</div>
    </Styled.Main>
  );
};

export default Main;
