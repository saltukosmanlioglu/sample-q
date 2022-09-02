import styled from "styled-components";

import { colors } from "@/constants/colors";

export const Membership = styled.main``;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  & div:nth-child(2) {
    margin-left: 20px;
    border-left: 1px solid ${() => colors.mainColor};
    padding-left: 20px;

    b {
      font-size: 20px;
    }

    p {
      margin-top: 12px;
    }
  }
`;

export const Wrapper = styled.div`
  height: auto;
  min-height: 30%;
  width: 30%;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 40px;
`;
