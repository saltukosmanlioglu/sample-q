import React from "react";

import { MainProps } from "./types";
import * as Styled from "./Main.styled";
import Head from "next/head";

const Main: React.FunctionComponent<MainProps> = ({ children, pageTitle }) => {
  return (
    <Styled.Main>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Styled.Main>{children}</Styled.Main>
    </Styled.Main>
  );
};

export default Main;
