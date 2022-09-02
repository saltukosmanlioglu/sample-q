import React from "react";
import Head from "next/head";

import { MembershipProps } from "./types";
import * as Styled from "./Membership.styled";

const Membership: React.FunctionComponent<MembershipProps> = ({
  children,
  pageTitle,
}) => {
  return (
    <Styled.Membership>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Styled.Main>
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </Styled.Main>
    </Styled.Membership>
  );
};

export default Membership;
