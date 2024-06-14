import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HttpMethods } from "../httpMethods";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/file",
  }),

  endpoints: (build) => ({
    download: build.query<string, string>({
      query: (FileId: string) => ({
        url: `/download/${FileId}`,
        credentials: "include",
      }),
    }),
    upload: build.mutation<{ fileId: string }, FormData>({
      query: (data) => ({
        url: `/upload`,
        method: HttpMethods.POST,
        body: data,
        credentials: "include",
      }),
    }),
  }),
});
