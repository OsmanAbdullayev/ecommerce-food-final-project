import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_BY_CATEGORY, FILTER_BY_PRICE, FILTER_SPICY, FILTER_VEGETARIAN, selectFilteredProducts } from "../../../redux/slice/filterSlice";
import { selectMaxPrice, selectMinPrice, selectProducts } from "../../../redux/slice/productsSlice";
import styles from "./ProductFilter.module.scss";
import { Button, ButtonGroup, Form } from "react-bootstrap";

const ProductFilter = () => {
	const [category, setCategory] = useState("All");
	const [vegetarian, setVegetarian] = useState(false);
	const [spicy, setSpicy] = useState(false);
	const [price, setPrice] = useState(19);
	const products = useSelector(selectProducts);
	const minPrice = useSelector(selectMinPrice);
	const maxPrice = useSelector(selectMaxPrice);

	const dispatch = useDispatch();

	const allCategories = ["All", ...new Set(products.map((product) => product.category))];

	useEffect(() => {
		dispatch(FILTER_VEGETARIAN({ products, vegetarian }));
	}, [dispatch, products, vegetarian]);

	useEffect(() => {
		dispatch(FILTER_SPICY({ products, spicy }));
	}, [dispatch, products, spicy]);

	useEffect(() => {
		dispatch(FILTER_BY_PRICE({ products, price }));
	}, [dispatch, products, price]);

	const filterProducts = (cat) => {
		setCategory(cat);
		dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
		console.log("filter by category dispatched");
	};

	const clearFilters = () => {
		setCategory("All");
		setPrice(maxPrice);
		setVegetarian(false);
		setSpicy(false);
	};

	return (
		<aside >
			<h4 className="mt-4 mb-3 text-center">Categories</h4>
			<div className="shadow p-2">
			<ButtonGroup vertical className="w-100">
				{allCategories.map((cat, index) => {
					return (
						<Button variant="light" key={index} className={`${category}` === cat ? `active text-dark` : `text-dark`} onClick={() => filterProducts(cat)}>
							&#8250; {cat}
						</Button>
					);
				})}
			</ButtonGroup>

			<Form>
					<Form.Check className="my-3" type="switch" label="Vegetarian" onClick={() => setVegetarian(!vegetarian)} />
					<Form.Check className="my-3" type="switch" label="Spicy" onClick={() => setSpicy(!spicy)} />
			</Form>

			<Form.Label><p>Max price: {`$${price}`}</p></Form.Label>
			<Form.Range value={price} min={minPrice} max={maxPrice} onChange={(e) => setPrice(e.target.value)}/>
		
			
			<Button className="my-3" onClick={clearFilters}>Clear Filters</Button>
			</div>
		</aside>
	);
};

export default ProductFilter;
