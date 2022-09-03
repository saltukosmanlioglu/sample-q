import styled from "styled-components";

import { colors } from "@/constants/colors";

export const FavoriteShow = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? colors.mainColor : "#fff")};
  padding: 4px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
