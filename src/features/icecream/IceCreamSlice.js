import { createSlice } from "@reduxjs/toolkit";

const initialState={
noOfIcecreams:20,
ordericecream:0
}

const IceCreamSlice =createSlice({
name:'icecream',
initialState,
reducers:{
    orderedicecream:(state,action)=>{
        if(state.noOfIcecreams<action.payload){
            console.log('Out of stock')}
            else{
        state.noOfIcecreams-=action.payload;
        state.ordericecream+=(action.payload)
    }
    },
    restockedicecream:(state,action)=>{
        state.noOfIcecreams+=action.payload
    }
},
extraReducers:{
    ['Cake/ordered']:(state,action)=>{
        if(action.payload>=1)
        state.noOfIcecreams--;
        state.ordericecream++;
    }
}
})
export default IceCreamSlice.reducer;
export const {orderedicecream,restockedicecream}=IceCreamSlice.actions;