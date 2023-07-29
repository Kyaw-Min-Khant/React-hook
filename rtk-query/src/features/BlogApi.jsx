import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: [`blogApi`],
  endpoints: (builders) => ({
    getBlogApi: builders.query({
      query: () => "/blog",
      providesTags: [`blogApi`],
    }),
  }),
});
export const { useGetBlogApiQuery } = blogApi;
