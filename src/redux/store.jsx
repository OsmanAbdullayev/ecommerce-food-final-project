import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	product: productsReducer,
})

const store = configureStore({
	reducer: rootReducer,
})

export default store;