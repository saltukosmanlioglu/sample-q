import styled from "styled-components";

import { colors } from "@/constants/colors";

export const FavoriteMovie = styled.button`
  background-color: #fff;
  padding: 4px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  svg {
    color: ${() => colors.mainColor};;
  }
`;
