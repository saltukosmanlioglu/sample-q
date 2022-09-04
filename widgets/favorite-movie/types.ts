import { MovieProps } from "@/app/types";

export interface FavoriteMovieProps {
  onAdd: () => void;
  onRemove: () => void;
  isFavorite: boolean;
}

export interface FavoriteMovieRequest {
  createdDate: string;
  movie: MovieProps;
  userId: string;
}
