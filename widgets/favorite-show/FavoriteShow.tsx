import React from "react";
import { AiFillStar } from "react-icons/ai";

import { colors } from "@/constants/colors";

import { FavoriteShowProps } from "./types";
import * as Styled from "./FavoriteShow.styled";

const FavoriteShow: React.FunctionComponent<FavoriteShowProps> = ({
  onSubmit,
}) => {
  return (
    <Styled.FavoriteShow onClick={onSubmit}>
      <AiFillStar size={30} color={colors.mainColor} />
    </Styled.FavoriteShow>
  );
};

export default FavoriteShow;
