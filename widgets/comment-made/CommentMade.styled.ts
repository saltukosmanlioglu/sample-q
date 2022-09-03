import styled from "styled-components";

import { colors } from "@/constants/colors";

export const CommentMade = styled.div`
  margin-top: 40px;
  border-bottom: 1px solid ${() => colors.mainColor};
  padding-bottom: 12px;

  & > div {
    margin-top: 20px;

    b {
      font-size: 20px;
      span {
        background-color: ${() => colors.mainColor};
        color: #fff;
        padding: 4px;
        border-radius: 4px;
      }
    }
    p {
      margin-top: 16px;
    }
  }
`;
