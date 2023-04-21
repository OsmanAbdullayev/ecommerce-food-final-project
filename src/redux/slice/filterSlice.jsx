import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filteredProducts: [],

	category: "all",
	vegetarian: false,
	spicy: false,
	maxPriceFilter: 1,
	sort: "latest",
	search: "",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		SET_CATEGORY(state, action) {
			state.category = action.payload;
		},
		SET_VEGETARIAN(state, action) {
			state.vegetarian = action.payload;
		},

		SET_SPICY(state, action) {
			state.spicy = action.payload;
		},

		SET_PRICE(state, action) {
			state.maxPriceFilter = action.payload;
		},

		SET_SORT(state, action) {
			state.sort = action.payload;
		},

		SET_SEARCH(state, action) {
			state.search = action.payload;
		},

		FILTER(state, action) {
			const { products } = action.payload;
			let tempProductsCat = [];
			let tempProductsSpicy = [];
			let tempProductsVeg = [];
			let tempProductsPrice = [];
			let tempProductsSort = [];
			let tempProductsSearch = [];

			if (state.category === "All") {
				tempProductsCat = products;
			} else {
				tempProductsCat = products.filter((product) => product.category === state.category);
			}

			if (state.vegetarian === undefined || state.vegetarian === false) {
				tempProductsVeg = tempProductsCat;
			} else {
				tempProductsVeg = tempProductsCat.filter((product) => product.vegetarian === state.vegetarian);
			}
			if (state.spicy === undefined || state.spicy === false) {
				tempProductsSpicy = tempProductsVeg;
			} else {
				tempProductsSpicy = tempProductsVeg.filter((product) => product.spicy === state.spicy);
			}
			tempProductsPrice = tempProductsSpicy.filter((product) => product.price <= state.maxPriceFilter);

			if (state.sort === "latest") {
				tempProductsSort = tempProductsPrice;
			}
			if (state.sort === "lowest-price") {
				tempProductsSort = tempProductsPrice.slice().sort((a, b) => {
					return a.price - b.price;
				});
			}
			if (state.sort === "highest-price") {
				tempProductsSort = tempProductsPrice.slice().sort((a, b) => {
					return b.price - a.price;
				});
			}

			if (state.sort === "a-z") {
				tempProductsSort = tempProductsPrice.slice().sort((a, b) => {
					return a.name.localeCompare(b.name);
				});
			}

			if (state.sort === "z-a") {
				tempProductsSort = tempProductsPrice.slice().sort((a, b) => {
					return b.name.localeCompare(a.name);
				});
			}

			tempProductsSearch = tempProductsSort.filter((product) => product.name.toLowerCase().includes(state.search.toLowerCase()) || product.category.toLowerCase().includes(state.search.toLowerCase()));

			state.filteredProducts = tempProductsSearch;
		},
	},
});

export const { FILTER_BY_SEARCH, SORT_PRODUCTS, FILTER, SET_CATEGORY, SET_PRICE, SET_SPICY, SET_VEGETARIAN, SET_SORT, SET_SEARCH } = filterSlice.actions;
export const selectFilteredProducts = (state) => state.filter.filteredProducts;
export const selectCategory = (state) => state.filter.category;
export const selectVegetarian = (state) => state.filter.vegetarian;
export const selectSpicy = (state) => state.filter.spicy;
export const selectMaxPriceFilter = (state) => state.filter.maxPriceFilter;
export const selectSort = (state) => state.filter.sort;
export const selectSearch = (state) => state.filter.search;

export default filterSlice.reducer;
