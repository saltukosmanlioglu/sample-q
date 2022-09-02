import React from "react";
import type { AppProps } from "next/app";

import GlobalStyle from "@/app/global/Global.styled";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
};

export default MyApp;
