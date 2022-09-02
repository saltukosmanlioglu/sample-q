import React from "react";

import { MembershipProps } from "./types";
import * as Styled from "./Membership.styled";

const Membership: React.FunctionComponent<MembershipProps> = () => {
  return (
    <Styled.Membership>
      <Styled.Wrapper>Membership</Styled.Wrapper>
    </Styled.Membership>
  );
};

export default Membership;
