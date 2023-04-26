import React, { useContext } from "react";
import { Container, Nav } from "react-bootstrap";
import { CiBurger, CiCompass1, CiFries, CiGlass, CiPizza } from "react-icons/ci";
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
				<div className={`${styles.row} py-3 d-flex justify-content-between`}>
					<Nav.Link
						className={category === "Pizza" ? `${styles.active}  text-white` : ` ${styles.categories} text-white d-flex justify-content-center align-items-center`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Pizza"));
						}}
						to="/menu">
						<CiPizza size="4em" className={`${styles.icon} ${styles.productName}`} /> {t(`pizza`)}
					</Nav.Link>

					<Nav.Link
						className={category === "Burger" ? `${styles.active}  text-white` : ` ${styles.categories} text-white d-flex justify-content-center align-items-center`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Burger"));
						}}
						to="/menu">
						<CiBurger size="4em" className={`${styles.icon} ${styles.productName}`} /> {t(`burgers`)}
					</Nav.Link>

					<Nav.Link
						className={category === "Side & Salads" ? `${styles.active}  text-white` : ` ${styles.categories} text-white d-flex justify-content-center align-items-center`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Side & Salads"));
						}}
						to="/menu">
						<CiFries size="4em" className={`${styles.icon} ${styles.productName}`} /> {t(`sidesandsalads`)}
					</Nav.Link>

					<Nav.Link
						className={category === "Desserts" ? `${styles.active}  text-white` : ` ${styles.categories} text-white d-flex justify-content-center align-items-center`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Desserts"));
						}}
						to="/menu">
						<CiCompass1 size="4em" className={`${styles.icon} ${styles.productName}`} /> {t(`desserts`)}
					</Nav.Link>

					<Nav.Link
						className={category === "Drinks" ? `${styles.active}  text-white` : ` ${styles.categories} text-white d-flex justify-content-center align-items-center`}
						as={Link}
						onClick={() => {
							dispatch(SET_CATEGORY("Drinks"));
						}}
						to="/menu">
						<CiGlass size="4em" className={`${styles.icon} ${styles.productName}`} /> {t(`drinks`)}
					</Nav.Link>
				</div>
			</Container>
		</Container>
	);
};

export default ProductsNavbar;
