import { createSlice } from "@reduxjs/toolkit";

// Establece el estado inicial del slice
const initialState = {
  page: 1,
  genre: "",
};
// Crea el slice de Redux para manejar la paginación y el género de los juegos
const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setGenre: (state, action) => {
        state.genre = action.payload;
        state.page = 1;
    },
  },
});

export const { setPage, setGenre } = gameSlice.actions;
export default gameSlice.reducer;
