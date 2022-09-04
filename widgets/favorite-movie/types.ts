import { MovieProps } from "@/app/types";

export interface FavoriteMovieProps {
  isFavorite: boolean;
  onAdd: () => void;
  onRemove: () => void;
}

export interface FavoriteMovieRequest {
  createdDate: string;
  movie: MovieProps;
  userId: string;
}
