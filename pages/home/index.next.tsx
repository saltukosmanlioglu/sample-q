import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import Main from "@/layout/main";
import showsService from "@/services/shows";

import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.query);

  useEffect(() => {
    showsService
      .list()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => {});

    fetch("https://api.themoviedb.org/4/list", {
      method: "GET",
    }).then((res) => console.log(res));
  }, []);

  return (
    <Main pageTitle="Home - Q">
      <Styled.Home>
        <Styled.Header>
          <b>SOME OF TV SHOWS</b>
        </Styled.Header>
      </Styled.Home>
    </Main>
  );
};

export default Home;
