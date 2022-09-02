import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import Main from "@/layout/main";
import showsService, { ShowsResponse } from "@/services/shows";
import ShowCard from "@/widgets/show-card";

import * as Styled from "./Show.styled";

const Show: NextPage = () => {
  const [show, setShow] = useState<ShowsResponse>();

  const router = useRouter();

  useEffect(() => {
    showsService
      .list()
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err))
      .finally(() => {});
  }, [router.query.imdbId]);

  return show ? (
    <Main pageTitle={`${show.Title} - Q`}>
      <Styled.Show>
        <ShowCard {...show} />
      </Styled.Show>
    </Main>
  ) : null;
};

export default Show;
