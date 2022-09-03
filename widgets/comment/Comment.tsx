import React from "react";
import { AiOutlineComment } from "react-icons/ai";

import useForm from "@/app/hooks/form";
import Button from "@/components/button";
import Textarea from "@/components/textarea";

import { CommentProps, CommentRequest } from "./types";
import * as Styled from "./Comment.styled";

const Comment: React.FunctionComponent<CommentProps> = ({ onSubmit }) => {
  const form = useForm<CommentRequest>({
    initialValues: {
      comment: "",
      createdDate: "",
      movieId: 0,
      userId: "",
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form.values);
  };

  return (
    <Styled.Comment>
      <form onSubmit={handleSubmit}>
        <Textarea
          errorMessage="Please enter your comment.."
          name="comment"
          onChange={form.handleChange}
          placeholder="Your comment.. *"
          required
          rows={6}
          value={form.values.comment}
        />
        <div>
          <Button
            icon={<AiOutlineComment size={30} />}
            text="Comment"
            type="submit"
          />
        </div>
      </form>
    </Styled.Comment>
  );
};

export default Comment;
