import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER, SET_CATEGORY, SET_PRICE, SET_SPICY, SET_VEGETARIAN, selectCategory, selectMaxPriceFilter, selectSpicy, selectVegetarian } from "../../../redux/slice/filterSlice";
import { selectMaxPrice, selectMinPrice, selectProducts } from "../../../redux/slice/productsSlice";
// import styles from "./ProductFilter.module.scss";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";

import { useTranslation } from "react-i18next";

const ProductFilter = () => {
	const { t } = useTranslation();
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
		dispatch(SET_CATEGORY(category));
		// dispatch(SET_VEGETARIAN(false));
		// dispatch(SET_SPICY(false));
		dispatch(SET_PRICE(maxPrice ? maxPrice : 10000));
	}, [dispatch, category, maxPrice]);

	const clearFilters = () => {
		dispatch(SET_CATEGORY("All"));
		dispatch(SET_PRICE(maxPrice));
		dispatch(SET_VEGETARIAN(false));
		dispatch(SET_SPICY(false));
	};

	return (
		<aside>
			<h4 className="mt-4 mb-3 text-center">{t(`categories`)}</h4>
			<div className="shadow p-2">
				<Row>
					<Col lg={12} md={12} xs={6} sm={12}>
						<ButtonGroup vertical className="w-100">
							{allCategories.map((cat, index) => {
								return (
									<Button variant="light" key={index} className={`${category}` === cat ? `active text-dark` : `text-dark`} onClick={() => dispatch(SET_CATEGORY(cat))}>
										&#8250; {cat}
									</Button>
								);
							})}
						</ButtonGroup>
					</Col>
					<Col lg={12} md={12} xs={6} sm={12}>
						<Form>
							<Form.Check checked={vegetarian} className="my-3" type="switch" label={t(`vegetarian`)} onChange={() => dispatch(SET_VEGETARIAN(!vegetarian))} />
							<Form.Check checked={spicy} className="my-3" type="switch" label={t(`spicy`)} onChange={() => dispatch(SET_SPICY(!spicy))} />
						</Form>

						<Form.Label>
							<p>
								{t(`maxprice`)} {`$${maxPriceFilter}`}
							</p>
						</Form.Label>
						<Form.Range value={maxPriceFilter} min={minPrice} max={maxPrice} onChange={(e) => dispatch(SET_PRICE(e.target.value))} />

						<Button className="my-3" onClick={clearFilters}>
							{t(`clearfilters`)}
						</Button>
					</Col>
				</Row>
			</div>
		</aside>
	);
};

export default ProductFilter;
