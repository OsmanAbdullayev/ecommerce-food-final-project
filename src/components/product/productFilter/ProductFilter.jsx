import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER, SET_CATEGORY, SET_PRICE, SET_SPICY, SET_VEGETARIAN, selectCategory, selectFilteredProducts, selectMaxPriceFilter, selectSpicy, selectVegetarian } from "../../../redux/slice/filterSlice";
import { selectMaxPrice, selectMinPrice, selectProducts } from "../../../redux/slice/productsSlice";
import styles from "./ProductFilter.module.scss";
import { Button, ButtonGroup, Form } from "react-bootstrap";

const ProductFilter = () => {
	const products = useSelector(selectProducts);
	const minPrice = useSelector(selectMinPrice);
	const maxPrice = useSelector(selectMaxPrice);

	const category = useSelector(selectCategory);
	const vegetarian = useSelector(selectVegetarian);
	const spicy = useSelector(selectSpicy);
	const maxPriceFilter = useSelector(selectMaxPriceFilter);

	const dispatch = useDispatch();

	const allCategories = ["All", ...new Set(products.map((product) => product.category))];

	// useEffect(() => {
	// 	dispatch(FILTER_VEGETARIAN({ products, vegetarian }));
	// }, [dispatch, products, vegetarian]);

	// useEffect(() => {
	// 	dispatch(FILTER_SPICY({ products, spicy }));
	// }, [dispatch, products, spicy]);

	// useEffect(() => {
	// 	dispatch(FILTER_BY_PRICE({ products, price }));
	// }, [dispatch, products, price]);

	useEffect(() => {
		dispatch(FILTER({ products }));
	}, [dispatch, products, category, spicy, vegetarian, maxPriceFilter]);

	useEffect(() => {
		dispatch(SET_PRICE(maxPrice ? maxPrice : 1));
	}, [maxPrice]);

	const clearFilters = () => {
		dispatch(SET_CATEGORY("All"));
		dispatch(SET_PRICE(maxPrice));
		dispatch(SET_VEGETARIAN(false));
		dispatch(SET_SPICY(false));
	};

	return (
		<aside>
			<h4 className="mt-4 mb-3 text-center">Categories</h4>
			<div className="shadow p-2">
				<ButtonGroup vertical className="w-100">
					{allCategories.map((cat, index) => {
						return (
							<Button variant="light" key={index} className={`${category}` === cat ? `active text-dark` : `text-dark`} onClick={() => dispatch(SET_CATEGORY(cat))}>
								&#8250; {cat}
							</Button>
						);
					})}
				</ButtonGroup>

				<Form>
					<Form.Check className="my-3" type="switch" label="Vegetarian" onClick={() => dispatch(SET_VEGETARIAN(!vegetarian))} />
					<Form.Check className="my-3" type="switch" label="Spicy" onClick={() => dispatch(SET_SPICY(!spicy))} />
				</Form>

				<Form.Label>
					<p>Max price: {`$${maxPriceFilter}`}</p>
				</Form.Label>
				<Form.Range value={maxPriceFilter} min={minPrice} max={maxPrice} onChange={(e) => dispatch(SET_PRICE(e.target.value))} />

				<Button className="my-3" onClick={clearFilters}>
					Clear Filters
				</Button>
			</div>
		</aside>
	);
};

export default ProductFilter;
