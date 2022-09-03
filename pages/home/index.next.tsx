import React, { useState } from "react";
import type { NextPage } from "next";

import { MovieProps } from "@/app/types";
import MovieCard from "@/components/movie-card";
import TextField from "@/components/text-field";
import { movies } from "@/constants/movies";
import Main from "@/layout/main";

import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  const [data] = useState<Array<MovieProps>>(movies);

  const [movieName, setMovieName] = useState<string>("");

  const fitlerMovies = (movie: MovieProps) => {
    if (movieName === "") {
      return movie;
    } else if (
      movie.title.toLocaleLowerCase().includes(movieName.toLowerCase())
    ) {
      return movie;
    }
  };

  return (
    <Main
      headerProps={{ title: "ALL OF TV SHOWS IN THE WORLD" }}
      pageTitle="Home - Q"
    >
      <Styled.Search>
        <TextField
          name="movieName"
          onChange={(e) => setMovieName(e.currentTarget.value)}
          placeholder="Movie name"
          type="text"
          value={movieName}
        />
      </Styled.Search>
      <Styled.Home>
        {data.filter(fitlerMovies).map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </Styled.Home>
    </Main>
  );
};

export default Home;
