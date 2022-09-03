export interface UserProps {
  id: string;
  password: string;
  username: string;
}

export interface MovieProps {
  id: number;
  adult: false;
  backdrop_path: string;
  genre_ids: Array<number>;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
