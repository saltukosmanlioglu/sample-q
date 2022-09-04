import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import useUser from "@/app/hooks/user";
import MovieCard from "@/components/movie-card";
import Main from "@/layouts/main";
import { FavoriteMovieRequest } from "@/widgets/favorite-movie";

import * as Styled from "./MyFavoriteMovies.styled";

const MyFavoriteMovies: NextPage = () => {
  const [favorites, setFavorites] = useState<Array<FavoriteMovieRequest>>();

  const { userInfo } = useUser();

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  return (
    <Main
      headerProps={{ title: "My Favorite Movies" }}
      pageTitle="My Favorite Movies - Q"
    >
      <Styled.MyFavoriteMovies>
        {favorites &&
          favorites
            .filter((user) => user.userId === userInfo.id)
            .sort((a, b) => (b.createdDate > a.createdDate ? 1 : -1))
            .map((favorite, index) => (
              <MovieCard key={index} {...favorite.movie} />
            ))}
      </Styled.MyFavoriteMovies>
    </Main>
  );
};

export default MyFavoriteMovies;
