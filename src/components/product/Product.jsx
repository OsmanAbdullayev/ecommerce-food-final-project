import React, { useEffect } from "react";
import useFetchCollection from "../../customHooks/useFetchCollection";
import ProductFilter from "./productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
// import styles from "./Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRICE_RANGE, selectProducts, STORE_PRODUCTS } from "../../redux/slice/productsSlice";
import Loader from "../loader/Loader";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Product = () => {
	const { t } = useTranslation();
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
		<Container className="mb-3">
			<h1 className="text-center mt-4">{t(`menu`)}</h1>
			
			<Row>
				<Col lg={3} md={4} sm={12}>
					{isLoading ? null : <ProductFilter />}
				</Col>
				<Col lg={9} md={8} sm={12}>
					{isLoading ? <Loader /> : <ProductList products={products} />}
				</Col>
			</Row>
		</Container>
	);
};

export default Product;
