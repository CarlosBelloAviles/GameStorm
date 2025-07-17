import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_API_KEY;

export const apiSlice = createApi({
  reducerPath: "apiGames",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api/",
  }),
  endpoints: (builder) => ({
    fetchGames: builder.query({
      query: ({ page = 1, genre = "" }) =>
        `games?key=${apiKey}&page=${page}${genre ? `&genres=${genre}` : ""}`,
    }),
    fetchGenres: builder.query({
      query: () => `genres?key=${apiKey}`,
    }),
  }),
});


export const { useFetchGamesQuery, useFetchGenresQuery } = apiSlice;
