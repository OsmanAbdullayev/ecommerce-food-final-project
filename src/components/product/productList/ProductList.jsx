import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FILTER, selectCategory, selectFilteredProducts, selectSearch, selectSort, SET_CATEGORY, SET_SEARCH, SET_SORT } from "../../../redux/slice/filterSlice";
import PaginationComponent from "../../pagination/PaginationComponent";
import Search from "../../search/Search";
import ProductItem from "../productItem/ProductItem";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "../../../routers/AppRouter";
// import styles from "./ProductList.module.scss";

const ProductList = ({ products }, props) => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);
	const [grid, setGrid] = useState(true);
	const filteredProducts = useSelector(selectFilteredProducts);
	const productsCount = filteredProducts.length;
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 8;

	const lastProductNumber = currentPage * productsPerPage;
	const firstProductNumber = lastProductNumber - productsPerPage;
	const currentProducts = filteredProducts.slice(firstProductNumber, lastProductNumber);

	const dispatch = useDispatch(selectFilteredProducts);

	const category = useSelector(selectCategory);
	const sort = useSelector(selectSort);

	const search = useSelector(selectSearch);

	useEffect(() => {
		dispatch(FILTER({ products }));
	}, [dispatch, products, sort, search]);

	useEffect(() => {
		dispatch(SET_SORT(sort));
		dispatch(SET_CATEGORY(category));
		dispatch(SET_SEARCH(search));
	}, [dispatch, sort, category, search]);

	return (
		<div id="product">
			<Row gutter={3} className="my-3">
				<Col className="my-1" lg={3} md={6} sm={6}>
					<Search
						value={search}
						onChange={(e) => {
							dispatch(SET_SEARCH(e.target.value));
						}}
					/>
				</Col>

				<Col className="my-1" lg={3} md={6} sm={6}>
					<Form.Select className={colorMode === `dark` ? `bg-dark text-white` : ``} onChange={(e) => dispatch(SET_SORT(e.target.value))}>
						<option value="latest">{t(`sortby`)}</option>
						<option value="latest">{t(`latest`)}</option>
						<option value="lowest-price">{t(`lowestprice`)}</option>
						<option value="highest-price">{t(`highestprice`)}</option>
						<option value="a-z">A-Z</option>
						<option value="z-a">Z-A</option>
					</Form.Select>
				</Col>
				<Col className="my-1 d-flex justify-content-start align-items-start" lg={3} md={6} sm={6}>
					<p className="text-center h-100 text-nowrap">
						<b>{filteredProducts.length}</b> {t(`productsfound`)}
					</p>
				</Col>

				<Col className="my-1 d-flex justify-content-end align-items-center" lg={3} md={6} sm={6}>
					<Button
						className={colorMode === `dark` ? `bg-dark text-white me-2` : `me-2`}
						onClick={() => {
							setGrid(true);
						}}>
						<BsFillGridFill
							size={22}
							onClick={() => {
								setGrid(true);
							}}
						/>
					</Button>
					<Button
						className={colorMode === `dark` ? `bg-dark text-white ` : ``}
						onClick={() => {
							setGrid(false);
						}}>
						<FaListAlt
							size={24}
							onClick={() => {
								setGrid(false);
							}}
						/>
					</Button>
				</Col>
			</Row>

			{/* <div className={grid ? `${styles.grid}` : `${styles.list}`}> */}

			<Row className="g-2 my-1">
				{products.length === 0 ? (
					<p>No product found.</p>
				) : (
					<>
						{currentProducts.map((product) => {
							return (
								<Col key={product.id} xxl={grid ? 3 : 12} xl={grid ? 4 : 12} lg={grid ? 6 : 12} md={grid ? 6 : 12} sm={grid ? 6 : 12} xs={grid ? 6 : 12}>
									<ProductItem {...product} grid={grid} product={product} addProduct={product} />
								</Col>
							);
						})}
					</>
				)}
			</Row>
			{/* </div> */}
			<PaginationComponent itemsCount={productsCount} itemsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} alwaysShown={false} />
		</div>
	);
};

export default ProductList;
