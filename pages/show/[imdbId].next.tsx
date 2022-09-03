import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import {
  localStorageGetItem,
  localStorageSetItem,
} from "@/app/funcs/local-storage";
import { UserProps } from "@/app/types";
import Main from "@/layout/main";
import showsService, { ShowsResponse } from "@/services/shows";
import sendEmailService, { SendEmailRequest } from "@/services/send-email";
import Comment, { CommentRequest } from "@/widgets/comment";
import CommentMade from "@/widgets/comment-made";
import FavoriteShow from "@/widgets/favorite-show";
import Popup from "@/widgets/popup";
import SendEmail from "@/widgets/send-email";
import ShowCard from "@/widgets/show-card";

import * as Styled from "./Show.styled";

const Show: NextPage = () => {
  const [show, setShow] = useState<ShowsResponse>();
  const [comments, setComments] = useState<Array<CommentRequest>>();
  const [user, setUser] = useState<UserProps>();

  const [mailPopupVisible, setMailPopupVisible] = useState<boolean>(false);
  const [favoriPopupVisible, setFavoriPopupVisible] = useState<boolean>(false);
  const [commentPopupVisible, setCommentPopupVisible] =
    useState<boolean>(false);

  const router = useRouter();

  const addMyFavoriteShows = () => {};

  const createComment = (values: CommentRequest) => {
    if (user && comments && values) {
      comments.push({
        ...values,
        createdDate: new Date().toLocaleDateString(),
        imdbId: String(router.query.imdbId),
        userId: user.id,
      });

      localStorageSetItem({
        key: "comments",
        value: [...comments],
      });

      setCommentPopupVisible(true);
    } else {
      // setCommentPopupVisible(true);
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
    showsService
      .list()
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));
  }, [router.query.imdbId]);

  useEffect(() => {
    setComments(JSON.parse(localStorage.getItem("comments") || "[]"));
    setUser(JSON.parse(localStorage.getItem("access_token") || "{}"));
  }, []);

  return show ? (
    <Main pageTitle={`${show.Title} - Q`}>
      <Styled.Show>
        <ShowCard {...show} />
        <Styled.OtherOptions>
          <FavoriteShow onSubmit={addMyFavoriteShows} />
          <div>
            <SendEmail onSubmit={sendEmail} />
          </div>
        </Styled.OtherOptions>
        <Comment onSubmit={createComment} />
        {comments &&
          comments
            .filter((comment) => comment.imdbId === String(router.query.imdbId))
            .sort((a, b) => (b.createdDate > a.createdDate ? 1 : -1))
            .map((comment, index) =>
              user ? (
                <CommentMade
                  key={index}
                  activeUser={user}
                  comment={comment.comment}
                  createdDate={comment.createdDate}
                  userId={comment.userId}
                  username="Saltuk Eren"
                />
              ) : null
            )}
      </Styled.Show>
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

export default Show;
