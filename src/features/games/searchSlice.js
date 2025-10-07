import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SearchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.SearchTerm = action.payload;
    },
    clearSearch: (state) => {
      state.SearchTerm = "";
    },
  },
});

export const { setSearchTerm, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
