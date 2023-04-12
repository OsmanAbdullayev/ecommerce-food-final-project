import React, { useEffect } from "react";
import useFetchCollection from "../../customHooks/useFetchCollection";
import ProductFilter from "./productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
import styles from "./Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRICE_RANGE, selectProducts, STORE_PRODUCTS } from "../../redux/slice/productsSlice";
import spinnerImg from "../../assets/loader.gif";

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

		dispatch(
			GET_PRICE_RANGE({
				products: data,
			})
		);
	}, [dispatch, data]);
	return (
		<section>
			<div className={`container ${styles.product}`}>
				<aside className={styles.filter}>{isLoading ? null : <ProductFilter />}</aside>
				<div className={styles.content}>{isLoading ? <img src={spinnerImg} alt="Loading..." style={{ width: "50px" }} className="text-center m-3" /> : <ProductList products={products} />}</div>
			</div>
			<h2>Product</h2>
		</section>
	);
};

export default Product;
