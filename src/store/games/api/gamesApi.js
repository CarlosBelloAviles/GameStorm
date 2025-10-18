import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export const gamesApi = createApi({
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
    fetchSearch: builder.query({
      query: ({searchTerm}) =>
        `games?key=${apiKey}&search=${searchTerm}&page=1&page_size=20`,
    })
  })
});

export const { useFetchGamesQuery, useFetchGenresQuery, useFetchSearchQuery } = gamesApi;