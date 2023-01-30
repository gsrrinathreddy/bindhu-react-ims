import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numOfChocolates:50,
    orderChocolates:0
}

const ChocolateSlice=createSlice({
    name:'Chocolate',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.numOfChocolates<action.payload){
                console.log('Out of stock')
            }
            else{
            state.numOfChocolates-=action.payload;
            state.orderChocolates+=(action.payload);
        }
    },
        restocked:(state,action)=>{
            state.numOfChocolates+=action.payload;
        }
    }

})
export default ChocolateSlice.reducer;
export const {ordered,restocked} =ChocolateSlice.actions;