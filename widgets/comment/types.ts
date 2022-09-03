export interface CommentProps {
  onSubmit: (values: any) => void;
}

export interface CommentRequest {
  comment: string;
  createdDate: string;
  movieId: number;
  userId: string;
}
