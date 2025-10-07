import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SeachTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.SeachTerm = action.payload;
    },
    clearSearch: (state) => {
      state.SeachTerm = "";
    },
  },
});

export const { setSearchTerm, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
