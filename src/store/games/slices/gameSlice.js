import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  genre: "",
};

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