import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

import { colors } from "@/constants/colors";

import { FavoriteMovieProps } from "./types";
import * as Styled from "./FavoriteMovie.styled";

const FavoriteMovie: React.FunctionComponent<FavoriteMovieProps> = ({
  onSubmit,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onSubmit();
  };

  return (
    <Styled.FavoriteMovie isActive={isActive} onClick={handleClick}>
      <AiFillStar color={isActive ? "#fff" : colors.mainColor} size={30} />
    </Styled.FavoriteMovie>
  );
};

export default FavoriteMovie;
