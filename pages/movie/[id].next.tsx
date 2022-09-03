import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { localStorageSetItem } from "@/app/funcs/local-storage";
import { MovieProps, UserProps } from "@/app/types";
import { movies } from "@/constants/movies";
import Main from "@/layout/main";
import sendEmailService, { SendEmailRequest } from "@/services/send-email";
import Comment, { CommentRequest } from "@/widgets/comment";
import CommentMade from "@/widgets/comment-made";
import FavoriteMovie from "@/widgets/favorite-movie";
import MovieCard from "@/widgets/movie-card";
import Popup from "@/widgets/popup";
import SendEmail from "@/widgets/send-email";

import * as Styled from "./Movie.styled";

const Movie: NextPage = () => {
  const [movie, setMovie] = useState<MovieProps>();
  const [comments, setComments] = useState<Array<CommentRequest>>();
  const [user, setUser] = useState<UserProps>();

  const [mailPopupVisible, setMailPopupVisible] = useState<boolean>(false);
  const [favoriPopupVisible, setFavoriPopupVisible] = useState<boolean>(false);
  const [commentPopupVisible, setCommentPopupVisible] =
    useState<boolean>(false);

  const router = useRouter();

  const addMyFavoriteMovies = () => {};

  const createComment = (values: CommentRequest) => {
    if (user && comments && values) {
      comments.push({
        ...values,
        createdDate: new Date().toLocaleDateString(),
        movieId: Number(router.query.id),
        userId: user.id,
      });

      localStorageSetItem({
        key: "comments",
        value: [...comments],
      });

      setCommentPopupVisible(true);
    }
  };

  const sendEmail = (values: SendEmailRequest) => {
    sendEmailService
      .sendEmail(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => setMailPopupVisible(true));
  };

  useEffect(() => {
    movies.find((movie) =>
      movie.id === Number(router.query.id) ? setMovie(movie) : null
    );
  }, [router.query.id]);

  useEffect(() => {
    setComments(JSON.parse(localStorage.getItem("comments") || "[]"));
    setUser(JSON.parse(localStorage.getItem("access_token") || "{}"));
  }, []);

  return movie ? (
    <Main
      headerProps={{ title: `${movie.title}` }}
      pageTitle={`${movie.title} - Q`}
    >
      <Styled.Movie>
        <MovieCard {...movie} />
        <Styled.OtherOptions>
          <FavoriteMovie onSubmit={addMyFavoriteMovies} />
          <SendEmail onSubmit={sendEmail} />
        </Styled.OtherOptions>
        <Comment onSubmit={createComment} />
        {comments &&
          comments
            .filter((comment) => comment.movieId === Number(router.query.id))
            .sort((a, b) => (b.createdDate > a.createdDate ? 1 : -1))
            .map((comment, index) =>
              user ? (
                <CommentMade
                  key={index}
                  activeUser={user}
                  {...comment}
                  username="Saltuk Eren"
                />
              ) : null
            )}
      </Styled.Movie>
      <Popup
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam debitis alias earum rem provident libero. Culpa, ut tempore repellendus fugit et, amet, ducimus voluptatum quibusdam necessitatibus reprehenderit distinctio nostrum illo?"
        setVisible={setMailPopupVisible}
        title="Mail sending status"
        visible={mailPopupVisible}
      />
      <Popup
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam debitis alias earum rem provident libero. Culpa, ut tempore repellendus fugit et, amet, ducimus voluptatum quibusdam necessitatibus reprehenderit distinctio nostrum illo?"
        setVisible={setFavoriPopupVisible}
        title="Favorite added status"
        visible={favoriPopupVisible}
      />
      <Popup
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam debitis alias earum rem provident libero. Culpa, ut tempore repellendus fugit et, amet, ducimus voluptatum quibusdam necessitatibus reprehenderit distinctio nostrum illo?"
        setVisible={setCommentPopupVisible}
        title="Comment added status"
        visible={commentPopupVisible}
      />
    </Main>
  ) : null;
};

export default Movie;
