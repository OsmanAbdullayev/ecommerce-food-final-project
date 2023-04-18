import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filteredProducts: [],
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		FILTER_BY_SEARCH(state, action) {
			const { products, search } = action.payload;
			const tempProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()));

			state.filteredProducts = tempProducts;
		},
		SORT_PRODUCTS(state, action) {
			const { products, sort } = action.payload;
			let tempProducts = [];
			if (sort === "latest") {
				tempProducts = state.filteredProducts;
			}
			if (sort === "lowest-price") {
				tempProducts = state.filteredProducts.slice().sort((a, b) => {
					return a.price - b.price;
				});
			}
			if (sort === "highest-price") {
				tempProducts = state.filteredProducts.slice().sort((a, b) => {
					return b.price - a.price;
				});
			}

			if (sort === "a-z") {
				tempProducts = state.filteredProducts.slice().sort((a, b) => {
					return a.name.localeCompare(b.name);
				});
			}

			if (sort === "z-a") {
				tempProducts = state.filteredProducts.slice().sort((a, b) => {
					return b.name.localeCompare(a.name);
				});
			}

			state.filteredProducts = tempProducts;
		},

		FILTER(state, action) {
			const { products, category, vegetarian, spicy, price } = action.payload;
			let tempProducts = [];
			let tempProductsCat = [];
			let tempProductsSpicy = [];
			let tempProductsVeg = [];

			if (category === "All") {
				tempProductsCat = products;
			} else {
				tempProductsCat = products.filter((product) => product.category === category);
			}
			if (vegetarian === false) {
				tempProductsVeg = tempProductsCat;
			} else {
				tempProductsVeg = tempProductsCat.filter((product) => product.vegetarian === vegetarian);
			}
			if (spicy === false) {
				tempProductsSpicy = tempProductsVeg;
			} else {
				tempProductsSpicy = tempProductsVeg.filter((product) => product.spicy === spicy);
			}
			tempProducts = tempProductsSpicy.filter((product) => product.price <= price);



			state.filteredProducts = tempProducts;
		},

	// 	FILTER_BY_CATEGORY(state, action) {
	// 		const { products, category } = action.payload;
	// 		let tempProducts = [];
	// 		if (category === "All") {
	// 			tempProducts = products;
	// 		} else {
	// 			tempProducts = products.filter((product) => product.category === category);
	// 		}
	// 		state.filteredProducts = tempProducts;
	// 	},

	// 	FILTER_VEGETARIAN(state, action) {
	// 		const { products, vegetarian } = action.payload;
	// 		let tempProducts = [];
	// 		if (vegetarian === false) {
	// 			tempProducts = products;
	// 		} else {
	// 			tempProducts = products.filter((product) => product.vegetarian === true);
	// 		}
	// 		state.filteredProducts = tempProducts;
	// 		// console.log("vegetarian dispatched");
	// 	},
	// 	FILTER_SPICY(state, action) {
	// 		const { products, spicy } = action.payload;
	// 		let tempProducts = [];
	// 		if (spicy === false) {
	// 			tempProducts = products;
	// 		} else {
	// 			tempProducts = products.filter((product) => product.spicy === true);
	// 		}
	// 		state.filteredProducts = tempProducts;
	// 		// console.log("spicy dispatched");
	// 	},

	// 	FILTER_BY_PRICE(state, action) {
	// 		const { products, price } = action.payload;
	// 		let tempProducts = [];
	// 		tempProducts = products.filter((product) => product.price <= price);

	// 		state.filteredProducts = tempProducts;
	// 	},
	},
});

export const { FILTER_BY_SEARCH, SORT_PRODUCTS, FILTER } = filterSlice.actions;
export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
