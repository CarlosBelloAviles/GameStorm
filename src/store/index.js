import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "./games/api/gamesApi";
import gameReducer from "./games/slices/gameSlice";
import favoritesReducer from "./games/slices/favoritesSlice";
import searchReducer from "./games/slices/searchSlice";

export const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
        games: gameReducer,
        favorites: favoritesReducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gamesApi.middleware)
});