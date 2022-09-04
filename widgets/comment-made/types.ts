import { UserProps } from "@/app/types";

export interface CommentMadeProps {
  comment: string;
  createdDate: string;
  activeUser: Omit<UserProps, "password">;
  userId: string;
  username: string;
}
