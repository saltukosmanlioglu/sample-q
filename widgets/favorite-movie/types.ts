import { MovieProps } from "@/app/types";

export interface FavoriteMovieProps {
  onAdd: () => void;
}

export interface FavoriteMovieRequest {
  id: string;
  createdDate: string;
  movie: MovieProps;
  userId: string;
}
