import React from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BlackBurger from "../../assets/img/menu/burgers-1-300x300.png";
import PepperoniPizza from "../../assets/img/menu/pizza-1-300x300.png";
import VegetableSalad from "../../assets/img/menu/salad1-640x640.jpg";
import NutellaCake from "../../assets/img/menu/dessert2-300x300.jpg";
import CocaCola from "../../assets/img/menu/drinks1-300x300.jpg";
import { SET_CATEGORY } from "../../redux/slice/filterSlice";
import { useDispatch } from "react-redux";

const ProductsSection = () => {
	const dispatch = useDispatch();
	return (
		<Container>
			<h1 className="text-center p-3 my-4">Choose your product</h1>
			<Row className="justify-content-md-center my-1 g-3" >
				<Col sm="6" xs="12" mg="4" lg="2">
		
				<Nav.Link 
				className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Burger"));
						}}>
						<Card className="h-100 overflow-hidden shadow">
							<Card.Img variant="top" src={BlackBurger} />
							<Card.Body>
								<Card.Title className="text-center">Burgers</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
	
				</Col>
				<Col sm="6" xs="12" mg="4" lg="2">
					<Nav.Link 
					className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Pizza"));
						}}>
					 	<Card className="h-100 overflow-hidden shadow">
							<Card.Img variant="top" src={PepperoniPizza} />
							<Card.Body>
								<Card.Title className="text-center">Pizza</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>

				<Col sm="6" xs="12" mg="4" lg="2">
					<Nav.Link 
					className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Side & Salads"));
						}}>
					 	<Card className="h-100 overflow-hidden shadow">
							<Card.Img variant="top" src={VegetableSalad} />
							<Card.Body>
								<Card.Title className="text-center">Sides & Salads</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
				<Col sm="6" xs="12" mg="4" lg="2">
					<Nav.Link 
					className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Desserts"));
						}}>
					 	<Card className="h-100 overflow-hidden shadow">
							<Card.Img variant="top" src={NutellaCake} />
							<Card.Body>
								<Card.Title className="text-center">Desserts</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
				<Col sm="6" xs="12" mg="4" lg="2">
					<Nav.Link 
					className="h-100"
						as={NavLink}
						to="/menu"
						onClick={() => {
							dispatch(SET_CATEGORY("Drinks"));
						}}>
					 	<Card className="overflow-hidden shadow h-100">
							<Card.Img variant="top" src={CocaCola} />
							<Card.Body>
								<Card.Title className="text-center">Drinks</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductsSection;
