import React from "react";

import { CommentMadeProps } from "./types";
import * as Styled from "./CommentMade.styled";

const CommentMade: React.FunctionComponent<CommentMadeProps> = ({
  activeUser,
  comment,
  createdDate,
  userId,
  username,
}) => {
  return (
    <Styled.CommentMade>
      <div>
        <b>
          {username} - <span>{new Date(createdDate).toLocaleDateString()}</span>{" "}
          {userId === activeUser.id ? <span>Your comment</span> : null}
        </b>
        <p>{comment}</p>
      </div>
    </Styled.CommentMade>
  );
};

export default CommentMade;
