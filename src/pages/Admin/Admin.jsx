import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../components/admin/home/Home";
import Navbar from "../../components/admin/navbar/Navbar";
import ViewProducts from "../../components/admin/viewProducts/ViewProducts";
import AddProduct from "../../components/admin/addProduct/AddProduct";
import Orders from "../../components/admin/orders/Orders";

import styles from "./Admin.module.scss";
import OrderDetails from "../../components/admin/oderDetails/OrderDetails";
import { Col, Container, Row } from "react-bootstrap";

const Admin = () => {
	return (
		<section>
			<Container fluid>
				<Row>
					<Col lg={3} md={4} sm={6} xsm={12}>
						<Navbar />
					</Col>
					<Col lg={9} md={8} sm={6} xsm={12}>
						<Routes>
							<Route path="home" element={<Home />} />
							<Route path="all-products" element={<ViewProducts />} />
							<Route path="add-product/:id" element={<AddProduct />} />
							<Route path="orders" element={<Orders />} />
							<Route path="order-details" element={<OrderDetails />} />
						</Routes>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Admin;
