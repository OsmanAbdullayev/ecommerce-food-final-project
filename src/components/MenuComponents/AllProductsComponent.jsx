import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../redux/slice/productsSlice";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../Item/Item";
// import products from "../../data/menu";
import PaginationComponent from "../PaginationComponent";
import AddProductForm from "./AddProductForm";
import { nanoid } from "@reduxjs/toolkit";

const AllProductsComponent = (props) => {
	// const products = useSelector(selectAllProducts);
	// const productsCount = products.length;
	// const [currentPage, setCurrentPage] = useState(1);
	// const [productsPerPage] = useState(8);

	// const lastProductNumber = currentPage * productsPerPage;
	// const firstProductNumber = lastProductNumber - productsPerPage;
	// const currentProducts = products.slice(firstProductNumber, lastProductNumber);

	// return (
	// 	<Container>
	// 		<h1 className="text-center py-5">All Products</h1>
	// 		<Row className="g-3">
	// 			{currentProducts.map((fd, i) => {
		
	// 				return (
	// 					<Col key={i} lg={props.lg} md={props.md} sm={props.sm}>
	// 						<Item img={fd.img} title={fd.title} price={fd.price} addProduct={fd} id={nanoid()} />
	// 					</Col>
	// 				);
	// 			})}
	// 		</Row>
	// 		<AddProductForm />
	// 		<PaginationComponent itemsCount={productsCount} itemsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} alwaysShown={false} />
	// 	</Container>
	// );
};

export default AllProductsComponent;
