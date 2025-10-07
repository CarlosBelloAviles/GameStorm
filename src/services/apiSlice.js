import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

// Este archivo define un slice de API para manejar las consultas a la API de RAWG
export const apiSlice = createApi({
  reducerPath: 'apiGames',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.rawg.io/api/',
  }),
  endpoints: (builder) => ({
    fetchGenres: builder.query({
      // Usamos queryFn para que reciba el signal de abort
      async queryFn(_ , api, extraOptions, baseQuery) {
        const url = `genres?key=${apiKey}`;
        return await baseQuery(url, api, extraOptions); 
      },
    }),
    fetchGames: builder.query({
      async queryFn({ page = 1, genre = "" }, api, extraOptions, baseQuery) {
        const url = `games?key=${apiKey}&page=${page}${genre ? `&genres=${genre}` : ""}`;
        return await baseQuery(url, api, extraOptions); 
      },
    }),
    fetchSearch: builder.query({
      async queryFn({searchTerm}, api, extraOptions, baseQuery){
        const url = `games?key=${apiKey}&search=${searchTerm}&page=1&page_size=20`;
         return await baseQuery(url, api, extraOptions); 
      }
    })
  }),
});

export const { useFetchGenresQuery, useFetchGamesQuery, useFetchSearchQuery } = apiSlice;



/* export const apiSlice = createApi({
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


export const { useFetchGamesQuery, useFetchGenresQuery, useFetchSearchQuery } = apiSlice; */
