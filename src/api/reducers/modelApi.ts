import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HttpMethods } from "../httpMethods";

export interface Predict {
  modelId: string;
  fileId: string;
}

export const modelApi = createApi({
  reducerPath: "modelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),

  endpoints: (build) => ({
    classify: build.mutation<{ predictedFileId: string }, Predict>({
      query: (data) => ({
        url: `/classify`,
        method: HttpMethods.POST,
        body: data,
        credentials: "include",
      }),
    }),
    detect: build.mutation<{ predictedFileId: string }, Predict>({
      query: (data) => ({
        url: `/detect`,
        method: HttpMethods.POST,
        body: data,
        credentials: "include",
      }),
    }),
    pose: build.mutation<{ predictedFileId: string }, Predict>({
      query: (data) => ({
        url: `/pose`,
        method: HttpMethods.POST,
        body: data,
        credentials: "include",
      }),
    }),
    segment: build.mutation<{ predictedFileId: string }, Predict>({
      query: (data) => ({
        url: `/segment`,
        method: HttpMethods.POST,
        body: data,
        credentials: "include",
      }),
    }),
  }),
});
