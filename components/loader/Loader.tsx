import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

import * as Styled from "./Loader.styled";

const Loader: React.FunctionComponent = () => {
  return (
    <Styled.Loader>
      <div>
        <CircleLoader color="#000" />
      </div>
    </Styled.Loader>
  );
};

export default Loader;
