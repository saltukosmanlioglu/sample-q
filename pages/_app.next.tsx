import React from "react";
import type { AppProps } from "next/app";

import GlobalStyle from "@/app/global/Global.styled";
import CheckToken from "@/core/check-token";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CheckToken>
      <Component {...pageProps} />
      <GlobalStyle />
    </CheckToken>
  );
};

export default MyApp;
