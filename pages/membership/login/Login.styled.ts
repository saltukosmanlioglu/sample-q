import styled from "styled-components";

import { colors } from "@/constants/colors";

export const Login = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    & div:nth-child(2) {
      margin-left: 20px;
      border-left: 1px solid ${() => colors.mainColor};
      padding-left: 20px;

      p {
        margin-top: 12px;
      }
    }
  }

  form {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 16px; 
  }

  a {
    text-align: center;
    display: block;
  }
`;
