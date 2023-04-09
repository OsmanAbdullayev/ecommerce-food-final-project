import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_BY_CATEGORY, FILTER_VEGETARIAN, selectFilteredProducts } from "../../../redux/slice/filterSlice";
import { selectProducts } from "../../../redux/slice/productsSlice";
import styles from "./ProductFilter.module.scss";

const ProductFilter = () => {
	const [category, setCategory] = useState("All");
	const [vegetarian, setVegetarian] = useState();
	const products = useSelector(selectProducts);
	const dispatch = useDispatch();

	const allCategories = ["All", ...new Set(products.map((product) => product.category))];

	useEffect(() => {
		dispatch(FILTER_VEGETARIAN({ products, vegetarian }));
		console.log(vegetarian);
	}, [dispatch, products, vegetarian]);
	const filterProducts = (cat) => {
		setCategory(cat);
		dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
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
				<input type="checkbox" id="vegetarian-checkbox" value={} name="vegetarian" onChange={(e) => setVegetarian(e.target.value)} />
				<label htmlFor="vegetarian">Vegetarian</label>
			</div>
			<h4>Price</h4>
			<p>14</p>
			<div className={styles.price}>
				<input type="range" name="price" min={1} max={100} />
			</div>
			<br />
			<button>Clear Filter</button>
		</div>
	);
};

export default ProductFilter;
