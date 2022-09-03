import React from "react";

import { ShowCardProps } from "./types";
import * as Styled from "./ShowCard.styled";

const ShowCard: React.FunctionComponent<ShowCardProps> = ({
  Actors,
  Country,
  Director,
  Genre,
  imdbRating,
  imdbVotes,
  Language,
  Plot,
  Poster,
  Ratings,
  Released,
  Runtime,
  Title,
  Type,
  Writer,
}) => {
  return (
    <Styled.ShowCard>
      <Styled.Wrapper>
        <div>
          <img src={Poster} alt="" height="100%" width={200} />
          <div>
            <b>{Title}</b>
            <p>{Plot}</p>
            <b>
              Country: <span>{Country}</span>
            </b>
            <b>
              Genre: <span>{Genre}</span>
            </b>
            <b>
              Type: <span>{Type}</span>
            </b>
            <b>
              Actor: <span>{Actors}</span>
            </b>
            <b>
              Director: <span>{Director}</span>
            </b>
            <b>
              Writers: <span>{Writer}</span>
            </b>
            <b>
              Relased: <span>{Released}</span>
            </b>
            <b>
              Runtime: <span>{Runtime}</span>
            </b>
            <b>
              Language: <span>{Language}</span>
            </b>
          </div>
        </div>
        <div>
          <b>IMDB Informations</b>
          <div>
            <b>
              IMDB Rating: <span>{imdbRating} / 10</span>
            </b>
            <b>
              IMDB Votes: <span>{imdbVotes}</span>
            </b>
            {Ratings.map((rating, index) => (
              <b key={index}>
                {rating.Source}: <span>{rating.Value}</span>
              </b>
            ))}
          </div>
        </div>
      </Styled.Wrapper>
    </Styled.ShowCard>
  );
};

export default ShowCard;
