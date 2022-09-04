import React, { useCallback, useState } from "react";
import { AiFillStar } from "react-icons/ai";

import { colors } from "@/constants/colors";

import { FavoriteMovieProps } from "./types";
import * as Styled from "./FavoriteMovie.styled";

const FavoriteMovie: React.FunctionComponent<FavoriteMovieProps> = ({
  isFavorite,
  onAdd,
  onRemove,
}) => {
  const [isActive, setIsActive] = useState<boolean>(isFavorite);

  const handleClick = useCallback(() => {
    if (isActive) {
      onRemove?.();
      setIsActive(false);
    } else {
      onAdd?.();
      setIsActive(true);
    }
  }, [isActive]);

  return (
    <Styled.FavoriteMovie isActive={isActive} onClick={handleClick}>
      <AiFillStar color={isActive ? "#fff" : colors.mainColor} size={30} />
    </Styled.FavoriteMovie>
  );
};

export default FavoriteMovie;
