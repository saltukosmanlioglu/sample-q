import service from "../instance";

import { ShowsParams, ShowsResponse } from "./types";

export const list = (params?: ShowsParams) =>
  service.get<ShowsResponse>("", { params });
