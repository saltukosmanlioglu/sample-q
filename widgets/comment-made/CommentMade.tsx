import React from "react";

import { CommentMadeProps } from "./types";
import * as Styled from "./CommentMade.styled";

const CommentMade: React.FunctionComponent<CommentMadeProps> = ({
  id,
  comment,
  username,
}) => {
  return (
    <Styled.CommentMade>
      <b style={{ marginTop: 40, fontSize: 25 }}>Comments</b>
      <div>
        <b>
          {username} <span>Your comment</span>
        </b>
        <p>{comment}</p>
      </div>
    </Styled.CommentMade>
  );
};

export default CommentMade;
