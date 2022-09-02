import React from "react";
import type { NextPage } from "next";

import Main from "@/layout/main";

import * as Styled from "./Home.styled";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <Main pageTitle="Home - Q">
      <Styled.Home>Home</Styled.Home>
    </Main>
  );
};

export default Home;
