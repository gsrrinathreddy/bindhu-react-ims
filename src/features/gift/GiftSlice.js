import { createSlice } from "@reduxjs/toolkit";

const initialState={
    noOfGifts:20,
    orderGift:0
}

const GiftSlice=createSlice({
    name:'gift',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.noOfGifts<action.payload){
                console.log('Out of stock')}
                else{
            state.noOfGifts-=action.payload.qty;
            state.orderGift+= parseInt(action.payload.qty);}
        },
        restocked:(state,action)=>{
            state.noOfGifts+=action.payload;
        }
    }
})

export default  GiftSlice.reducer;
export const {ordered,restocked} =GiftSlice.actions;