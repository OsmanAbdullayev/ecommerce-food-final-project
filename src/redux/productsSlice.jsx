import { createSlice, nanoid } from "@reduxjs/toolkit";
import menu from "../data/menu";

const initialState = menu;

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		productAdded: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(title, price) {
				return {
					payload: {
						id: nanoid(),
						title,
						price,
					},
				};
			},
		},
	},
});

export const selectAllProducts = (state) => state.products;

export const { productAdded } = productsSlice.actions;

export default productsSlice.reducer;
