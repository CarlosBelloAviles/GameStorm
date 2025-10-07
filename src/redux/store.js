import { configureStore } from "@reduxjs/toolkit"; 
import gamesReducer from "../features/games/gameSlice";
import { apiSlice } from "../services/apiSlice";
import favoritesReducer from "../features/games/favoritesSlice";
import searchReducer from "../features/games/searchSlice"



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        games: gamesReducer,
        favorites: favoritesReducer,
        search: searchReducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
}) 