import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import authReducer from "./slice/authSlice"

export const store = configureStore({
	reducer: {
		products: productsReducer,
    auth: authReducer,
	},
});
