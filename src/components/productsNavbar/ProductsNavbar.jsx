import React, { useContext } from "react";
import { Container, Nav } from "react-bootstrap";
import { CiBurger, CiFries, CiGlass, CiPizza, CiWheat } from "react-icons/ci";
import styles from "./ProductsNavbar.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_CATEGORY, selectCategory } from "../../redux/slice/filterSlice";
import { ColorModeContext } from "../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const ProductsNavbar = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);
	const dispatch = useDispatch();
	const category = useSelector(selectCategory);

	return (
		<Container fluid className={colorMode === `dark` ? `${styles.hidden} bg-dark` : `${styles.hidden} bg-primary`}>
			<Container className={`${styles.productsNavbar}`}>
				<div className={`${styles.row} py-2 d-flex justify-content-between`}>
					<Nav.Link
						className={category === "Pizza" ? `${styles.active}  text-white` : ` ${styles.categories} text-white`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Pizza"));
						}}
						to="/menu">
						<CiPizza size="3.5em" className={`${styles.icon}`} /> {t(`pizza`)}
					</Nav.Link>

					<Nav.Link
						className={category === "Burger" ? `${styles.active}  text-white` : ` ${styles.categories} text-white`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Burger"));
						}}
						to="/menu">
						<CiBurger size="3.5em" className={`${styles.icon}`} /> 	{t(`burgers`)}
					</Nav.Link>

					<Nav.Link
						className={category === "Side & Salads" ? `${styles.active}  text-white` : ` ${styles.categories} text-white`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Side & Salads"));
						}}
						to="/menu">
						<CiFries size="3.5em" className={`${styles.icon}`} /> 	{t(`sidesandsalads`)}
					</Nav.Link>

					<Nav.Link
						className={category === "Desserts" ? `${styles.active}  text-white` : ` ${styles.categories} text-white`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Desserts"));
						}}
						to="/menu">
						<CiWheat size="3.5em" className={`${styles.icon}`} /> 	{t(`desserts`)}
					</Nav.Link>

					<Nav.Link
						className={category === "Drinks" ? `${styles.active}  text-white` : ` ${styles.categories} text-white`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Drinks"));
						}}
						to="/menu">
						<CiGlass size="3.5em" className={`${styles.icon}`} /> 		{t(`drinks`)}
					</Nav.Link>
				</div>
			</Container>
		</Container>
	);
};

export default ProductsNavbar;
