import React, { useEffect, useState } from "react";
import { Col, Pagination, Row } from "react-bootstrap";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_BY_SEARCH, selectFilteredProducts, SORT_PRODUCTS } from "../../../redux/slice/filterSlice";
import PaginationComponent from "../../PaginationComponent";
import Search from "../../search/Search";
import ProductItem from "../productItem/ProductItem";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }, props) => {
	const [grid, setGrid] = useState(true);
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("latest");
	const filteredProducts = useSelector(selectFilteredProducts);
	const productsCount = filteredProducts.length;
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(8);

	const lastProductNumber = currentPage * productsPerPage;
	const firstProductNumber = lastProductNumber - productsPerPage;
	const currentProducts = filteredProducts.slice(firstProductNumber, lastProductNumber);

	const dispatch = useDispatch(selectFilteredProducts);
	console.log(currentPage);

	useEffect(() => {
		dispatch(SORT_PRODUCTS({ products, sort }));
	}, [dispatch, products, sort]);

	useEffect(() => {
		dispatch(FILTER_BY_SEARCH({ products, search }));
	}, [dispatch, products, search]);

	return (
		<div className={styles["product-list"]} id="product">
			<div className={styles.top}>
				<div className={styles.icons}>
					<BsFillGridFill
						size={22}
						color="orangered"
						onClick={() => {
							setGrid(true);
						}}
					/>
					<FaListAlt
						size={24}
						color="#0066d4"
						onClick={() => {
							setGrid(false);
						}}
					/>
					<p>
						<b>{filteredProducts.length}</b> Products found.
					</p>
				</div>
				{/* Search Icon */}
				<div>
					<Search
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</div>

				{/* Sort Products */}
				<div className={styles.sort}>
					<label>Sort by:</label>
					<select value={sort} onChange={(e) => setSort(e.target.value)}>
						<option value="latest">Latest</option>
						<option value="lowest-price">Lowest Price</option>
						<option value="highest-price">Highest Price</option>
						<option value="a-z">A-Z</option>
						<option value="z-a">Z-A</option>
					</select>
				</div>
			</div>
			{/* <div className={grid ? `${styles.grid}` : `${styles.list}`}> */}

			<Row className="g-3 my-1">
				{products.length === 0 ? (
					<p>No product found.</p>
				) : (
					<>
						{currentProducts.map((product) => {
							return (
								<Col key={product.id} lg={grid ? 3 : 12} md={grid ? 4 : 12} sm={grid ? 6 : 12}>
									<ProductItem {...product} grid={grid} product={product} />
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
