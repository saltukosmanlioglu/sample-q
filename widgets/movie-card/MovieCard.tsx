import React from "react";

import { MovieCardProps } from "./types";
import * as Styled from "./MovieCard.styled";

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  title,
  poster_path,
  original_language,
  original_title,
  media_type,
  adult,
  popularity,
  overview,
  vote_average,
  vote_count,
}) => {
  return (
    <Styled.MovieCard>
      <Styled.Wrapper>
        <div>
          <img
            src={`${process.env.NEXT_APP_CDN_API}/${poster_path}`}
            alt=""
            height="100%"
            width={200}
          />
          <div>
            <b>{title}</b>
            <p>{overview}</p>
            <b>
              Original title: <span>{original_title}</span>
            </b>
            <b>
              Original language: <span>{original_language}</span>
            </b>
            <b>
              Media type: <span>{media_type}</span>
            </b>
            <b>
              Adult: <span>{adult ? "Yes" : "No"}</span>
            </b>
            <b>
              Popularity: <span>{popularity}</span>
            </b>
          </div>
        </div>
        <div>
          <b>Vote Informations</b>
          <div>
            <b>
              Vote count: <span>{vote_count}</span>
            </b>
            <b>
              Vote average: <span>{vote_average}</span>
            </b>
          </div>
        </div>
      </Styled.Wrapper>
    </Styled.MovieCard>
  );
};

export default MovieCard;
