import React, { useEffect } from "react";
import useFetchCollection from "../../customHooks/useFetchCollection";
import ProductFilter from "./productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
import styles from "./Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, STORE_PRODUCTS } from "../../redux/slice/productsSlice";

const Product = () => {
	const { data, isLoading } = useFetchCollection("products");
	const products = useSelector(selectProducts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			STORE_PRODUCTS({
				products: data,
			})
		);
	}, [dispatch, data]);
	return (
		<section>
			<div className={`container ${styles.product}`}>
				<aside className={styles.filter}>
					<ProductFilter />
				</aside>
				<div className={styles.content}>
					<ProductList products={products}/>
				</div>
			</div>
			<h2>Product</h2>
		</section>
	);
};

export default Product;
