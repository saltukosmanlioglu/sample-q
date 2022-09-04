import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { localStorageSetItem } from "@/app/funcs/local-storage";
import useUser from "@/app/hooks/user";
import { MovieProps } from "@/app/types";
import { movies } from "@/constants/movies";
import Main from "@/layouts/main";
import sendEmailService, { SendEmailRequest } from "@/services/send-email";
import Comment, { CommentRequest } from "@/widgets/comment";
import CommentMade from "@/widgets/comment-made";
import FavoriteMovie, { FavoriteMovieRequest } from "@/widgets/favorite-movie";
import MovieCard from "@/widgets/movie-card";
import SendEmail from "@/widgets/send-email";

import * as Styled from "./Movie.styled";

const Movie: NextPage = () => {
  const [movie, setMovie] = useState<MovieProps>();

  const [comments, setComments] = useState<Array<CommentRequest>>();
  const [favorites, setFavorites] = useState<Array<FavoriteMovieRequest>>();

  const router = useRouter();
  const { userInfo } = useUser();

  const addMyFavoriteMovies = () => {
    if (favorites && movie) {
      favorites.push({
        id: `${Math.floor(Math.random() * 1000)}-${userInfo.username.substring(
          0,
          4
        )}-${router.query.id}-${movie.vote_average.toString().substring(0, 3)}`,
        createdDate: new Date().toLocaleDateString(),
        movie,
        userId: userInfo.id,
      });

      localStorageSetItem({
        key: "favorites",
        value: [...favorites],
      });
    }
  };

  const removeMyFavoriteMovie = (id: string) => {
    if (favorites) {
      const favoriteId = favorites.findIndex((favorite) => favorite.id === id);
      const newData = [
        ...favorites.slice(0, favoriteId),
        ...favorites.slice(favoriteId + 1),
      ];

      localStorageSetItem({
        key: "favorites",
        value: [...newData],
      });
    }
  };

  const createComment = (values: CommentRequest) => {
    if (comments && values) {
      comments.push({
        ...values,
        createdDate: new Date().toLocaleDateString(),
        movieId: Number(router.query.id),
        userId: userInfo.id,
        username: userInfo.username,
      });

      localStorageSetItem({
        key: "comments",
        value: [...comments],
      });

      setComments([...comments]);
    }
  };

  const sendEmail = (values: SendEmailRequest) => {
    sendEmailService
      .sendEmail(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    movies.find((movie) =>
      movie.id === Number(router.query.id) ? setMovie(movie) : null
    );
  }, [router.query.id]);

  useEffect(() => {
    setComments(JSON.parse(localStorage.getItem("comments") || "[]"));
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  return comments && favorites && movie && userInfo ? (
    <Main
      headerProps={{ title: `${movie.title}` }}
      pageTitle={`${movie.title} - Q`}
    >
      <Styled.Movie>
        <MovieCard {...movie} />

        <Styled.OtherOptions>
          {favorites.find(
            (favorite) =>
              favorite.movie.id === Number(router.query.id) &&
              favorite.userId === userInfo.id
          ) ? null : (
            <FavoriteMovie onAdd={addMyFavoriteMovies} />
          )}

          <SendEmail onSubmit={sendEmail} />
        </Styled.OtherOptions>

        <Comment onSubmit={createComment} />

        <b style={{ fontSize: 25 }}>Comments</b>
        {comments.length > 0 &&
        comments.find(
          (comment) => comment.movieId === Number(router.query.id)
        ) ? (
          comments
            .filter((comment) => comment.movieId === Number(router.query.id))
            .sort((a, b) => (b.createdDate > a.createdDate ? 1 : -1))
            .map((comment, index) => (
              <CommentMade key={index} activeUser={userInfo} {...comment} />
            ))
        ) : (
          <p style={{ textAlign: "center", fontSize: 20, marginTop: 20 }}>
            Be the first to comment
          </p>
        )}
      </Styled.Movie>
    </Main>
  ) : null;
};

export default Movie;
