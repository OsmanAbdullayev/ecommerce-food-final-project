import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	wishlistItems: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [],
	wishlistTotalQuantity: 0,
	previousURL: "",
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		TOGGLE_WISHLIST(state, action) {
			//   console.log(action.payload);
			const productIndex = state.wishlistItems.findIndex((item) => item.id === action.payload.id);

			if (productIndex >= 0) {
				const newWishlistItem = state.wishlistItems.filter((item) => item.id !== action.payload.id);

				state.wishlistItems = newWishlistItem;
				console.log();
				toast.success(`${action.payload.name} removed from wishlist`, {
					position: "top-left",
				});
			} else {
				// Item doesn't exists in the wishlist
				// Add item to the wishlist
				const tempProduct = { ...action.payload, wishlistQuantity: 1 };
				state.wishlistItems.push(tempProduct);
				toast.success(`${action.payload.name} added to wishlist`, {
					position: "top-left",
				});
			}
			// save wishlist to LS
			localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
		},

		REMOVE_FROM_WISHLIST(state, action) {
			const newWishlistItem = state.wishlistItems.filter((item) => item.id !== action.payload.id);

			state.wishlistItems = newWishlistItem;
			console.log();
			toast.success(`${action.payload.name} removed from wishlist`, {
				position: "top-left",
			});

			localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
		},

	

		CALCULATE_TOTAL_QUANTITY(state, action) {
			const array = [];
			state.wishlistItems.map((item) => {
				const { wishlistQuantity } = item;
				const quantity = wishlistQuantity;
				return array.push(quantity);
			});
			const totalQuantity = array.reduce((a, b) => {
				return a + b;
			}, 0);
			state.wishlistTotalQuantity = totalQuantity;
		},

		CLEAR_WISHLIST(state, action) {
			state.wishlistItems = [];
			toast.info(`Wishlist cleared`, {
				position: "top-left",
			});

			localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
		},
	},
});

export const {
	TOGGLE_WISHLIST,

	REMOVE_FROM_WISHLIST,
	CLEAR_WISHLIST,
	CALCULATE_TOTAL_QUANTITY,
} = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.wishlistItems;

export const selectPreviousURL = (state) => state.wishlist.previousURL;

export default wishlistSlice.reducer;
