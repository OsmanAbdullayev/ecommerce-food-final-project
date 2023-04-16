import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	previousURL: "",
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		SAVE_URL(state, action) {
			state.previousURL = action.payload;
		},
	},
});

export const { SAVE_URL } = cartSlice.actions;

export const selectPreviousURL = (state) => state.cart.previousURL;

export default cartSlice.reducer;
