import React from "react";
import { useRouter } from "next/router";

import { MovieCardProps } from "./types";
import * as Styled from "./MovieCard.styled";

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  id,
  backdrop_path,
  poster_path,
}) => {
  const router = useRouter();

  return (
    <Styled.MovieCard onClick={() => router.push(`/movie/${id}`)}>
      <img
        src={`${process.env.NEXT_APP_CDN_API}/${
          poster_path ? poster_path : backdrop_path
        }`}
        width="100%"
        height="100%"
      />
    </Styled.MovieCard>
  );
};

export default MovieCard;
