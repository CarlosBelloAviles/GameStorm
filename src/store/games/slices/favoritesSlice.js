import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter((item => item.id !== action.payload));
    }
  },
});

export const { addFavorite, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;