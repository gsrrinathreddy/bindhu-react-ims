import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numOfFlowers:50,
    orderFlowers:0
}

const flowerSlice=createSlice({
    name:'flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.numOfFlowers<action.payload){
                console.log('Out of stock')
            }
            else{
            state.numOfFlowers-=action.payload.qty;
            state.orderFlowers+=parseInt(action.payload.qty);
        }
    },
        restocked:(state,action)=>{
            state.numOfFlowers+=action.payload;
        }
    }

})
export default flowerSlice.reducer;
export const {ordered,restocked} =flowerSlice.actions;