import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/IceCreamSlice';
import chocolateReducer from '../features/chocolate/chocolateSlice';
import giftReducer from '../features/gift/GiftSlice';
import flowerReducer from '../features/flower/flowerSlice';
import cartReducer from '../features/cart/cartSlice';
const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        chocolate:chocolateReducer,
        gift:giftReducer,
        flower:flowerReducer,
        cart:cartReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})
export default store;