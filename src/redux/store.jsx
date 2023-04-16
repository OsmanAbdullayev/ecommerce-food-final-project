import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import authReducer from "./slice/authSlice";
import filterReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";
import checkoutReducer from "./slice/checkoutSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	product: productsReducer,
	filter: filterReducer,
	cart: cartReducer,
	checkout: checkoutReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
