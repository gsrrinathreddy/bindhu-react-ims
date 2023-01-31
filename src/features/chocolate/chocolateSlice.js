import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState={
    numOfChocolates:50,
    orderChocolates:0,
    chocolateList:{
        qty:0,
        name:null,
        actualPrice:null,
        discountedPrice:null
    }
}

const ChocolateSlice=createSlice({
    name:'chocolate',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.numOfChocolates<action.payload){
                console.log('Out of stock')
            }
            else{
            state.numOfChocolates-=action.payload.qty;
            state.orderChocolates+=parseInt(action.payload.qty);

            state.chocolateList.actualPrice=action.payload.actualPrice;
            state.chocolateList.discountedPrice=action.payload.discountPrice;
            state.chocolateList.name=action.payload.name;
            state.chocolateList.qty=action.payload.qty;
        }
    },
        restocked:(state,action)=>{
            state.numOfChocolates+=action.payload;
        }
    }

})
export default ChocolateSlice.reducer;
export const {ordered,restocked} =ChocolateSlice.actions;