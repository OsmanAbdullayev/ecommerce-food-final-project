import React, { useContext, useState } from "react";
import { Card, Col, Container, Nav, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Burger from "../../assets/img/menu/burgers-2-300x300.png";
import PepperoniPizza from "../../assets/img/menu/pizza-1-300x300.png";
import VegetableSalad from "../../assets/img/menu/salad1-640x640.png";
import NutellaCake from "../../assets/img/menu/dessert2-300x300.png";
import CocaCola from "../../assets/img/menu/drinks1-300x300.png";
import { SET_CATEGORY } from "../../redux/slice/filterSlice";
import { useDispatch } from "react-redux";

import { ColorModeContext } from "../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const ProductsSection = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);
	const [loaded, setLoaded] = useState(false);

	const dispatch = useDispatch();
	return (
		<Container>
			<h1 className="text-center p-3 my-4">{t(`chooseyourproduct`)}</h1>
			<Row className="justify-content-md-center my-1 g-3">
				<Col sm={6} xs={6} md={4} lg={2}>
					<Nav.Link
						className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Burger"));
						}}>
						<Card className={colorMode === "dark" ? `h-100 overflow-hidden shadow text-primary bg-dark` : `h-100 overflow-hidden shadow`}>
							{loaded ? null : (
								<div className="spinnerBootstrapContainer d-flex justify-content-center align-items-center position-relative">
									<div className="position-absolute spinnerBootstrapDiv">
										<Spinner as={Card.Img} animation="border" variant="primary" />
									</div>
								</div>
							)}
							<Card.Img
								style={loaded ? {} : { display: "none" }}
								onLoad={() => {
									setLoaded(true);
								}}
								variant="top"
								src={Burger}
							/>
							<Card.Body>
								<Card.Title className="text-center">{t(`burgers`)}</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
				<Col sm={6} xs={6} md={4} lg={2}>
					<Nav.Link
						className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Pizza"));
						}}>
						<Card className={colorMode === "dark" ? `h-100 overflow-hidden shadow text-primary bg-dark` : `h-100 overflow-hidden shadow`}>
							<Card.Img variant="top" src={PepperoniPizza} />
							<Card.Body>
								<Card.Title className="text-center">{t(`pizza`)}</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>

				<Col sm={6} xs={6} md={4} lg={2}>
					<Nav.Link
						className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Side & Salads"));
						}}>
						<Card className={colorMode === "dark" ? `h-100 overflow-hidden shadow text-primary bg-dark` : `h-100 overflow-hidden shadow`}>
							<Card.Img variant="top" src={VegetableSalad} />
							<Card.Body>
								<Card.Title className="text-center">{t(`sidesandsalads`)}</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
				<Col sm={6} xs={6} md={4} lg={2}>
					<Nav.Link
						className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Desserts"));
						}}>
						<Card className={colorMode === "dark" ? `h-100 overflow-hidden shadow text-primary bg-dark` : `h-100 overflow-hidden shadow`}>
							<Card.Img variant="top" src={NutellaCake} />
							<Card.Body>
								<Card.Title className="text-center">{t(`desserts`)}</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
				<Col sm={6} xs={6} md={4} lg={2}>
					<Nav.Link
						className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Drinks"));
						}}>
						<Card className={colorMode === "dark" ? `h-100 overflow-hidden shadow text-primary bg-dark` : `h-100 overflow-hidden shadow`}>
							<Card.Img variant="top" src={CocaCola} />
							<Card.Body>
								<Card.Title className="text-center">{t(`drinks`)}</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductsSection;
