import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_BY_CATEGORY, FILTER_BY_PRICE, FILTER_SPICY, FILTER_VEGETARIAN, selectFilteredProducts } from "../../../redux/slice/filterSlice";
import { selectMaxPrice, selectMinPrice, selectProducts } from "../../../redux/slice/productsSlice";
import styles from "./ProductFilter.module.scss";

const ProductFilter = () => {
	const [category, setCategory] = useState("All");
	const [vegetarian, setVegetarian] = useState(false);
	const [spicy, setSpicy] = useState(false);
	const [price, setPrice] = useState(30);
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
		<div className={styles.filter}>
			<h4>Categories</h4>
			<div className={styles.category}>
				{allCategories.map((cat, index) => {
					return (
						<button key={index} className={`${category}` === cat ? `${styles.active}` : null} onClick={() => filterProducts(cat)}>
							&#8250; {cat}
						</button>
					);
				})}
			</div>
			<div className={styles.brand}>
				<input type="checkbox" id="vegetarian-checkbox" name="vegetarian" onClick={() => setVegetarian(!vegetarian)} />
				<label htmlFor="vegetarian">Vegetarian</label>
			</div>

			<div className={styles.brand}>
				<input type="checkbox" id="spicy-checkbox" name="spicy" onClick={() => setSpicy(!spicy)} />
				<label htmlFor="spicy">Spicy</label>
			</div>
			<h4>{maxPrice}</h4>
			<p>{`$${price}`}</p>
			<div className={styles.price}>
				<input type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={(e) => setPrice(e.target.value)} />
			</div>
			<br />
			<button onClick={clearFilters}>Clear Filters</button>
		</div>
	);
};

export default ProductFilter;
