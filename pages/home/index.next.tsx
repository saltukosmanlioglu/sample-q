import React from "react";
import type { NextPage } from "next";

import Main from "@/layout/main";

import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  return (
    <Main>
      <Styled.Home>Home</Styled.Home>
    </Main>
  );
};

export default Home;
