import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

import { FavoriteMovieProps } from "./types";
import * as Styled from "./FavoriteMovie.styled";

const FavoriteMovie: React.FunctionComponent<FavoriteMovieProps> = ({
  onAdd,
}) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(false);
    onAdd();
  };

  return isActive ? (
    <Styled.FavoriteMovie onClick={handleClick}>
      <AiFillStar size={30} />
    </Styled.FavoriteMovie>
  ) : null;
};

export default FavoriteMovie;
