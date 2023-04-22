import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserName } from "../../../redux/slice/authSlice";
import styles from "./Navbar.module.scss";
import { CiUser } from "react-icons/ci";
import { Button, ButtonGroup } from "react-bootstrap";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Navbar = () => {
	const userName = useSelector(selectUserName);
	return (
		<>
			<div className="bg-primary d-flex justify-content-center align-items-center flex-column p-5 border-top border-5">
				<CiUser size="40" className="text-white" />
				<h4 className="text-white mt-2">{userName}</h4>
			</div>
			<nav>
				<ButtonGroup vertical className="w-100">
					<Button as={NavLink} to="/admin/home" variant="light">
						&#8250; Home
					</Button>
					<Button as={NavLink} to="/admin/all-products" variant="light">
						&#8250; All Products
					</Button>
					<Button as={NavLink} to="/admin/add-product/ADD" variant="light">
						&#8250; Add Products
					</Button>
					<Button as={NavLink} to="/admin/orders" variant="light">
						&#8250; Orders
					</Button>
				</ButtonGroup>
			</nav>
		</>
	);
};

export default Navbar;
