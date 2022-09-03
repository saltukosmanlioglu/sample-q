import { MovieCardProps } from "@/components/movie-card";

import service from "../instance";

import { ShowsParams } from "./types";

export const list = (params?: ShowsParams) =>
  service.get<{ results: Array<MovieCardProps> }>("", { params });
