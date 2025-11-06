import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export const gamesApi = createApi({
  reducerPath: "apiGames",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api/",
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchGames: builder.query({
      query: ({ page = 1, genre = "" }) => ({
        url: `games`,
        params: {
          key: apiKey,
          page: page,
          ...(genre && { genres: genre }),
        },
      }),
    }),
    fetchGenres: builder.query({
      query: () => ({
        url: 'genres',
        params: {
          key: apiKey
        },
      }),
    }),
    fetchSearch: builder.query({
      query: ({searchTerm}) => ({
        url: 'games',
        params: {
          key: apiKey,
          search: searchTerm,
          page: 1,
          page_size: 20
        },
      }),
    })
  })
});

export const { useFetchGamesQuery, useFetchGenresQuery, useFetchSearchQuery } = gamesApi;