import { createSlice, nanoid } from "@reduxjs/toolkit";
import menu from "../../data/menu";

const initialState = {
	products: [],
};

const productsSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		STORE_PRODUCTS(state, action) {
			console.log(action.payload);
			state.products = action.payload.products;
		},
	},
});

export const { STORE_PRODUCTS } = productsSlice.actions;
export const selectProducts = (state) => state.product.products;

export default productsSlice.reducer;
