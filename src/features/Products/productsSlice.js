import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { loading: false, products: [], error: "" };
export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios
    .get("https://dummyjson.com/products")
    .then((response) => response.data.products);
});
const productsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (bulider) => {
    bulider.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    bulider.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    bulider.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});
export default productsSlice.reducer;
