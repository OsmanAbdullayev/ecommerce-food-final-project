import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../components/admin/home/Home";
import Navbar from "../../components/admin/navbar/Navbar";
import ViewProducts from "../../components/admin/viewProducts/ViewProducts";
import AddProduct from "../../components/admin/addProduct/AddProduct";
import Orders from "../../components/admin/orders/Orders";

import styles from "./Admin.module.scss";
import OrderDetails from "../../components/admin/oderDetails/OrderDetails";

const Admin = () => {
	return (
		<div className={styles.admin}>
			<div className={styles.navbar}>
				<Navbar />
			</div>
			<div className={styles.content}>
				<Routes>
					<Route path="home" element={<Home />} />
					<Route path="all-products" element={<ViewProducts />} />
					<Route path="add-product/:id" element={<AddProduct />} />
					<Route path="orders" element={<Orders />} />
					<Route path="order-details" element={<OrderDetails />} />
				</Routes>
			</div>
		</div>
	);
};

export default Admin;
