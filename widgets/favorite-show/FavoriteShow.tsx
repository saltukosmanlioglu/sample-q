import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

import { colors } from "@/constants/colors";

import { FavoriteShowProps } from "./types";
import * as Styled from "./FavoriteShow.styled";

const FavoriteShow: React.FunctionComponent<FavoriteShowProps> = ({
  onSubmit,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onSubmit();
  };

  return (
    <Styled.FavoriteShow isActive={isActive} onClick={handleClick}>
      <AiFillStar color={isActive ? "#fff" : colors.mainColor} size={30} />
    </Styled.FavoriteShow>
  );
};

export default FavoriteShow;
