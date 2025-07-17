import { configureStore } from "@reduxjs/toolkit"; 
import gamesReducer from "../features/games/gameSlice";
import { apiSlice } from "../services/apiSlice";
import favoritesReducer from "../features/games/favoritesSlice";



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        games: gamesReducer,
        favorites: favoritesReducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
}) 