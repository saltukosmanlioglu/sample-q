export interface CommentRequest {
  comment: string;
  createdDate: string;
  movieId: number;
  userId: string;
  username: string;
}

export interface CommentProps {
  onSubmit: (values: CommentRequest) => void;
}
