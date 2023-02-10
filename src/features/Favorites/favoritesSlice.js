import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favList: [],
  totalItems: 0,
};
const favoritesSlice = createSlice({
  name: "Favorites",
  initialState,
  extraReducers: {
    ["cake/wished"]: (state, action) => {
      console.log("Favorites", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["flower/wished"]: (state, action) => {
      console.log("Favorites", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["gift/wished"]: (state, action) => {
      console.log("Favorites", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["icecream/wished"]: (state, action) => {
      console.log("Favorites", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["chocolate/wished"]: (state, action) => {
      console.log("Favorites", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
  },
});
export default favoritesSlice.reducer;
