import React from "react";
import Head from "next/head";

import Header from "@/layout/main/components/header";
import Footer from "@/layout/main/components/footer";

import { MainProps } from "./types";
import * as Styled from "./Main.styled";

const Main: React.FunctionComponent<MainProps> = ({ children, pageTitle }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
