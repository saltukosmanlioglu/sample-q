import { UserProps } from "@/app/types";

export interface CommentMadeProps {
  comment: string;
  createdDate: string;
  activeUser: UserProps;
  userId: string;
  username: string;
}
