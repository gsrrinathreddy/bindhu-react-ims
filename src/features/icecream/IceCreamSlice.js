import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfIcecreams: 20,
  ordericecream: 0,
  FavoriteIcecreams: 0,
  icecreamList: {
    qty: 0,
    name: null,
    actualPrice: null,
    discountedPrice: null,
  },
};

const IceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (state.noOfIcecreams < action.payload) {
        console.log("Out of stock");
      } else {
        state.noOfIcecreams -= action.payload.qty;
        state.ordericecream += parseInt(action.payload.qty);

        state.icecreamList.actualPrice = action.payload.actualPrice;
        state.icecreamList.discountedPrice = action.payload.discountPrice;
        state.icecreamList.name = action.payload.name;
        state.icecreamList.qty = action.payload.qty;
      }
    },
    restocked: (state, action) => {
      state.noOfIcecreams += action.payload;
    },
    wished: (state, action) => {
      state.FavoriteIcecreams += parseInt(action.payload.qty);
    },
  },
  extraReducers: {
    ["Cake/ordered"]: (state, action) => {
      if (action.payload >= 1) state.noOfIcecreams--;
      state.ordericecream++;
    },
  },
});
export default IceCreamSlice.reducer;
export const { ordered, restocked, wished } = IceCreamSlice.actions;
