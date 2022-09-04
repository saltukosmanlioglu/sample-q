import React from "react";
import Head from "next/head";
import { RiSlideshow2Fill } from "react-icons/ri";

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
        <Styled.Wrapper>
          <Styled.Header>
            <RiSlideshow2Fill color="#f34800" size={40} />
            <div>
              <b>TV SHOWS</b>
              <p>Welcome to TV Shows library</p>
            </div>
          </Styled.Header>
          <div>{children}</div>
        </Styled.Wrapper>
      </Styled.Main>
    </Styled.Membership>
  );
};

export default Membership;
