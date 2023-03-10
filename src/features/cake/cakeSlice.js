import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 50,
  ordercakes: 0,
  FavoriteCakes: 0,
  cakeArray: {
    qty: 0,
    name: null,
    actualPrice: null,
    discountedPrice: null,
  },
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (state.numOfCakes < action.payload) {
        console.log("Out of stock");
      } else {
        console.log(action.payload);
        state.numOfCakes -= action.payload.qty;
        state.ordercakes += parseInt(action.payload.qty);

        state.cakeArray.qty = action.payload.qty;
        state.cakeArray.name = action.payload.name;
        state.cakeArray.actualPrice = action.payload.actualPrice;
        state.cakeArray.discountedPrice = action.payload.discountPrice;
      }
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
    wished: (state, action) => {
      state.FavoriteCakes += parseInt(action.payload.qty);
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked, wished } = cakeSlice.actions;
