import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import authReducer from "./slice/authSlice";
import filterReducer from "./slice/filterSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	product: productsReducer,
	filter: filterReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
