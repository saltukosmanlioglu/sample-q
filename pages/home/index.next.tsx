import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import useUser from "@/app/hooks/user";
import Main from "@/layout/main";
import showsService from "@/services/shows";

import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    showsService
      .list()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => {});

    console.log(user);
  }, []);

  return (
    <Main
      headerProps={{ title: "ALL OF TV SHOWS IN THE WORLD" }}
      pageTitle="Home - Q"
    >
      <Styled.Home>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </Styled.Home>
    </Main>
  );
};

export default Home;
