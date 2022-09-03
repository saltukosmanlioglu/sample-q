export type PlotType = "full" | "short";

export type ShowType = "episode" | "movie" | "series";

export interface RatingProps {
  Source: string;
  Value: string;
}

export interface ShowsResponse {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  DVD: string;
  Genre: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Array<RatingProps>;
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
}

export interface ShowsParams {
  id: number;
}