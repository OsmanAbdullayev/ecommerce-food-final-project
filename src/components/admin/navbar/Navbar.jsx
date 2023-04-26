import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserName } from "../../../redux/slice/authSlice";
// import styles from "./Navbar.module.scss";
import { CiUser } from "react-icons/ci";
import { Button, ButtonGroup } from "react-bootstrap";
import { ColorModeContext } from "../../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);
	const userName = useSelector(selectUserName);
	return (
		<>
			<div className={`${colorMode === "dark" ? `bg-dark` : `bg-primary `} d-flex justify-content-center align-items-center flex-column p-5 mt-2`}>
				<CiUser size="40" className="text-white" />
				<h4 className="text-white mt-2">{userName}</h4>
			</div>
			<nav>
				<ButtonGroup vertical className="w-100">
					<Button as={NavLink} to="/admin/home" variant={colorMode === `dark` ? `dark` : `light`}>
						&#8250; {t(`home`)}
					</Button>
					<Button as={NavLink} to="/admin/all-products" variant={colorMode === `dark` ? `dark` : `light`}>
						&#8250; {t(`allProducts`)}
					</Button>
					<Button as={NavLink} to="/admin/add-product/ADD" variant={colorMode === `dark` ? `dark` : `light`}>
						&#8250; {t(`addProducts`)}
					</Button>
					<Button as={NavLink} to="/admin/orders" variant={colorMode === `dark` ? `dark` : `light`}>
						&#8250; {t(`orders`)}
					</Button>
				</ButtonGroup>
			</nav>
		</>
	);
};

export default Navbar;
