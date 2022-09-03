import React, { useEffect } from "react";
import type { NextPage } from "next";

import Main from "@/layout/main";
import showsService from "@/services/shows";

import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  useEffect(() => {
    showsService
      .list()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => {});
  }, []);

  return (
    <Main pageTitle="Home - Q">
      <Styled.Home>
        <Styled.Header>
          <b>ALL OF TV SHOWS IN THE WORLD</b>
        </Styled.Header>
      </Styled.Home>
    </Main>
  );
};

export default Home;
