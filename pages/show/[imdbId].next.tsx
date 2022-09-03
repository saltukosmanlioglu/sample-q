import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import Main from "@/layout/main";
import showsService, { ShowsResponse } from "@/services/shows";
import sendEmailService, { SendEmailRequest } from "@/services/send-email";
import Comment from "@/widgets/comment";
import CommentMade from "@/widgets/comment-made";
import FavoriteShow from "@/widgets/favorite-show";
import Popup from "@/widgets/popup";
import SendEmail from "@/widgets/send-email";
import ShowCard from "@/widgets/show-card";

import * as Styled from "./Show.styled";

const Show: NextPage = () => {
  const [show, setShow] = useState<ShowsResponse>();
  const [mailPopupVisible, setMailPopupVisible] = useState<boolean>(false);
  const [favoriPopupVisible, setFavoriPopupVisible] = useState<boolean>(false);
  const [commentPopupVisible, setCommentPopupVisible] =
    useState<boolean>(false);

  const router = useRouter();

  const addMyFavoriteShows = () => {};

  const createComment = () => {};

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
        <CommentMade
          id={"1"}
          username="Saltuk Eren"
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, est nemo, aspernatur, saepe dolore dolorem illo tempore mollitia in sint architecto iste. A, quae perferendis iste nostrum tempora nam libero!"
        />
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
