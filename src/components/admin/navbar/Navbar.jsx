import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserName } from "../../../redux/slice/authSlice";
import styles from "./Navbar.module.scss";
import { CiUser } from "react-icons/ci";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Navbar = () => {
	const userName = useSelector(selectUserName);
	return (
		<div className={styles.navbar}>
			<div className={styles.user}>
				<CiUser size="40" className="text-white"/>
        <h4 className="text-white mt-2">
				{userName}

        </h4>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/admin/home" className={activeLink}>
							Home
						</NavLink>
					</li>
						<li>
            <NavLink to="/admin/all-products" className={activeLink}>
							All Products
						</NavLink>
            </li>
					<li>
          <NavLink to="/admin/add-product/ADD" className={activeLink}>
							Add Product
						</NavLink>
          </li>
						<li>
            <NavLink to="/admin/orders" className={activeLink}>
							Orders
						</NavLink>
            </li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
